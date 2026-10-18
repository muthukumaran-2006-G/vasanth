import React from 'react';
import { Coffee, Package, Users, Sparkles, Smile } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section experience-section" aria-label="The Vasantham Experience">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-eyebrow">THE CAFE ATMOSPHERE</div>
          <h2 className="section-title">Designed for Joyful Moments</h2>
          <p className="section-description">
            From the hand-illustrated chalkboard doodle murals to comfortable dining tables and freshly prepared bites, Vasantham Cafe is built around the feeling of warmth and togetherness.
          </p>
        </div>

        {/* 3-Column Visual Narrative Grid */}
        <div className="experience-cards-grid">
          {/* Card 1: The Handcrafted Brews & Bites */}
          <div className="exp-card">
            <div className="exp-image-wrap">
              <img
                src="/images/dishes/cafe-hall-counter.jpg"
                alt="Vasantham Cafe Counter and Dining Environment"
                className="exp-card-img"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="exp-tag">FRESH & AUTHENTIC</div>
            </div>
            <div className="exp-body">
              <div className="exp-icon-pill">
                <Coffee size={18} />
                <span>Brewed to Order</span>
              </div>
              <h3 className="exp-title">Fresh Brews, Great Bites</h3>
              <p className="exp-text">
                Every cup of South Indian filter coffee, aromatic cardamom tea, or refreshing chilled frappe is prepared fresh. Pair it with golden fries, grilled sandwiches, or hot momos.
              </p>
            </div>
          </div>

          {/* Card 2: The Illustrative Wall Art & Spirit */}
          <div className="exp-card featured-exp-card">
            <div className="exp-image-wrap">
              <img
                src="/images/dishes/cafe-doodle-wall.jpg"
                alt="Vasantham Cafe Doodle Art Wall with Coffee Sayings"
                className="exp-card-img"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="exp-tag gold-tag">VIBRANT AMBIANCE</div>
            </div>
            <div className="exp-body">
              <div className="exp-icon-pill gold-pill">
                <Sparkles size={18} />
                <span>Illustrated Murals</span>
              </div>
              <h3 className="exp-title">“Good Days Start with Coffee”</h3>
              <p className="exp-text">
                Our walls celebrate the culture of taking a break, catching up with friends, and sharing comforting food that recharges your mind and spirit.
              </p>
            </div>
          </div>

          {/* Card 3: Welcoming Dining & Takeaway Convenience */}
          <div className="exp-card">
            <div className="exp-image-wrap">
              <img
                src="/images/dishes/cafe-seating-dining.jpg"
                alt="Vasantham Cafe Round Dining Tables and Modern Chairs"
                className="exp-card-img"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="exp-tag">DINE-IN & PARCEL</div>
            </div>
            <div className="exp-body">
              <div className="exp-icon-pill">
                <Users size={18} />
                <span>Warm Gathering Space</span>
              </div>
              <h3 className="exp-title">A Welcoming Seat for Everyone</h3>
              <p className="exp-text">
                Whether you dine in at our comfortable tables or order takeaways for your office and home, we ensure every dish is packed with flavour and care.
              </p>
            </div>
          </div>
        </div>

        {/* Cafe Quotes Marquee / Banner */}
        <div className="experience-quote-strip">
          <div className="quote-strip-inner">
            {siteConfig.brand.atmosphereQuotes.map((quote, idx) => (
              <div key={idx} className="strip-quote-item">
                <Smile size={16} className="strip-quote-icon" />
                <span className="strip-quote-text">{quote}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parcel Note Card */}
        <div className="parcel-banner">
          <div className="parcel-icon-box">
            <Package size={24} />
          </div>
          <div className="parcel-info">
            <span className="parcel-heading">Takeaway & Parcel Orders</span>
            <p className="parcel-subtext">
              Heading home or back to work? Enjoy our complete menu packaged hot and securely.
              <strong> {siteConfig.contact.parcelNote}</strong>.
            </p>
          </div>
          <a href="#menu" className="btn btn-primary parcel-btn">
            <span>Browse Full Menu</span>
          </a>
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--color-cream-light);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .experience-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .exp-card {
          background-color: #FFFFFF;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-subtle);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-editorial);
          border-color: var(--border-gold);
        }

        .featured-exp-card {
          border-color: rgba(198, 164, 106, 0.4);
        }

        .exp-image-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .exp-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .exp-card:hover .exp-card-img {
          transform: scale(1.05);
        }

        .exp-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(36, 25, 20, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: var(--color-cream-light);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .exp-tag.gold-tag {
          background: rgba(198, 164, 106, 0.9);
          color: var(--color-espresso-deep);
          border-color: var(--color-gold);
        }

        .exp-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .exp-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-sage-dark);
          margin-bottom: 0.75rem;
        }

        .exp-icon-pill.gold-pill {
          color: var(--color-gold-dark);
        }

        .exp-title {
          font-size: var(--text-xl);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .exp-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* Quotes strip */
        .experience-quote-strip {
          background-color: var(--color-espresso);
          color: var(--color-warm-cream);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2.5rem;
          overflow-x: auto;
          white-space: nowrap;
          border: 1px solid var(--border-gold);
        }

        .quote-strip-inner {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .strip-quote-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .strip-quote-icon {
          color: var(--color-gold);
        }

        .strip-quote-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--text-sm);
          color: var(--color-cream-light);
        }

        /* Parcel Banner */
        .parcel-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: #FFFFFF;
          border: 1px dashed var(--color-gold);
          border-radius: var(--radius-md);
          padding: 1.25rem 2rem;
          flex-wrap: wrap;
        }

        .parcel-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(198, 164, 106, 0.15);
          color: var(--color-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .parcel-info {
          flex: 1;
          min-width: 260px;
        }

        .parcel-heading {
          display: block;
          font-family: var(--font-serif);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-espresso);
          margin-bottom: 0.2rem;
        }

        .parcel-subtext {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          margin: 0;
        }

        .parcel-subtext strong {
          color: var(--color-espresso);
        }

        .parcel-btn {
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .experience-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
