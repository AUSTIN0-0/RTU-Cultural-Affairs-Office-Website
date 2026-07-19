import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import { IconSearch } from '../components/Common/Icons';
import { citizenCharterList } from '../data/citizenCharterData';

// This page intentionally mirrors the "Forms" page (src/pages/Forms.jsx) —
// same layout, styling, responsiveness, and search behavior — just fed from
// citizenCharterData.js instead of formsData.js. Swap the placeholder
// entries in that file for the unit's real Citizen Charter documents
// whenever they're ready; nothing here needs to change.
export default function CitizenCharter() {
  const [query, setQuery] = useState('');

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return citizenCharterList;
    return citizenCharterList.filter((d) => d.title.toLowerCase().includes(q));
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
                { label: 'Citizen Charter' },
              ]}
            />
            <p className="eyebrow">Transparency</p>
            <h1>Our Citizen Charter, in one place.</h1>
            <p className="hero-dek">
              Every Citizen Charter document the Cultural Affairs Office publishes — service standards, frontline
              procedures, and feedback channels — searchable, ready to open.
            </p>
          </div>
        </section>

        <section id="citizen-charter" className="sop-directory" aria-labelledby="citizen-charter-title">
          <div className="wrap">
            <SectionHeading
              center
              eyebrow="D. Citizen Charter"
              title="Cultural Affairs Office Citizen Charter"
              subtitle="Search to filter, then open the document. Content on this page is a placeholder — replace it with the Office's real Citizen Charter documents whenever they're ready."
              id="citizen-charter-title"
            />

            <div className="sop-search">
              <IconSearch />
              <input
                type="text"
                placeholder="Search Citizen Charter documents — e.g. “service”, “feedback”, “procedure”…"
                aria-label="Search Citizen Charter documents"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="sop-list">
              {filteredDocs.map((doc) => (
                <div className="form-item" key={doc.code}>
                  <div>
                    <span className="sop-code">{doc.code}</span>
                    <h3>{doc.title}</h3>
                  </div>
                  <a className="open-btn" href={doc.url} target="_blank" rel="noopener noreferrer">Open</a>
                </div>
              ))}
            </div>

            {filteredDocs.length === 0 && (
              <p className="no-results">No Citizen Charter documents match that search. Try a different word.</p>
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
