import React, { useState, useRef, useEffect } from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category, carouselItems = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const liveRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // announce slide changes to screen readers
  useEffect(() => {
    if (liveRef.current && carouselItems.length) {
      const item = carouselItems[currentSlide] || {};
      const caption = item.caption || item.alt || `Slide ${currentSlide + 1}`;
      liveRef.current.textContent = `Slide ${currentSlide + 1} of ${carouselItems.length}: ${caption}`;
    }
  }, [currentSlide, carouselItems]);

  // keyboard support: left/right (desktop) and up/down (mobile)
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        prevSlide();
        break;
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        nextSlide();
        break;
      case "Home":
        e.preventDefault();
        setCurrentSlide(0);
        break;
      case "End":
        e.preventDefault();
        setCurrentSlide(carouselItems.length - 1);
        break;
      default:
        break;
    }
  };

  const handleTouchStart = (e) => {
    const touchStartY = e.touches[0].clientY;
    e.currentTarget.dataset.touchStartY = String(touchStartY);
  };

  const handleTouchEnd = (e) => {
    const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY || "0");
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className="category-card">
      <h1 className="category-title">{category}</h1>

      <section
        className="carousel-section"
        role="region"
        aria-label={`${category} projects carousel`}
      >
        <div
          className="carousel-container"
          ref={containerRef}
          tabIndex={0} // allow keyboard focus
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
            aria-controls={`slide-${currentSlide}`}
          >
            ‹
          </button>

          <div className="carousel-content">
            {carouselItems.map((item, index) => (
              <div
                id={`slide-${index}`}
                key={index}
                className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${carouselItems.length}`}
                aria-hidden={index !== currentSlide}
              >
                <figure>
                  <img
                    src={item.image}
                    alt={item.alt || item.caption || `Slide ${index + 1}`}
                    className="carousel-image"
                  />
                  {item.caption && <figcaption className="carousel-caption">{item.caption}</figcaption>}
                </figure>
                <div className="carousel-text">
                  <p className="carousel-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            aria-label="Next slide"
            aria-controls={`slide-${currentSlide}`}
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators" role="tablist" aria-label="Slide indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
              role="tab"
              aria-controls={`slide-${index}`}
            />
          ))}
        </div>

        {/* Live region for screen reader announcements */}
        <div className="sr-only" aria-live="polite" ref={liveRef} />
      </section>
    </div>
  );
};

export default CategoryCard;
