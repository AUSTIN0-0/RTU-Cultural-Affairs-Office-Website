import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import { IconSearch } from '../components/Common/Icons';
import { legalBases, sopList, creativeDomains } from '../data/publicInfoData';

// Legal body entries are plain strings, `{ quote }`, or `{ implication }`.
// A light **bold** markdown pass keeps the data file readable without JSX.
function renderBodyText(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part));
}

function LegalItem({ law, defaultOpen }) {
  return (
    <details className="legal-item" open={defaultOpen}>
      <summary>
        <span className="law-name">{law.name}</span>
        <span className="plus">+</span>
      </summary>
      <div className="legal-body">
        {law.body.map((entry, i) => {
          if (typeof entry === 'string') return <p key={i}>{renderBodyText(entry)}</p>;
          if (entry.quote) return <blockquote key={i}>{entry.quote}</blockquote>;
          if (entry.implication) return <p key={i} className="implication">{entry.implication}</p>;
          return null;
        })}
        {law.domains && (
          <div className="domain-grid">
            {creativeDomains.map((d) => (
              <div className="domain-card" key={d.letter}>
                <span className="domain-letter">{d.letter}</span>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export default function PublicInfo() {
  const [query, setQuery] = useState('');

  const filteredSops = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sopList;
    return sopList.filter((s) => s.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <ProgressBar />
      <Navbar />

      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Public Information' }]} />
            <p className="eyebrow">Transparency</p>
            <h1>The legal foundation and the paperwork behind it.</h1>
            <p className="hero-dek">
              Every mandate CAO operates under, and every Standard Operating Procedure that keeps the Office running —
              searchable, in one place.
            </p>
          </div>
        </section>

        {/* Legal bases */}
        <section id="legal" className="legal-bases" aria-labelledby="legal-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="A. Legal bases and references"
              title="Republic Acts, the Constitution & CHED policy"
              subtitle="The statutes and issuances that give State universities — and office like CAO — their mandate to protect and promote Filipino culture. Tap any entry to expand it."
              id="legal-title"
            />
            <div className="legal-list">
              {legalBases.map((law, i) => (
                <LegalItem key={law.id} law={law} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* SOP directory */}
        <section id="sop" className="sop-directory" aria-labelledby="sop-title">
          <div className="wrap">
            <SectionHeading
              center
              eyebrow="B. Standard Operating Procedure"
              title="Standard Operating Procedures"
              subtitle="Eighteen SOPs covering membership, performances, benefits, discipline, transactions, and evaluation. Search to filter, then open the document."
              id="sop-title"
            />

            <div className="sop-search">
              <IconSearch />
              <input
                type="text"
                placeholder="Search SOPs — e.g. “membership”, “donation”, “clearance”…"
                aria-label="Search Standard Operating Procedures"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="sop-list">
              {filteredSops.map((sop) => (
                <div className="form-item" key={sop.code}>
                  <div>
                    <span className="sop-code">{sop.code}</span>
                    <h3>{sop.title}</h3>
                  </div>
                  <a className="open-btn" href={sop.url} target="_blank" rel="noopener noreferrer">Open</a>
                </div>
              ))}
            </div>

            {filteredSops.length === 0 && (
              <p className="no-results">No SOPs match that search. Try a different word.</p>
            )}

            <p style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/public-information/forms" className="btn btn-outline">C. Browse Forms →</Link>
              <Link to="/public-information/citizen-charter" className="btn btn-outline">D. Browse Citizen Charter →</Link>
            </p>
            
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
