'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Geo {
  country: string; // ISO alpha-2, uppercase (e.g. "CA")
  region: string;
  city: string;
}

interface LocationContextType {
  loading: boolean;
  geo: Geo | null;
  // True only for visitors in the Toronto / GTA area, where in-person tutoring is offered.
  allowInPerson: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Cities in Avin's in-person service area (North York, Vaughan & Scarborough) and the surrounding GTA.
// IP city names vary (e.g. "York", "North York", "Toronto"), so this is a best-effort
// fast-path; the Ontario region check below is the reliable gate.
const GTA_CITIES = [
  'toronto', 'york', 'north york', 'east york', 'scarborough', 'etobicoke',
  'vaughan', 'thornhill', 'concord', 'maple', 'woodbridge', 'richmond hill',
  'markham', 'unionville', 'mississauga', 'brampton', 'aurora', 'newmarket',
];

function toGeo(d: Record<string, unknown>): Geo {
  const s = (v: unknown) => (v == null ? '' : String(v));
  return {
    country: s(d.country_code ?? d.country).toUpperCase(),
    region: s(d.region ?? d.region_name ?? d.region_code),
    city: s(d.city),
  };
}

async function detectGeo(): Promise<Geo | null> {
  const sources: Array<() => Promise<Geo>> = [
    async () => toGeo(await (await fetch('https://ipwho.is/')).json()),
    async () => toGeo(await (await fetch('https://ipapi.co/json/')).json()),
  ];
  for (const get of sources) {
    try {
      const geo = await get();
      if (geo.country) return geo;
    } catch {
      // try the next source
    }
  }
  return null;
}

function computeAllowInPerson(geo: Geo | null): boolean {
  // In-person is Canada-only. Iran and all other international visitors see online tutoring only.
  if (!geo || geo.country !== 'CA') return false;
  const region = geo.region.toLowerCase();
  const city = geo.city.toLowerCase();
  // Reliable gate: anyone in Ontario (where the GTA in-person area is).
  if (region.includes('ontario') || region === 'on') return true;
  // Fallback in case the region name is missing but the city is a known GTA city.
  return GTA_CITIES.some((c) => city.includes(c) || c.includes(city));
}

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [geo, setGeo] = useState<Geo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    detectGeo().then((result) => {
      if (cancelled) return;
      setGeo(result);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const allowInPerson = computeAllowInPerson(geo);

  return (
    <LocationContext.Provider value={{ loading, geo, allowInPerson }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
