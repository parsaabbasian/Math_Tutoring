'use client';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './Contact.module.css';
import CalendlyModal from './CalendlyModal';

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const LaptopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Contact() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].contact;
  const [tutoringType, setTutoringType] = useState<'online' | 'in-person'>('online');
  const [address, setAddress] = useState('');
  const [eligibility, setEligibility] = useState<
    | { status: 'idle' }
    | { status: 'eligible'; area: string }
    | { status: 'blocked' }
    | { status: 'unknown' }
  >({ status: 'idle' });
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>('ca');
  const [postalCheck, setPostalCheck] = useState('');
  const [postalResult, setPostalResult] = useState<{ status: 'idle' | 'eligible' | 'blocked' | 'unknown'; area?: string }>({ status: 'idle' });
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [prefill, setPrefill] = useState<{
    name: string; email: string; phone: string;
    tutoringMode: string; country: string; grade: string; address: string;
  }>({ name: '', email: '', phone: '', tutoringMode: '', country: '', grade: '', address: '' });
  const [selectedSpecificGrade, setSelectedSpecificGrade] = useState<string>('');

  const getSpecificGrades = (country: string, levelId: string) => {
    if (levelId === 'college' || levelId === 'university' || levelId === 'sixth') {
      if (levelId === 'sixth') return [12, 13];
      return ['Calculus 1', 'Calculus 3'];
    }
    switch (country) {
      case 'ca':
        if (levelId === 'elementary') return [1, 2, 3, 4, 5, 6, 7, 8];
        if (levelId === 'secondary') return [9, 10, 11, 12];
        break;
      case 'us':
        if (levelId === 'elementary') return [1, 2, 3, 4, 5];
        if (levelId === 'middle') return [6, 7, 8];
        if (levelId === 'high') return [9, 10, 11, 12];
        break;
      case 'uk':
        if (levelId === 'primary') return [1, 2, 3, 4, 5, 6];
        if (levelId === 'secondary') return [7, 8, 9, 10, 11];
        break;
      case 'au':
        if (levelId === 'primary') return [1, 2, 3, 4, 5, 6];
        if (levelId === 'secondary') return [7, 8, 9, 10, 11, 12];
        break;
      case 'ir':
        if (levelId === 'primary') return [1, 2, 3, 4, 5, 6];
        if (levelId === 'middle') return [7, 8, 9];
        if (levelId === 'high') return [10, 11, 12];
        break;
    }
    return [];
  };

  const SERVICE_AREAS = [
    {
      name: 'North York',
      keywords: ['north york', 'willowdale', 'don mills', 'bathurst manor', 'downsview', 'newtonbrook', 'parkwoods', 'victoria village', 'flemingdon'],
      postal: ['M2J', 'M2K', 'M2L', 'M2M', 'M2N', 'M2P', 'M2R', 'M3A', 'M3B', 'M3C', 'M3H', 'M3J', 'M3K', 'M3L', 'M3M'],
    },
    {
      name: 'Richmond Hill',
      keywords: ['richmond hill', 'richvale', 'oak ridges', 'langstaff', 'beaver creek', 'north richvale'],
      postal: ['L4B', 'L4C', 'L4E', 'L4S'],
    },
    {
      name: 'Vaughan',
      keywords: ['vaughan', 'woodbridge', 'thornhill', 'maple', 'concord', 'kleinburg', 'vellore', 'patterson'],
      postal: ['L4H', 'L4J', 'L4K', 'L4L', 'L6A'],
    },
  ] as const;

  const BLOCKED_AREAS = {
    keywords: ['jane and finch', 'jane & finch', 'jane finch', 'jane/finch', 'jane+finch'],
    postal: ['M3N'],
  };

  const checkEligibility = (val: string) => {
    if (tutoringType === 'online') { setEligibility({ status: 'idle' }); return; }
    const raw = val.trim();
    if (raw.length < 3) { setEligibility({ status: 'idle' }); return; }

    const normalized = raw.toLowerCase();
    // Strip spaces for postal code matching (e.g. "M2N 1A1" → "M2N")
    const postalPrefix = raw.replace(/\s+/g, '').substring(0, 3).toUpperCase();

    // Check blocked first
    const blocked =
      BLOCKED_AREAS.keywords.some(k => normalized.includes(k)) ||
      BLOCKED_AREAS.postal.includes(postalPrefix);
    if (blocked) { setEligibility({ status: 'blocked' }); return; }

    // Check eligible areas
    for (const area of SERVICE_AREAS) {
      const keywordMatch = area.keywords.some(k => normalized.includes(k));
      const postalMatch = (area.postal as readonly string[]).includes(postalPrefix);
      if (keywordMatch || postalMatch) {
        setEligibility({ status: 'eligible', area: area.name });
        return;
      }
    }

    setEligibility({ status: 'unknown' });
  };

  const checkPostal = (val: string) => {
    const prefix = val.replace(/\s+/g, '').substring(0, 3).toUpperCase();
    if (prefix.length < 3) { setPostalResult({ status: 'idle' }); return; }
    if (BLOCKED_AREAS.postal.includes(prefix)) { setPostalResult({ status: 'blocked' }); return; }
    for (const area of SERVICE_AREAS) {
      if ((area.postal as readonly string[]).includes(prefix)) {
        setPostalResult({ status: 'eligible', area: area.name });
        return;
      }
    }
    setPostalResult({ status: 'unknown' });
  };

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    if (countryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [countryDropdownOpen]);

  const isFormValid = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    const studentName = (formData.get('studentName') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();

    // Check required fields
    if (!studentName || !email || !selectedSchoolLevel) return false;

    // Check if specific grade is selected when school level is selected
    if (selectedSchoolLevel) {
      const specificGrade = formRef.current.querySelector('input[name="specificGrade"]:checked');
      if (!specificGrade) return false;
    }

    // Check in-person requirements
    if (tutoringType === 'in-person') {
      const addressField = (formData.get('address') as string || '').trim();
      if (!addressField || !postalCheck.trim() || postalResult.status !== 'eligible') {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tutoringType === 'in-person' && (postalResult.status === 'blocked' || postalResult.status === 'unknown')) return;
    const form = e.currentTarget;
    const data = new FormData(form);

    const countryLabel = translations[language === 'en' ? 'en' : 'fa'].contact.form.countries
      .find((c: any) => c.id === selectedCountry)?.label || selectedCountry;

    const levelLabel = translations[language === 'en' ? 'en' : 'fa'].contact.form
      .systems[selectedCountry as keyof typeof translations['en']['contact']['form']['systems']]
      ?.levels.find((l: any) => l.id === selectedSchoolLevel)?.label || '';

    const gradeLabel = selectedSpecificGrade
      ? `${levelLabel}, ${selectedSpecificGrade}`
      : levelLabel;

    setPrefill({
      name: (data.get('studentName') as string) || '',
      email: (data.get('email') as string) || '',
      phone: (data.get('phone') as string) || '',
      tutoringMode: tutoringType === 'online'
        ? (language === 'en' ? 'Online Tutoring ($20/hr)' : 'آموزش آنلاین (۲۰ دلار/ساعت)')
        : (language === 'en' ? 'In Person Tutoring ($40/hr)' : 'آموزش حضوری (۴۰ دلار/ساعت)'),
      country: countryLabel,
      grade: gradeLabel,
      address: tutoringType === 'in-person' ? `${address}, ${postalCheck}`.trim().replace(/^,\s*/, '') : '',
    });
    setCalendlyOpen(true);
  };

  return (
    <section id="join" className={`section ${styles.contact}`}>
      <div className={styles.contactBg}></div>
      <div className={`container ${styles.contactContainer}`}>
        <div className={`${styles.infoSection} fade-in`}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className="section-title" style={{ textAlign: isRTL ? 'right' : 'left', marginBottom: '24px' }}>{t.title}</h2>
          <p className={styles.infoDescription}>{t.description}</p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><MailIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>{t.info.email}</h4>
                <p className={styles.detailValue} dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <a href="mailto:avin.math@gmail.com" style={{ color: 'inherit' }}>
                    avin.math@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><PhoneIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>{t.info.phone}</h4>
                <p className={styles.detailValue} dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <a href="tel:+16479977324" className={styles.phoneNumber} style={{ color: 'inherit' }}>
                    +1 (647) 997 7324
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><GlobeIcon /></div>
              <div><h4 className={styles.detailTitle}>{t.info.bilingual}</h4><p className={styles.detailValue}>{t.info.bilingualDesc}</p></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><LaptopIcon /></div>
              <div><h4 className={styles.detailTitle}>{t.info.location}</h4><p className={styles.detailValue}>{t.info.locationDesc}</p></div>
            </div>
          </div>
        </div>

        <div className={`${styles.formWrapper} fade-in`}>
          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>{t.services.title}</h3>

            <div className={styles.serviceCards}>
              <button
                type="button"
                className={`${styles.serviceCard} ${tutoringType === 'online' ? styles.serviceActive : ''}`}
                onClick={() => { setTutoringType('online'); setEligibility({ status: 'idle' }); }}
              >
                <div className={styles.serviceIcon}><LaptopIcon /></div>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceTitle}>{t.services.online.title}</span>
                  <span className={styles.servicePrice}>{t.services.online.price}</span>
                  <p className={styles.serviceDesc}>{t.services.online.desc}</p>
                </div>
              </button>
              <button
                type="button"
                className={`${styles.serviceCard} ${tutoringType === 'in-person' ? styles.serviceActive : ''}`}
                onClick={() => { setTutoringType('in-person'); if (address) checkEligibility(address); }}
              >
                <div className={styles.serviceIcon}><PhoneIcon /></div>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceTitle}>{t.services.inPerson.title}</span>
                  <span className={styles.servicePrice}>{t.services.inPerson.price}</span>
                  <p className={styles.serviceDesc}>{t.services.inPerson.desc}</p>
                </div>
              </button>
            </div>

            <p className={styles.trialNote} dir={isRTL ? 'rtl' : 'ltr'}>{t.services.trialNote}</p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} dir={isRTL ? 'rtl' : 'ltr'}>
              <div className={styles.inputGroup}>
                <label htmlFor="studentName" className={styles.label}>{t.form.studentName}</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  className={styles.input}
                  required
                  placeholder={language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>{t.form.email}</label>
                  <input type="email" id="email" name="email" className={styles.input} required placeholder="email@example.com" dir="ltr" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>{t.form.phone}</label>
                  <input type="tel" id="phone" name="phone" className={styles.input} placeholder={language === 'fa' ? '۰۹۱۲۰۰۰۰۰۰۰' : '(555) 000-0000'} />
                </div>
              </div>

              {tutoringType === 'in-person' && (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="address" className={styles.label}>
                      {language === 'fa' ? 'آدرس خیابان' : 'Street Address'}
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className={styles.input}
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={language === 'fa' ? 'مثلاً: ۱۲۳ خیابان Yonge' : 'e.g. 123 Yonge St'}
                      autoComplete="street-address"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="postalCode" className={styles.label}>
                      {language === 'fa' ? 'کد پستی' : 'Postal Code'}
                    </label>
                    <p className={styles.addressHint}>
                      {language === 'fa'
                        ? 'مناطق تحت پوشش: North York · Richmond Hill · Vaughan'
                        : 'Covered areas: North York · Richmond Hill · Vaughan'}
                    </p>
                    <div className={styles.addressInputWrap}>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        className={`${styles.input} ${
                          postalResult.status === 'blocked' || postalResult.status === 'unknown' ? styles.inputError :
                          postalResult.status === 'eligible' ? styles.inputSuccess : ''
                        }`}
                        required
                        maxLength={7}
                        value={postalCheck}
                        onChange={(e) => { setPostalCheck(e.target.value); checkPostal(e.target.value); checkEligibility(e.target.value); }}
                        placeholder={language === 'fa' ? 'مثلاً: M2N 2E9' : 'e.g. M2N 2E9'}
                        autoComplete="postal-code"
                        style={{ textTransform: 'uppercase' }}
                      />
                      {postalResult.status === 'eligible' && (
                        <span className={styles.addressIcon} aria-hidden="true">✓</span>
                      )}
                      {(postalResult.status === 'blocked' || postalResult.status === 'unknown') && (
                        <span className={`${styles.addressIcon} ${styles.addressIconBlocked}`} aria-hidden="true">✕</span>
                      )}
                    </div>

                    {postalResult.status === 'eligible' && (
                      <p className={styles.eligibilitySuccess}>
                        {language === 'fa'
                          ? `${postalResult.area} (در محدوده ارائه خدمات است)`
                          : `${postalResult.area} (in person is available in your area)`}
                      </p>
                    )}
                    {postalResult.status === 'blocked' && (
                      <p className={styles.eligibilityError}>
                        {language === 'fa'
                          ? 'این کد پستی در محدوده خدمات حضوری نیست. پیشنهاد می‌کنیم از آموزش آنلاین استفاده کنید!'
                          : "This postal code isn't in our service area. We'd love to help you Online instead!"}
                      </p>
                    )}
                    {postalResult.status === 'unknown' && postalCheck.length >= 3 && (
                      <p className={styles.eligibilityWarning}>
                        {language === 'fa'
                          ? 'این کد پستی خارج از محدوده فعلی ماست.'
                          : 'This postal code is outside our current service area.'}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>{t.form.country}</label>
                  <div ref={countryDropdownRef} className={styles.countryDropdown}>
                    <button
                      type="button"
                      className={`${styles.countryButton} ${countryDropdownOpen ? styles.countryButtonOpen : ''}`}
                      onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={countryDropdownOpen}
                    >
                      <span className={styles.countryLabel}>
                        {t.form.countries.find((c: any) => c.id === selectedCountry)?.label || 'Select'}
                      </span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.countryChevron}>
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {countryDropdownOpen && (
                      <div className={styles.countryMenu} dir={isRTL ? 'rtl' : 'ltr'}>
                        {t.form.countries.map((country: any) => (
                          <button
                            key={country.id}
                            type="button"
                            className={`${styles.countryOption} ${selectedCountry === country.id ? styles.countryOptionSelected : ''}`}
                            onClick={() => {
                              setSelectedCountry(country.id);
                              setSelectedSchoolLevel(null);
                              setCountryDropdownOpen(false);
                            }}
                          >
                            <span>{country.label}</span>
                            {selectedCountry === country.id && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                    <input type="hidden" name="country" value={selectedCountry} />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>{t.form.grade}</label>
                <div className={styles.gradeGrid}>
                  {t.form.systems[selectedCountry as keyof typeof t.form.systems].levels.map((level: any) => (
                    <label key={level.id} className={styles.gradeCard}>
                      <input
                        type="radio"
                        name="schoolLevel"
                        value={level.label}
                        required
                        className={styles.radioInput}
                        checked={selectedSchoolLevel === level.id}
                        onChange={() => { setSelectedSchoolLevel(level.id); setSelectedSpecificGrade(''); }}
                      />
                      <span className={styles.gradeName}>{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {selectedSchoolLevel && (
                <div className={`${styles.inputGroup} fade-in`}>
                  <label className={styles.label}>
                    {(selectedSchoolLevel === 'college' || selectedSchoolLevel === 'university')
                      ? (language === 'fa' ? 'انتخاب درس' : 'Select Course')
                      : t.form.specificGrade}
                  </label>
                  <div className={styles.gradeGrid}>
                    {getSpecificGrades(selectedCountry, selectedSchoolLevel).map((gradeNum) => (
                      <label key={gradeNum} className={styles.gradeCard}>
                        <input type="radio" name="specificGrade" value={gradeNum as string} required className={styles.radioInput} onChange={() => setSelectedSpecificGrade(String(gradeNum))} />
                        <span className={styles.gradeName}>
                          {gradeNum === 'K' || String(gradeNum).startsWith('Calculus')
                            ? String(gradeNum)
                            : `${t.form.systems[selectedCountry as keyof typeof t.form.systems].gradePrefix}${gradeNum}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className={`btn-primary ${styles.submitButton}`}
                disabled={!isFormValid()}
                title={!isFormValid() ? (language === 'en' ? 'Please fill in all required fields' : 'لطفاً تمام فیلدهای الزامی را پر کنید') : ''}
              >
                {t.form.bookDirect}
                <span style={{ transform: isRTL ? 'rotate(180deg)' : 'none', display: 'inline-block', marginLeft: isRTL ? '0' : '8px', marginRight: isRTL ? '8px' : '0' }}>→</span>
              </button>
              {!isFormValid() && selectedSchoolLevel && (
                <p className={styles.formHint}>
                  {language === 'en'
                    ? 'Fill in all fields above to continue'
                    : 'لطفاً تمام فیلدهای بالا را پر کنید تا ادامه دهید'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <CalendlyModal
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
        prefill={prefill}
      />
    </section>
  );
}
