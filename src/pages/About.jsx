import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import {
  institution,
  cauFacts,
  historyParagraphs,
  leaders,
  productions,
  logoMeaning,
  songs,
} from '../data/aboutData';

export default function About() {
  return (
    <>
      <ProgressBar />
      <Navbar />

      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
            <p className="eyebrow">Our story</p>
            <h1>Nearly forty years of Rizaliano culture on stage.</h1>
            <p className="hero-dek">
              From a single theater troupe founded in 1986 to eight ensembles carrying Filipino heritage into
              national and international competition — this is the institutional foundation behind Kultura Rizalia.
            </p>
          </div>
        </section>

        {/* Institutional foundation */}
        <section className="institution" aria-labelledby="rtu-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Rizal Technological University"
              title="Institutional Foundation"
              subtitle="The mission, vision, and values that every RTU Office — including CAO — is built on."
              id="rtu-title"
            />
            <div className="info-grid">
              <div className="info-card">
                <h3>Mission</h3>
                <p>{institution.mission.en}</p>
                <p className="fil">{institution.mission.fil}</p>
              </div>
              <div className="info-card">
                <h3>Vision</h3>
                <p>{institution.vision.en}</p>
                <p className="fil">{institution.vision.fil}</p>
              </div>
              <div className="info-card span-2">
                <h3>Philosophy</h3>
                <p>{institution.philosophy.en}</p>
                <p className="fil">{institution.philosophy.fil}</p>
              </div>
              <div className="info-card">
                <h3>EOMS Policy</h3>
                {institution.eoms.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="info-card">
                <h3>Core Values</h3>
                <ul className="values-list">
                  {institution.coreValues.map((v) => <li key={v}>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CAU description / goals / objectives + history */}
        <section className="cau-about" aria-labelledby="cau-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Creativity · Culture · Excellence"
              title="The Cultural Affairs Office"
              subtitle="What CAO is, what it's working toward, and why."
              id="cau-title"
            />

            <div className="feature-grid" style={{ marginBottom: 60 }}>
              <div className="fact-card">
                <p className="eyebrow" style={{ marginBottom: '.4em' }}>Description</p>
                <p style={{ margin: 0 }}>{cauFacts.description}</p>
              </div>
              <div className="fact-card">
                <p className="eyebrow" style={{ marginBottom: '.4em' }}>Goals</p>
                <p style={{ margin: 0 }}>{cauFacts.goals}</p>
              </div>
            </div>
            <div className="fact-card" style={{ marginBottom: 70 }}>
              <p className="eyebrow" style={{ marginBottom: '.4em' }}>Objectives</p>
              <p style={{ margin: 0 }}>{cauFacts.objectives}</p>
            </div>

            <article style={{ maxWidth: 820, margin: '0 auto 70px' }}>
              <p className="eyebrow">Since 1986</p>
              <h2>History</h2>
              {historyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </article>

            {/* Leadership timeline */}
            <div style={{ maxWidth: 820, margin: '0 auto 70px' }}>
              <p className="eyebrow">Leadership through the years</p>
              <h2 style={{ marginBottom: '1em' }}>Who has led Teatro Rizalia and CAO</h2>
              <p style={{ marginBottom: '2em' }}>
                The leaders of the Cultural Affairs Office who have contributed to realizing RTU's vision, mission,
                goals, and objectives for Teatro Rizalia.
              </p>
              <div className="timeline">
                {leaders.map((l) => (
                  <div className="timeline-item" key={l.name + l.range}>
                    <span className="timeline-range">{l.range}</span>
                    <span className="timeline-name">{l.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Productions */}
            <div style={{ marginBottom: 70 }}>
              <p className="eyebrow">Nearly four decades of programming</p>
              <h2 style={{ marginBottom: '.6em' }}>Major Productions & Programs</h2>
              <p style={{ maxWidth: 760, marginBottom: '2em' }}>
                From 1986 to the present, Teatro Rizalia and its troupes have staged and joined the following major
                productions, competitions, and programs.
              </p>
              <ul className="tag-cloud">
                {productions.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>

            {/* Logo meaning */}
            <div className="logo-feature">
              <img src="/media/CAU.png" alt="Cultural Affairs office logo" />
              <div>
                <span className="credit">{logoMeaning.credit}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '.5em' }}>
                  {logoMeaning.title}
                </h3>
                <p>{logoMeaning.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Org chart */}
        <section id="org" className="org-chart" aria-labelledby="org-title">
          <div className="wrap">
            <p className="eyebrow">Public information</p>
            <h2 id="org-title">Organizational Structure</h2>
            <p className="section-sub" style={{ margin: '0 auto 40px' }}>
              How the Cultural Affairs Office is organized, from leadership down to each troupe.
            </p>
            <div className="org-chart-frame">
              <img src="/media/ORG chart.jpg" alt="Cultural Affairs office organizational chart" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Songs */}
        <section id="song" className="songbook" aria-labelledby="song-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="RTU song lyrics"
              title="Preliminary Songs"
              subtitle="The anthems and marches sung at Rizal Technological University and Teatro Rizalia events."
              id="song-title"
            />

            <div className="song-grid" style={{ marginBottom: 24 }}>
              {songs.slice(0, 2).map((song) => (
                <SongCard key={song.title} song={song} />
              ))}
            </div>
            <div className="song-grid" style={{ marginBottom: 24 }}>
              {songs.slice(2, 4).map((song) => (
                <SongCard key={song.title} song={song} />
              ))}
            </div>
            <div className="song-grid">
              {songs.slice(4).map((song) => (
                <SongCard key={song.title} song={song} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}

function SongCard({ song }) {
  return (
    <div className={`song-card${song.inverted ? ' inverted' : ''}${song.full ? ' full' : ''}`} style={song.full ? { textAlign: 'center' } : undefined}>
      {song.full && song.logo && (
        <img
          src={song.logo}
          alt="Teatro Rizalia logo"
          style={{ width: 120, height: 120, objectFit: 'contain', borderRadius: '50%', border: '4px solid var(--gold)', margin: '0 auto 20px', background: '#fff' }}
        />
      )}
      <h3>{song.title}</h3>
      <span className="song-credit">{song.credit}</span>
      <p className="song-lyrics" style={song.full ? { textAlign: 'left', maxWidth: 640, margin: '0 auto' } : undefined}>
        {song.lyrics}
      </p>
    </div>
  );
}
