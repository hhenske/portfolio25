import React, { useState, useRef, useEffect } from 'react';
import './CategoryDetail.css';

/**
 * CategoryDetail
 * Props:
 * - title: string
 * - carouselItems: [{ src, caption, text }]
 * - collageItems: [src, ...] (5 items expected)
 */
const CategoryDetail = ({ title, carouselItems = [], collageItems = [] }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // reset index when title or items change
    setIndex(0);
  }, [title]);

  const prev = () => setIndex((i) => (i - 1 + carouselItems.length) % carouselItems.length);
  const next = () => setIndex((i) => (i + 1) % carouselItems.length);

  // simple touch handling for mobile swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startY = 0;
    let startX = 0;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const dx = (e.changedTouches[0].clientX || 0) - startX;
      const dy = (e.changedTouches[0].clientY || 0) - startY;
      if (Math.abs(dx) > Math.abs(dy)) {
        // horizontal swipe
        if (dx < -30) next();
        else if (dx > 30) prev();
      } else {
        // vertical swipe
        if (dy < -30) next();
        else if (dy > 30) prev();
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [containerRef, carouselItems.length]);

  return (
    <section className="category-detail">
      <header className="category-detail-header">
        <h2>{title}</h2>
      </header>

      <div className="carousel-wrap" ref={containerRef}>
        <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>

        <div className="carousel">
          {carouselItems.map((it, i) => (
            <figure
              key={i}
              className={`carousel-item ${i === index ? 'active' : ''}`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <img src={it.src} alt={it.caption || `${title} sample ${i+1}`} />
              <figcaption className="carousel-caption">
                <strong>{it.caption}</strong>
                <p>{it.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>
      </div>

      <div className="carousel-controls">
        {carouselItems.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="collage">
        {collageItems.slice(0,5).map((src, i) => (
          <div key={i} className={`collage-item item-${i+1}`}>
            <img src={src} alt={`Collage ${i+1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryDetail;
