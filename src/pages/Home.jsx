import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import TroupeCard from '../components/Cards/TroupeCard';
import StoryCard from '../components/Cards/StoryCard';
import MasonryGallery from '../components/Gallery/MasonryGallery';
import SectionHeading from '../components/Common/SectionHeading';
import { ProgressBar, ScrollTop } from '../components/Common/ScrollTop';
import { useLocalStorage } from '../components/Common/useLocalStorage';
import { useToast } from '../components/Common/ToastContext';
import troupes from '../data/troupesData';
import achievements from '../data/achievementsData';
import stories, { announcementStrip } from '../data/newsData';

const heroSlides = [
  { src: '/media/2026_NEW_WEBSITE_RIZAL-TECHNOLOGICAL-UNIVERSITY-1.gif', alt: 'Rizal Technological University cultural feature' },
  { src: '/media/2026_NEW_WEBSITE_RIZAL-TECHNOLOGICAL-UNIVERSITY-4.gif', alt: '' },
  { src: '/media/NEW_WEBSITE_RIZAL-TECHNOLOGICAL-UNIVERSITY-6.gif', alt: '' },
  { src: '/media/NEW_WEBSITE_RIZAL-TECHNOLOGICAL-UNIVERSITY-7.gif', alt: '' },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'theater', label: 'Theater' },
  { key: 'music', label: 'Music' },
  { key: 'dance', label: 'Dance' },
  { key: 'visual', label: 'Visual Arts' },
  { key: 'literary', label: 'Literary Arts' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [bookmarks, setBookmarks] = useLocalStorage('cau-bookmarks', {});
  const showToast = useToast();

  const toggleBookmark = (slug) => {
    setBookmarks((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      showToast(next[slug] ? 'Saved to your bookmarks' : 'Removed from bookmarks');
      return next;
    });
  };

  const visibleTroupes = useMemo(() => {
    return troupes.filter((t) => activeFilter === 'all' || t.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <ProgressBar />
      <Navbar />

      <main id="main">
        <HeroCarousel
          slides={heroSlides}
          eyebrow="Rizaliano Ako, Rizaliano Tayo"
          title={<>Where Rizalianos <em>perform</em> the culture they preserve.</>}
          subtitle="Eight troupes. One Office. From the barrio stage of Teatro Rizalia in 1986 to the international and national spotlight in Iloilo — this is the Cultural Affairs Office."
          ctas={[
            { label: 'Read the latest', href: '#news' },
            { label: 'Meet the Teatro Rizalia', href: '#troupes', variant: 'ghost' },
          ]}
        />

        {/* Editor's note */}
        <section className="editor-note" aria-labelledby="editor-note-title">
          <div className="wrap editor-grid">
            <figure className="editor-portrait">
              <img src="/media/CAU HEAD.png" alt="Asst. Prof. Evelyn C. Dagami, Head of the Cultural Affairs Unit" />
              <figcaption>
                <span className="portrait-name">Asst. Prof. Evelyn C. Dagami</span>
                <span className="portrait-role">Director of Cultural Affairs Office</span>
              </figcaption>
            </figure>
            <div className="editor-copy">
              <p className="eyebrow" id="editor-note-title">A note from the Office Director</p>
              <blockquote>
                "We live in a world that moves at a breakneck pace, but your art makes us stop, look, and feel.
                Your influence knows no bounds, regardless of the size of the stage or the number of spectators."
              </blockquote>
              <p className="editor-sub">
                To every Rizaliano who carries our music, dance, theater, and visual art forward — thank you for
                revitalizing tradition and motivating change through your craft.
              </p>
            </div>
          </div>
        </section>

        {/* History / masthead feature */}
        <section className="masthead-feature" aria-labelledby="history-title">
          <div className="wrap feature-grid">
            <article className="feature-col">
              <p className="eyebrow">Since 1986</p>
              <h2 id="history-title">History</h2>
              <p>
                In 1986, Teatro Rizalia was founded and formally recognized as an official cultural organization of
                Rizal Technological University — then Rizal Technological Colleges — under the Department of
                Cultural Affairs. Its mission: foster and maintain Filipino cultural heritage through theatrical
                presentation.
              </p>
              <p>
                The troupe trained out of the Pasig Campus, drawing Boni-based members across the city for
                rehearsal. Teatro Rizalia quickly became a beloved institution, its membership swelling into the
                hundreds and its performances multiplying in turn.
              </p>
            </article>
            <aside className="feature-col feature-facts">
              <div className="fact-card">
                <p className="eyebrow">What CAO is</p>
                <p>
                  CAO cultivates innovative, multi-talented artists who preserve and foster national culture and
                  multicultural heritage across Rizal Technological University.
                </p>
              </div>
              <div className="fact-card">
                <p className="eyebrow">The goal</p>
                <p>
                  Internationalization of CAO's visual and performing arts — sustained to meet ASEAN demands,
                  regional integration, and international standards.
                </p>
              </div>
              <div className="fact-card">
                <p className="eyebrow">The objective</p>
                <p>
                  Foster cultural awareness and sensitivity, inculcate values, and keep inclusive education
                  flexible through strong national and international partnerships.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Achievements */}
        <section id="engagement" className="section-block achievements" aria-labelledby="achievements-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Trending this season"
              title="Achievements Gallery"
              subtitle="Twelve wins from the PASUC Regional and National Culture and Arts Festivals, 2026."
              id="achievements-title"
            />
            <MasonryGallery items={achievements} />
          </div>
        </section>

        {/* Troupes */}
        <section id="troupes" className="section-block troupes" aria-labelledby="troupes-title">
          <div className="wrap">
            <SectionHeading
              light
              eyebrow="Editor's picks"
              title="Our Troupes"
              subtitle="Excellence in every performance art — eight ensembles, one cultural unit."
              id="troupes-title"
            />

            <div className="filter-chips" role="group" aria-label="Filter troupes by category">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`chip${activeFilter === f.key ? ' active' : ''}`}
                  type="button"
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="troupes-grid">
              {visibleTroupes.map((t) => (
                <TroupeCard
                  key={t.slug}
                  troupe={t}
                  bookmarked={!!bookmarks[t.slug]}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          </div>
        </section>

        {/* News / stories */}
        <section id="news" className="section-block news" aria-labelledby="news-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Calendar of activities"
              title="Latest Stories"
              subtitle="Rizal Technological University Calendar"
              id="news-title"
            />

            <div className="news-strip">
              {announcementStrip.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>

            <div className="story-list">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
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
