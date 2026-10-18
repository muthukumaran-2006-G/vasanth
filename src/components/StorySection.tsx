import React from 'react';
import { Coffee, Heart, Clock, Utensils } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { assetUrl } from '../utils/assetUrl';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="section story-section" aria-label="Our Story and Cafe Philosophy">
      <div className="container">
        <div className="story-grid">
          {/* Left Column: Editorial Image Composition */}
          <div className="story-media-col">
            <div className="story-image-main-wrap">
              <img
                src={assetUrl('/images/cafe-interior-ambiance.jpg')}
                alt="Vasantham Cafe Interior Dining Ambiance and Illustrated Coffee Wall"
                className="story-main-img"
                loading="lazy"
                width="600"
                height="800"
              />
              <div className="story-image-frame" />
            </div>

            {/* Inset Accent Photo */}
            <div className="story-inset-card">
              <img
                src={assetUrl('/images/dishes/mural-latte-art.jpg')}
                alt="Handcrafted Latte Art at Vasantham Cafe"
                className="story-inset-img"
                loading="lazy"
                width="160"
                height="160"
              />
              <div className="story-inset-content">
                <span className="inset-badge">FRESH ROASTS</span>
                <span className="inset-text">Made with Passion</span>
              </div>
            </div>

            {/* Floating Brand Stamp */}
            <div className="story-stamp-badge">
              <span className="stamp-circle-text">BSV GROUPS • AUTHENTIC TASTE •</span>
              <div className="stamp-inner-dot">
                <Coffee size={18} />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Content */}
          <div className="story-content-col">
            <div className="section-eyebrow">OUR PHILOSOPHY</div>
            <h2 className="story-heading">
              A Warm Corner for <br />
              <span className="story-highlight">Comfort & Connection.</span>
            </h2>

            <p className="story-lead">
              At Vasantham Cafe, we believe a great cafe is more than just a place to grab a drink—it is a sanctuary where the clock slows down and genuine hospitality takes center stage.
            </p>

            <blockquote className="story-quote">
              <p>“{siteConfig.brand.wallMuralQuote}”</p>
              <cite>— Written on our cafe wall</cite>
            </blockquote>

            <p className="story-body">
              Whether you are stopping by for a comforting morning cup of cardamom chai, sharing hot steamed momos with close friends after work, or treating yourself to our freshly made gourmet burgers and stone-baked pizzas, every plate is prepared fresh to order.
            </p>

            {/* Value Highlights */}
            <div className="story-values-grid">
              <div className="value-card">
                <div className="value-icon-box">
                  <Utensils size={20} />
                </div>
                <div>
                  <h4 className="value-title">Freshly Made</h4>
                  <p className="value-desc">No shortcuts. Prepared piping hot upon every order.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon-box">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="value-title">Comforting Flavours</h4>
                  <p className="value-desc">Timeless recipes crafted to bring warmth and familiar joy.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="value-title">A Space to Unwind</h4>
                  <p className="value-desc">Thoughtfully designed seating, playful art murals, and good music.</p>
                </div>
              </div>
            </div>

            <div className="story-cta-wrap">
              <a href="#menu" className="btn btn-primary">
                <span>View Our Offerings</span>
              </a>
              <a href="#gallery" className="btn btn-secondary">
                <span>See Our Spaces</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          background-color: var(--color-warm-cream);
          position: relative;
          overflow: hidden;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Media Column */
        .story-media-col {
          position: relative;
          max-width: 520px;
          margin: 0 auto;
          width: 100%;
        }

        .story-image-main-wrap {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-editorial);
        }

        .story-main-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .story-image-main-wrap:hover .story-main-img {
          transform: scale(1.03);
        }

        .story-image-frame {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(198, 164, 106, 0.4);
          pointer-events: none;
          border-radius: var(--radius-md);
        }

        .story-inset-card {
          position: absolute;
          bottom: -1.75rem;
          left: -1.5rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: #FFFFFF;
          padding: 0.75rem 1.25rem 0.75rem 0.75rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-editorial);
          border: 1px solid var(--border-gold);
          z-index: 2;
        }

        .story-inset-img {
          width: 58px;
          height: 58px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }

        .story-inset-content {
          display: flex;
          flex-direction: column;
        }

        .inset-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--color-gold-dark);
          text-transform: uppercase;
        }

        .inset-text {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-espresso);
        }

        .story-stamp-badge {
          position: absolute;
          top: -1.5rem;
          right: -1.25rem;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--color-espresso);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-editorial);
          border: 1px solid var(--color-gold);
          z-index: 2;
        }

        .stamp-inner-dot {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stamp-circle-text {
          position: absolute;
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.85;
          display: none;
        }

        /* Content Column */
        .story-content-col {
          display: flex;
          flex-direction: column;
        }

        .story-heading {
          margin-bottom: 1.5rem;
        }

        .story-highlight {
          color: var(--color-gold-dark);
          font-style: italic;
          font-family: var(--font-display);
        }

        .story-lead {
          font-size: var(--text-lg);
          color: var(--color-espresso);
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .story-quote {
          background-color: var(--color-cream-light);
          border-left: 3px solid var(--color-gold);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .story-quote p {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--text-base);
          color: var(--color-espresso);
          margin-bottom: 0.5rem;
        }

        .story-quote cite {
          font-size: var(--text-xs);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold-dark);
          font-weight: 600;
        }

        .story-body {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .story-values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
        }

        .value-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .value-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--color-cream-light);
          border: 1px solid var(--border-gold);
          color: var(--color-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-title {
          font-size: var(--text-base);
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        .value-desc {
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin: 0;
          line-height: 1.4;
        }

        .story-cta-wrap {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .story-inset-card {
            left: 0.75rem;
            bottom: 0.75rem;
            padding: 0.5rem 0.85rem;
          }

          .story-stamp-badge {
            top: 0.75rem;
            right: 0.75rem;
            width: 68px;
            height: 68px;
          }

          .story-main-img {
            height: 380px;
          }
        }

        @media (min-width: 992px) {
          .story-grid {
            grid-template-columns: 1.05fr 1fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
};
