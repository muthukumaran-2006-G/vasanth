import React from 'react';
import { ArrowDown, Coffee, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { assetUrl } from '../utils/assetUrl';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Welcome to Vasantham Cafe">
      {/* Background Cinematic Image with Editorial Scrim */}
      <div className="hero-media-wrapper">
        <img
          src={assetUrl('/images/cafe-interior-mural.jpg')}
          alt="Vasantham Cafe Signature Interior and Wall Mural"
          className="hero-bg-image"
          fetchPriority="high"
          width="1200"
          height="800"
        />
        <div className="hero-scrim-overlay" />
        <div className="hero-radial-vignette" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-content-inner">
          {/* Eyebrow Brand Badge */}
          <div className="hero-brand-badge">
            <span className="badge-dot" />
            <span className="badge-text">{siteConfig.brand.parentGroup} PRESENTS</span>
            <span className="badge-divider">•</span>
            <span className="badge-highlight">AUTHENTIC TASTE</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            <span className="hero-wordmark">VASANTHAM CAFE</span>
            <span className="hero-tagline-quote">“{siteConfig.brand.tagline}”</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-description">
            {siteConfig.brand.secondaryTagline}
          </p>

          {/* Mural Quote Highlight */}
          <div className="hero-quote-card">
            <Sparkles className="hero-quote-icon" size={18} aria-hidden="true" />
            <p className="hero-quote-text">
              “{siteConfig.brand.wallMuralQuote}”
            </p>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-gold hero-btn-main"
              onClick={() => scrollTo('#menu')}
            >
              <Coffee size={18} aria-hidden="true" />
              <span>Explore Our Menu</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-light hero-btn-sub"
              onClick={() => scrollTo('#story')}
            >
              <span>Discover Our Cafe</span>
            </button>
          </div>

          {/* Quick Pillars Ribbon */}
          <div className="hero-pillars-ribbon">
            <div className="pillar-item">
              <span className="pillar-title">Fresh Brews</span>
              <span className="pillar-desc">Chai & Filter Coffee from ₹15</span>
            </div>
            <div className="pillar-divider" />
            <div className="pillar-item">
              <span className="pillar-title">Comforting Bites</span>
              <span className="pillar-desc">Burgers, Momos & Pizzas</span>
            </div>
            <div className="pillar-divider" />
            <div className="pillar-item">
              <span className="pillar-title">Always Fresh</span>
              <span className="pillar-desc">Made to order with care</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-prompt">
          <button
            type="button"
            className="scroll-indicator-btn"
            onClick={() => scrollTo('#story')}
            aria-label="Scroll down to learn more"
          >
            <span className="scroll-text">Scroll to explore</span>
            <ArrowDown size={16} className="scroll-icon-bounce" />
          </button>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
          padding-bottom: 3rem;
          overflow: hidden;
          background-color: var(--color-espresso-deep);
        }

        .hero-media-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(0.68) saturate(1.1);
          transform: scale(1.02);
          transition: transform 1.2s ease-out;
        }

        .hero-scrim-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(24, 17, 13, 0.72) 0%,
            rgba(24, 17, 13, 0.45) 40%,
            rgba(24, 17, 13, 0.88) 85%,
            rgba(24, 17, 13, 0.98) 100%
          );
        }

        .hero-radial-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 40%,
            transparent 0%,
            rgba(24, 17, 13, 0.6) 100%
          );
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-content-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(36, 25, 20, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(198, 164, 106, 0.4);
          margin-bottom: 1.25rem;
          max-width: 95%;
          flex-wrap: wrap;
          justify-content: center;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-gold);
          box-shadow: 0 0 8px var(--color-gold);
        }

        .badge-text {
          font-size: clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem);
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-cream-light);
        }

        .badge-divider {
          color: var(--color-gold);
        }

        .badge-highlight {
          font-size: clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem);
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--color-gold-light);
        }

        .hero-headline {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .hero-wordmark {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 1.8rem + 3.5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #FFFFFF;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .hero-tagline-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.4rem, 1.2rem + 1.8vw, 2.5rem);
          font-weight: 400;
          color: var(--color-gold-light);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-description {
          font-size: var(--text-lg);
          max-width: 620px;
          color: #E8DED1;
          margin-bottom: 1.75rem;
          line-height: 1.6;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
        }

        .hero-quote-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(36, 25, 20, 0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-left: 3px solid var(--color-gold);
          border-radius: var(--radius-sm);
          margin-bottom: 2rem;
          max-width: 640px;
        }

        .hero-quote-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .hero-quote-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--text-sm);
          color: var(--color-cream-light);
          margin: 0;
          text-align: left;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .hero-btn-main {
          padding: 0.95rem 2.2rem;
          font-size: 0.9rem;
        }

        .hero-btn-sub {
          padding: 0.95rem 2rem;
          font-size: 0.9rem;
        }

        .hero-pillars-ribbon {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
          max-width: 760px;
          background: rgba(24, 17, 13, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(198, 164, 106, 0.25);
          border-radius: var(--radius-md);
          padding: 1.25rem 2rem;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .pillar-title {
          font-family: var(--font-serif);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-gold-light);
        }

        .pillar-desc {
          font-size: var(--text-xs);
          color: #C8BCAC;
        }

        .pillar-divider {
          display: none;
          width: 1px;
          height: 36px;
          background: rgba(198, 164, 106, 0.25);
        }

        .hero-scroll-prompt {
          margin-top: 2rem;
        }

        .scroll-indicator-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-gold-light);
          font-size: var(--text-xs);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .scroll-icon-bounce {
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }

        @media (max-width: 540px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 0.85rem;
            margin-bottom: 2rem;
          }

          .hero-btn-main,
          .hero-btn-sub {
            width: 100%;
          }

          .hero-quote-card {
            margin-bottom: 1.5rem;
          }
        }

        @media (min-width: 640px) {
          .hero-pillars-ribbon {
            grid-template-columns: 1fr auto 1fr auto 1fr;
            align-items: center;
          }
          .pillar-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};
