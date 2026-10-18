import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { assetUrl } from '../utils/assetUrl';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Dishes', 'Coffee & Drinks', 'Brand Art'];

  const filteredItems = galleryItems.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="section gallery-section" aria-label="Photo Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">VISUAL IDENTITY</div>
          <h2 className="section-title">Moments at Vasantham</h2>
          <p className="section-description">
            A visual glimpse into our cafe life—from the hand-drawn murals and comforting dishes to the lively energy of everyday gatherings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-bar">
          <div className="gallery-filter-pills" role="tablist" aria-label="Gallery Filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveItemIndex(null);
                }}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry-Style Responsive Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item-card ${item.aspect || 'square'}`}
              onClick={() => setActiveItemIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItemIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} in full view`}
            >
              <div className="gallery-thumb-wrap">
                <img
                  src={assetUrl(item.image)}
                  alt={item.alt}
                  className="gallery-thumb-img"
                  loading="lazy"
                  width="450"
                  height="350"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-zoom-badge">
                    <Maximize2 size={18} />
                  </div>
                  <div className="gallery-card-info">
                    <span className="gallery-cat-tag">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog Modal */}
      <LightboxModal
        isOpen={activeItemIndex !== null}
        item={activeItem}
        onClose={() => setActiveItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={activeItemIndex ?? 0}
        totalCount={filteredItems.length}
      />

      <style>{`
        .gallery-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        .gallery-filter-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .gallery-filter-pills {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
          overflow-x: auto;
          max-width: 100%;
        }

        .gallery-filter-btn {
          padding: 0.45rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--color-espresso);
          background: transparent;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .gallery-filter-btn:hover {
          color: var(--color-gold-dark);
        }

        .gallery-filter-btn.active {
          background-color: var(--color-espresso);
          color: var(--color-warm-cream);
        }

        /* Editorial Grid Layout */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-subtle);
          cursor: pointer;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .gallery-item-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-editorial);
          border-color: var(--border-gold);
        }

        .gallery-thumb-wrap {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background-color: var(--color-cream-light);
        }

        .gallery-item-card.portrait .gallery-thumb-wrap {
          height: 340px;
        }

        .gallery-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-editorial);
        }

        .gallery-item-card:hover .gallery-thumb-img {
          transform: scale(1.05);
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(24, 17, 13, 0.88) 0%,
            rgba(24, 17, 13, 0.3) 60%,
            transparent 100%
          );
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.25rem;
          transition: opacity var(--transition-normal);
        }

        .gallery-item-card:hover .gallery-hover-overlay,
        .gallery-item-card:focus-visible .gallery-hover-overlay {
          opacity: 1;
        }

        .gallery-zoom-badge {
          align-self: flex-end;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(36, 25, 20, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: var(--color-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(198, 164, 106, 0.4);
        }

        .gallery-card-info {
          display: flex;
          flex-direction: column;
        }

        .gallery-cat-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 0.25rem;
        }

        .gallery-card-title {
          font-family: var(--font-serif);
          font-size: var(--text-base);
          color: var(--color-cream-light);
          margin: 0;
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
