import React, { useState, useMemo } from 'react';
import {
  Coffee,
  Search,
  Check,
  Flame,
  FileText
} from 'lucide-react';
import { menuCategories, type MenuCategory } from '../data/menuData';
import { assetUrl } from '../utils/assetUrl';

interface MenuSectionProps {
  onOpenMenuLightbox: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenMenuLightbox }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  // Filter items based on active category, search query, and veg-only toggle
  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((cat) => {
        // If a specific category is chosen, filter out others
        if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) {
          return null;
        }

        const items = cat.items.filter((item) => {
          const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
          const matchesVeg = vegOnly ? item.isVeg : true;
          return matchesSearch && matchesVeg;
        });

        if (items.length === 0) return null;

        return {
          ...cat,
          items,
        };
      })
      .filter(Boolean) as MenuCategory[];
  }, [selectedCategoryId, searchQuery, vegOnly]);

  const totalResultsCount = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="menu" className="section menu-section" aria-label="Signature Menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">FRESH BREWS & GREAT BITES</div>
          <h2 className="section-title">Vasantham Cafe Menu</h2>
          <p className="section-description">
            The menu includes South Indian filter coffee and tea, cold beverages, bread omelettes, sandwiches, snacks, momos, burgers, rolls, juices, milkshakes and ice cream. Use the category filters or search to browse.
          </p>
        </div>

        {/* Action Bar: Search, Veg Toggle, and View Original Menu Board */}
        <div className="menu-action-bar">
          {/* Search Box */}
          <div className="menu-search-box">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Chai, Burger, Momos, Pizza)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="menu-filter-controls">
            {/* Veg Only Toggle */}
            <button
              type="button"
              className={`veg-toggle-btn ${vegOnly ? 'active' : ''}`}
              onClick={() => setVegOnly(!vegOnly)}
              aria-pressed={vegOnly}
            >
              <span className="veg-indicator-dot" />
              <span>Veg Only</span>
              {vegOnly && <Check size={14} />}
            </button>

            {/* View Full Menu Button */}
            <button
              type="button"
              className="btn btn-secondary view-board-btn"
              onClick={onOpenMenuLightbox}
            >
              <FileText size={16} />
              <span>Original Menu Board</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="category-scroll-container" role="tablist" aria-label="Menu Categories">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategoryId === 'all'}
            className={`cat-pill ${selectedCategoryId === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategoryId('all')}
          >
            <span>All Offerings</span>
          </button>

          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategoryId === cat.id}
              className={`cat-pill ${selectedCategoryId === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategoryId(cat.id)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Results summary if searching */}
        {(searchQuery || vegOnly) && (
          <div className="search-status-bar">
            <span>
              Found <strong>{totalResultsCount}</strong> item{totalResultsCount === 1 ? '' : 's'}
              {searchQuery && ` matching "${searchQuery}"`}
              {vegOnly && ` (Vegetarian only)`}
            </span>
            <button
              type="button"
              className="reset-filters-link"
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setSelectedCategoryId('all');
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Menu Categories List */}
        {filteredCategories.length > 0 ? (
          <div className="categories-stack">
            {filteredCategories.map((category) => (
              <article key={category.id} className="category-block" id={`cat-${category.id}`}>
                {/* Category Header with Authentic Cropped Photograph */}
                <div className="category-header">
                  <div className="category-photo-wrap">
                    <img
                      src={assetUrl(category.image)}
                      alt={`${category.name} at Vasantham Cafe`}
                      className="category-hero-thumb"
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                  </div>
                  <div className="category-info">
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-subtitle">{category.subtitle}</p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="items-grid">
                  {category.items.map((item) => (
                    <div key={item.id} className="menu-card">
                      <div className="menu-card-top">
                        <div className="item-title-group">
                          {/* Pure Veg or Non-Veg symbol */}
                          <span
                            className={`food-type-icon ${item.isVeg ? 'type-veg' : 'type-nonveg'}`}
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            aria-label={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span className="dot" />
                          </span>
                          <h4 className="item-name">{item.name}</h4>
                          {item.popular && (
                            <span className="popular-badge" title="Popular Favorite">
                              <Flame size={12} />
                              <span>Favorite</span>
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div className="item-price">
                          {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                        </div>
                      </div>

                      {/* Description or quantity */}
                      {(item.description || item.pieces) && (
                        <div className="item-meta">
                          {item.pieces && <span className="item-pieces-badge">{item.pieces}</span>}
                          {item.description && <p className="item-description">{item.description}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-menu-state">
            <Coffee size={40} className="empty-icon" />
            <h3>No dishes found</h3>
            <p>We couldn't find any items matching your criteria. Try another search term or reset filters.</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setSelectedCategoryId('all');
              }}
            >
              Show All Menu Items
            </button>
          </div>
        )}

        {/* Footer Menu Note */}
        <div className="menu-footer-callout">
          <p className="menu-callout-text">
            “Freshly Made • Always Tasty” &mdash; Parcel orders: Extra ₹5. Prices are inclusive of all local taxes.
          </p>
        </div>
      </div>

      <style>{`
        .menu-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        /* Action Bar */
        .menu-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .menu-search-box {
          position: relative;
          flex: 1;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gold-dark);
          pointer-events: none;
        }

        .menu-search-input {
          width: 100%;
          padding: 0.85rem 2.5rem 0.85rem 2.85rem;
          font-family: inherit;
          font-size: var(--text-sm);
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--color-espresso);
          outline: none;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .menu-search-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(198, 164, 106, 0.2);
        }

        .clear-search-btn {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          padding: 0.25rem;
        }

        .menu-filter-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .veg-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-sm);
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-espresso);
          transition: all var(--transition-normal);
        }

        .veg-toggle-btn.active {
          background-color: #EBF3E8;
          border-color: #2F6423;
          color: #2F6423;
        }

        .veg-indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #2F6423;
        }

        .view-board-btn {
          padding: 0.75rem 1.25rem;
          font-size: var(--text-sm);
        }

        /* Category Scroll Pills */
        .category-scroll-container {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-bottom: 2.5rem;
          scrollbar-width: thin;
        }

        .cat-pill {
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          color: var(--color-espresso);
          transition: all var(--transition-fast);
        }

        .cat-pill:hover {
          border-color: var(--color-gold);
          color: var(--color-gold-dark);
        }

        .cat-pill.active {
          background-color: var(--color-espresso);
          border-color: var(--color-espresso);
          color: var(--color-warm-cream);
          box-shadow: 0 4px 12px rgba(36, 25, 20, 0.15);
        }

        .search-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          font-size: var(--text-sm);
          margin-bottom: 2rem;
          border: 1px solid var(--border-subtle);
        }

        .reset-filters-link {
          color: var(--color-gold-dark);
          font-weight: 600;
          text-decoration: underline;
        }

        /* Categories Stack */
        .categories-stack {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .category-block {
          background-color: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-subtle);
          padding: 2rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.75rem;
        }

        .category-photo-wrap {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid var(--border-gold);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          background-color: var(--color-cream-light);
        }

        .category-hero-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-name {
          font-size: var(--text-2xl);
          margin-bottom: 0.25rem;
        }

        .category-subtitle {
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin: 0;
        }

        /* Items Grid */
        .items-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .menu-card {
          padding: 1.15rem 1.25rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-cream-light);
          border: 1px solid rgba(36, 25, 20, 0.07);
          transition: all var(--transition-normal);
        }

        .menu-card:hover {
          background-color: #FFFFFF;
          border-color: var(--border-gold);
          box-shadow: 0 6px 18px rgba(36, 25, 20, 0.06);
          transform: translateY(-2px);
        }

        .menu-card-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
        }

        .item-title-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        /* Veg / Non-Veg Indicator Icon */
        .food-type-icon {
          width: 14px;
          height: 14px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .food-type-icon.type-veg {
          border: 1.5px solid #2F6423;
        }

        .food-type-icon.type-veg .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #2F6423;
        }

        .food-type-icon.type-nonveg {
          border: 1.5px solid #A32824;
        }

        .food-type-icon.type-nonveg .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #A32824;
        }

        .item-name {
          font-family: var(--font-sans);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-espresso);
          margin: 0;
        }

        .popular-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          background-color: #FFF2E8;
          color: #D45B13;
          border: 1px solid #FAD1B8;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
        }

        .item-price {
          font-family: var(--font-serif);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-espresso);
          white-space: nowrap;
        }

        .item-meta {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .item-pieces-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-gold-dark);
          background: rgba(198, 164, 106, 0.15);
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .item-description {
          font-size: var(--text-sm);
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
        }

        /* Empty state */
        .empty-menu-state {
          text-align: center;
          padding: 4rem 1.5rem;
          background-color: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .empty-icon {
          color: var(--color-gold);
          margin-bottom: 1rem;
        }

        .empty-menu-state h3 {
          margin-bottom: 0.5rem;
        }

        .empty-menu-state p {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
        }

        /* Callout */
        .menu-footer-callout {
          margin-top: 3rem;
          text-align: center;
          padding: 1.25rem;
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-gold);
        }

        .menu-callout-text {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-espresso);
          font-size: var(--text-sm);
          margin: 0;
        }

        @media (min-width: 768px) {
          .items-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
