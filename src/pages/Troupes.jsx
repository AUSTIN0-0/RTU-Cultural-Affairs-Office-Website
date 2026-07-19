import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import TroupeReel from '../components/HeroCarousel/TroupeReel';
import JourneyGallery from '../components/Gallery/JourneyGallery';
import { IconFacebook, IconInstagram, IconTiktok, IconYoutube, IconMail, IconPhone } from '../components/Common/Icons';
import { getTroupeBySlug } from '../data/troupesData';
import '../styles/troupe.css';

const ICONS = { fb: IconFacebook, ig: IconInstagram, tiktok: IconTiktok, yt: IconYoutube, mail: IconMail, phone: IconPhone };

export default function Troupes() {
  const { slug } = useParams();
  const troupe = getTroupeBySlug(slug);

  if (!troupe) return <Navigate to="/troupes/kultura" replace />;

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
                { label: 'Troupes', to: '/#troupes' },
                { label: troupe.name },
              ]}
            />
            <p className="eyebrow">{troupe.craft}</p>
            <h1>{troupe.name}</h1>
            <p className="hero-dek">{troupe.tagline}</p>
          </div>
        </section>

        <TroupeReel slides={troupe.reel} />

        {/* Adviser note */}
        <section className="editor-note" aria-labelledby="adviser-title">
          <div className="wrap editor-grid">
            <figure className="editor-portrait">
              <img src={troupe.adviser.img} alt={troupe.adviser.name} />
              <figcaption>
                <span className="portrait-name">{troupe.adviser.name}</span>
                <span className="portrait-role">{troupe.adviser.role}</span>
              </figcaption>
            </figure>
            <div className="editor-copy">
              <p className="eyebrow" id="adviser-title">A note from the adviser</p>
              <blockquote>&ldquo;{troupe.adviser.quote}&rdquo;</blockquote>
            </div>
          </div>
        </section>

        {/* Logo meaning + history */}
        <section className="cau-about" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="logo-feature" style={{ marginBottom: 70 }}>
              <img src={troupe.logo} alt={`${troupe.name} logo`} />
              <div>
                <span className="credit">What the logo means</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '.5em' }}>
                  {troupe.logoMeaning.title}
                </h3>
                <p>{troupe.logoMeaning.text}</p>
              </div>
            </div>

            <div className="feature-grid">
              <article className="feature-col">
                <p className="eyebrow">The art form</p>
                <h2>{troupe.artHistory.title}</h2>
                <p>{troupe.artHistory.text}</p>
              </article>
              <article className="feature-col">
                <p className="eyebrow">At RTU</p>
                <h2>{troupe.troupeHistory.title}</h2>
                <p>{troupe.troupeHistory.text}</p>
                {troupe.troupeHistory.note && (
                  <p style={{ fontSize: '.82rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                    Note: {troupe.troupeHistory.note}
                  </p>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* Journey gallery */}
        <section className="journey-section" aria-labelledby="journey-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Behind the performances"
              title="Our Journey"
              subtitle="Excellence in every performance art."
              id="journey-title"
            />
            <JourneyGallery folder={troupe.galleryFolder} name={troupe.name} />
          </div>
        </section>

        {/* Connect CTA */}
        <section className="connect-cta">
          <div className="wrap connect-inner">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Get involved</p>
              <h2>Want to join {troupe.name}?</h2>
              <p>{troupe.connectBlurb}</p>
            </div>
            <div className="connect-links">
              <a href={troupe.fbUrl} target="_blank" rel="noopener noreferrer" className="primary">
                <IconFacebook /> <span>Message us</span>
              </a>
              {troupe.socials.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
                    <Icon /> <span>{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick links to the other troupes */}
        <section className="section-block" style={{ paddingTop: 0 }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <Link to="/#troupes" className="btn btn-outline">← Back to all troupes</Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
