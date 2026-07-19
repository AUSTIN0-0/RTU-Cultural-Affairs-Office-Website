import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const PublicInfo = lazy(() => import('./pages/PublicInfo'));
const Forms = lazy(() => import('./pages/Forms'));
const CitizenCharter = lazy(() => import('./pages/CitizenCharter'));
const Troupes = lazy(() => import('./pages/Troupes'));

function RouteFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--muted)' }}>
      Loading…
    </div>
  );
}

// Smoothly scrolls to the element matching the current URL hash (e.g. #troupes,
// #org, #song, #sop, #legal, #footer, #news, #engagement) any time the route
// or hash changes — including when the target page is still lazy-loading, or
// when the hash link is clicked while already on that page.
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      // Plain route change (no hash) — start at the top of the new page.
      window.scrollTo({ top: 0 });
      return undefined;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;
    let frameId;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 40) {
        // The target section may still be inside a lazy-loading chunk —
        // keep checking for a couple of seconds before giving up.
        attempts += 1;
        frameId = requestAnimationFrame(tryScroll);
      }
    };
    frameId = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(frameId);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/public-information" element={<PublicInfo />} />
          <Route path="/public-information/forms" element={<Forms />} />
          <Route path="/public-information/citizen-charter" element={<CitizenCharter />} />
          <Route path="/troupes/:slug" element={<Troupes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
