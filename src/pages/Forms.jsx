import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import { IconSearch } from '../components/Common/Icons';
import { formsList } from '../data/formsData';

// This page intentionally mirrors the "Standard Operating Procedures"
// section on the Public Information page — same layout, styling,
// responsiveness, and search behavior — just fed from formsData.js instead
// of publicInfoData.js. Swap the placeholder entries in that file for the
// unit's real downloadable forms whenever they're ready; nothing here needs
// to change.
export default function Forms() {
  const [query, setQuery] = useState('');

  const filteredForms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return formsList;
    return formsList.filter((f) => f.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <ProgressBar />
      <Navbar />

      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Breadcrumb
              trail={[
                { label: 'Home', to: '/' },
                { label: 'Public Information', to: '/public-information' },
                { label: 'Forms' },
              ]}
            />
            <p className="eyebrow">Transparency</p>
            <h1>Downloadable forms, in one place.</h1>
            <p className="hero-dek">
              Every form the Cultural Affairs Unit uses — membership, requests, and clearances — searchable, ready
              to open and fill out.
            </p>
          </div>
        </section>

        <section id="forms" className="sop-directory" aria-labelledby="forms-title">
          <div className="wrap">
            <SectionHeading
              center
              eyebrow="C. Forms"
              title="Cultural Affairs Unit Forms"
              subtitle="Search to filter, then open the document. Content on this page is a placeholder — replace it with the unit's real forms whenever they're ready."
              id="forms-title"
            />

            <div className="sop-search">
              <IconSearch />
              <input
                type="text"
                placeholder="Search forms — e.g. “membership”, “request”, “borrowing”…"
                aria-label="Search Forms"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="sop-list">
              {filteredForms.map((form) => (
                <div className="form-item" key={form.code}>
                  <div>
                    <span className="sop-code">{form.code}</span>
                    <h3>{form.title}</h3>
                  </div>
                  <a className="open-btn" href={form.url} target="_blank" rel="noopener noreferrer">Open</a>
                </div>
              ))}
            </div>

            {filteredForms.length === 0 && (
              <p className="no-results">No forms match that search. Try a different word.</p>
            )}

            <p style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/public-information#sop" className="btn btn-outline">← Back to Standard Operating Procedures</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
