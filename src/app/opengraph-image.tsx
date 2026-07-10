import { ImageResponse } from 'next/og';

// Social share card shown when the site link is posted on WhatsApp, Instagram, etc.
export const alt = 'Avin Math Tutoring, bilingual math tutoring that builds confidence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #005B5B 0%, #003d3d 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 600, letterSpacing: 2, color: '#8fd6d0' }}>
          AVIN MATH TUTORING
        </div>
        <div style={{ display: 'flex', marginTop: 28, fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          Math that builds confidence,
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.1, color: '#8fd6d0' }}>
          not just grades.
        </div>
        <div style={{ display: 'flex', marginTop: 36, fontSize: 34, color: '#d7ebe9' }}>
          Personalized 1-on-1 tutoring · Elementary to High School
        </div>
        <div style={{ display: 'flex', marginTop: 12, fontSize: 30, color: '#a9cfcc' }}>
          Bilingual English &amp; Persian (Farsi) · Online &amp; In-Person (North York &amp; Vaughan)
        </div>
      </div>
    ),
    { ...size },
  );
}
