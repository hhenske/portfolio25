import React, { useState } from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category, carouselItems, collageImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleTouchStart = (e) => {
    const touchStartY = e.touches[0].clientY;
    e.currentTarget.dataset.touchStartY = touchStartY;
  };

  const handleTouchEnd = (e) => {
    const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY);
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

      <section className="carousel-section">
        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="carousel-content">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${carouselItems.length}`}
              >
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="carousel-image"
                />
                <div className="carousel-text">
                  <h3 className="carousel-caption">{item.caption}</h3>
                  <p className="carousel-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="collage-section">
        <div className="collage-grid">
          {collageImages.map((img, index) => (
            <div 
              key={index} 
              className={`collage-item collage-item-${index + 1}`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryCard;
