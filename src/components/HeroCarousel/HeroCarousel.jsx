import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * HeroCarousel — fades between GIF backgrounds.
 *
 * Desktop: unchanged — the headline/subtitle/CTAs overlay the image,
 * bottom-left, only visible on slide 1.
 *
 * Mobile (<=768px): a dedicated layout, not just a shrunk desktop one — the
 * image is a compact, aspect-ratio-bound card (so it fills completely with
 * no dead space, instead of being stretched to nearly the full viewport
 * height), and the headline/subtitle/CTAs sit in their own block directly
 * below it, always visible, instead of overlaid and appearing/disappearing
 * per slide. See style.css's mobile hero block for the layout half of this.
 *
 * Props:
 *  - slides: [{ src, alt }]
 *  - eyebrow, title (JSX ok, e.g. with <em>), subtitle, ctas: [{ label, to/href, variant }]
 */
export default function HeroCarousel({ slides, eyebrow, title, subtitle, ctas = [] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goTo = useCallback((i) => setIndex((i + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const play = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
  }, [slides.length]);

  useEffect(() => {
    play();
    return () => clearInterval(timerRef.current);
  }, [play]);

  // Swipe left/right to change slides on touch devices — the Next button is
  // hidden on small screens to save space, so this is the primary way to
  // move forward manually there (Previous and the dots stay visible).
  const SWIPE_THRESHOLD = 40;

  const handleTouchStart = (e) => {
    clearInterval(timerRef.current);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) {
      play();
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    play();
  };

  return (
    <section className="hero" aria-label="Featured stories">
      <div
        id="carousel"
        className="carousel"
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={play}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-track">
          {slides.map((slide, i) => (
            <div key={slide.src} className={`carousel-slide${i === 0 ? ' has-copy' : ''}${i === index ? ' active' : ''}`}>
              <img
                src={slide.src}
                alt={i === 0 ? slide.alt || '' : ''}
                aria-hidden={i !== 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            </div>
          ))}
        </div>

        <button className="carousel-nav prev" type="button" aria-label="Previous slide" onClick={prev}>&#10094;</button>
        <button className="carousel-nav next" type="button" aria-label="Next slide" onClick={next}>&#10095;</button>

        <div className="indicators" role="tablist" aria-label="Slide selector">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              className={`indicator${i === index ? ' active' : ''}`}
              role="tab"
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Sibling of .carousel, not nested inside it — on desktop this is
          absolutely positioned back over the image (overlay, slide-1-only,
          unchanged from before); on mobile it becomes a normal static block
          that flows below the image instead, so it's never clipped by the
          image card's short aspect-ratio height and never contributes to
          dead space inside it. */}
      <div className={`hero-copy${index === 0 ? ' active' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-dek">{subtitle}</p>}
        {ctas.length > 0 && (
          <div className="hero-actions">
            {ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={`btn ${cta.variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`} tabIndex={index === 0 ? 0 : -1}>
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Curtain-hem divider — signature device carried over from the site's theater roots */}
      <svg className="curtain-hem" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C 50,40 100,0 150,40 C 200,0 250,40 300,0 C 350,40 400,0 450,40 C 500,0 550,40 600,0 C 650,40 700,0 750,40 C 800,0 850,40 900,0 C 950,40 1000,0 1050,40 C 1100,0 1150,40 1200,0 L1200,40 L0,40 Z" />
      </svg>
    </section>
  );
}
