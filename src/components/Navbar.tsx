import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { assetUrl } from '../utils/assetUrl';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        role="banner"
      >
      <div className="container navbar-container">
        {/* Brand Logo & Wordmark */}
        <a
          href="#hero"
          className="brand-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          aria-label="Vasantham Cafe Homepage"
        >
          <div className="brand-emblem-wrap">
            <img
              src={assetUrl('/images/vasantham-logo.jpg')}
              alt="Vasantham Cafe Crest"
              className="brand-logo-img"
              width="44"
              height="44"
            />
          </div>
          <div className="brand-text">
            <span className="brand-group-name">{siteConfig.brand.parentGroup}</span>
            <span className="brand-title">VASANTHAM</span>
            <span className="brand-subtitle">CAFE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Header Actions */}
        <div className="nav-actions">
          <a
            href="#menu"
            className="btn btn-gold nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#menu');
            }}
          >
            <span>Explore Menu</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Overlay */}
    <div
      className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
      onClick={() => setMobileMenuOpen(false)}
      aria-hidden="true"
    />

    {/* Mobile Drawer Panel */}
    <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div className="mobile-drawer-header">
        <div className="brand-text">
          <span className="brand-group-name">{siteConfig.brand.parentGroup}</span>
          <span className="brand-title" style={{ color: 'var(--color-cream-light)' }}>VASANTHAM CAFE</span>
        </div>
        <button
          type="button"
          className="drawer-close-btn"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mobile-nav" aria-label="Mobile Menu">
        <ul className="mobile-links-list">
          {siteConfig.navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-drawer-footer">
        <p className="mobile-tagline">“{siteConfig.brand.tagline}”</p>
        <a
          href="#visit"
          className="btn btn-gold"
          style={{ width: '100%' }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#visit');
          }}
        >
          <Coffee size={16} />
          <span>Visit Our Cafe</span>
        </a>
      </div>
    </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color var(--transition-normal), backdrop-filter var(--transition-normal), box-shadow var(--transition-normal), padding var(--transition-normal);
        }

        .navbar-transparent {
          background-color: rgba(36, 25, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding-top: 1.1rem;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(247, 241, 232, 0.12);
        }

        .navbar-scrolled {
          background-color: rgba(36, 25, 20, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          border-bottom: 1px solid rgba(198, 164, 106, 0.25);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 0.75rem;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          min-width: 0;
        }

        .brand-emblem-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid var(--color-gold);
          box-shadow: 0 0 12px rgba(198, 164, 106, 0.3);
          flex-shrink: 0;
          background: #000;
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          min-width: 0;
        }

        .brand-group-name {
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 700;
          margin-bottom: 2px;
          white-space: nowrap;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-size: clamp(1rem, 0.95rem + 0.5vw, 1.3rem);
          font-weight: 700;
          letter-spacing: 0.03em;
          color: var(--color-cream-light);
          white-space: nowrap;
        }

        .brand-subtitle {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          color: var(--color-gold-light);
          white-space: nowrap;
        }

        .desktop-nav {
          display: none;
        }

        .nav-links-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          font-size: var(--text-sm);
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--color-cream-light);
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-gold);
          transition: width var(--transition-normal);
        }

        .nav-link:hover {
          color: var(--color-gold-light);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          display: none;
          padding: 0.6rem 1.25rem;
          font-size: 0.8rem;
        }

        .mobile-toggle {
          color: var(--color-cream-light);
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile Drawer */
        .mobile-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-normal);
          z-index: 101;
        }

        .mobile-drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85%;
          max-width: 340px;
          background: var(--color-espresso-deep);
          border-left: 1px solid var(--border-gold);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          visibility: hidden;
          transition: transform var(--transition-normal), visibility var(--transition-normal);
          z-index: 102;
          overflow-y: auto;
        }

        .mobile-drawer.open {
          transform: translateX(0);
          visibility: visible;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(247, 241, 232, 0.1);
          margin-bottom: 1.5rem;
        }

        .drawer-close-btn {
          color: var(--color-cream-light);
          padding: 0.4rem;
        }

        .mobile-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-cream-light);
          display: block;
          padding: 0.25rem 0;
        }

        .mobile-nav-link:hover {
          color: var(--color-gold);
        }

        .mobile-drawer-footer {
          margin-top: auto;
          padding-top: 2rem;
        }

        .mobile-tagline {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-gold-light);
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: block;
          }
          .nav-cta {
            display: inline-flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
