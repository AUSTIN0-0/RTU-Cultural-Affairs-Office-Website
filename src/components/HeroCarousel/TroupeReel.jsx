import { useState } from 'react';

// Manual-only reel (no autoplay) so a visitor who starts watching a video
// embed never gets yanked to the next slide mid-viewing.
export default function TroupeReel({ slides }) {
  const [index, setIndex] = useState(0);
  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <section className="troupe-reel-section">
      <div className="wrap">
        <div className="troupe-reel">
          <button className="troupe-reel-nav prev" type="button" aria-label="Previous" onClick={() => goTo(index - 1)}>&#10094;</button>

          <div className="troupe-reel-viewport">
            <div className="troupe-reel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((slide, i) => (
                <div className="troupe-reel-slide" key={i}>
                  {slide.type === 'image' && <img src={slide.src} alt="" loading="lazy" />}
                  {slide.type === 'youtube' && (
                    <iframe src={slide.src} title={`Video ${i + 1}`} allowFullScreen loading="lazy" />
                  )}
                  {slide.type === 'facebook' && (
                    <iframe
                      src={slide.src}
                      title={`Video ${i + 1}`}
                      scrolling="no"
                      allowFullScreen
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button className="troupe-reel-nav next" type="button" aria-label="Next" onClick={() => goTo(index + 1)}>&#10095;</button>

          <div className="troupe-reel-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot${i === index ? ' active' : ''}`}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                onKeyDown={(e) => { if (e.key === 'Enter') goTo(i); }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
