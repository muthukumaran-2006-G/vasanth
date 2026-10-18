import { ArrowUp, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" role="contentinfo" aria-label="Site Footer">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Slogan */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-wrap">
                <img
                  src="/images/vasantham-logo.jpg"
                  alt="Vasantham Cafe Official Logo"
                  className="footer-logo-img"
                  width="54"
                  height="54"
                  loading="lazy"
                />
              </div>
              <div className="footer-brand-titles">
                <span className="footer-group-tag">{siteConfig.brand.parentGroup}</span>
                <span className="footer-brand-name">VASANTHAM CAFE</span>
                <span className="footer-brand-sub">FRESH BREWS • GREAT BITES</span>
              </div>
            </div>

            <p className="footer-brand-quote">
              “{siteConfig.brand.wallMuralQuote}”
            </p>

            <p className="footer-brand-desc">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Menu Favorites */}
          <div className="footer-menu-col">
            <h4 className="footer-heading">Menu Highlights</h4>
            <ul className="footer-links-list">
              <li><a href="#menu" className="footer-link">South Indian Filter Coffee</a></li>
              <li><a href="#menu" className="footer-link">Elachi & Ginger Tea</a></li>
              <li><a href="#menu" className="footer-link">Cheese Bread Omelette</a></li>
              <li><a href="#menu" className="footer-link">Gourmet Burgers & Pizzas</a></li>
              <li><a href="#menu" className="footer-link">Fresh Fried Chicken (FFC)</a></li>
              <li><a href="#menu" className="footer-link">Steamed Momos & Mojitos</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <MapPin size={16} className="footer-icon" />
                <span>{siteConfig.contact.address.line1}, {siteConfig.contact.address.area}</span>
              </div>
              <div className="footer-contact-row">
                <Phone size={16} className="footer-icon" />
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.displayPhone}</a>
              </div>
              <div className="footer-contact-row">
                <Mail size={16} className="footer-icon" />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>

            <div className="footer-social-links">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Vasantham Cafe Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Vasantham Cafe Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              )}
              {siteConfig.social.whatsappUrl && (
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Vasantham Cafe WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <p className="copyright-text">
              © {currentYear} {siteConfig.brand.name} ({siteConfig.brand.parentGroup}). All rights reserved.
            </p>
            <p className="parcel-reminder">
              {siteConfig.contact.parcelNote} • Freshly Made, Always Tasty.
            </p>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          background-color: var(--color-espresso-deep);
          color: var(--color-cream-light);
          padding-top: 5rem;
          padding-bottom: 2.5rem;
          border-top: 1px solid var(--border-gold);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        /* Brand Column */
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid var(--color-gold);
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(198, 164, 106, 0.35);
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .footer-brand-titles {
          display: flex;
          flex-direction: column;
        }

        .footer-group-tag {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 700;
        }

        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.04em;
        }

        .footer-brand-sub {
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          color: var(--color-gold-light);
        }

        .footer-brand-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--text-sm);
          color: var(--color-gold-light);
          margin-bottom: 1rem;
          padding-left: 0.75rem;
          border-left: 2px solid var(--color-gold);
        }

        .footer-brand-desc {
          font-size: var(--text-sm);
          color: var(--text-on-dark-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Nav & Menu Columns */
        .footer-heading {
          font-family: var(--font-serif);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-gold-light);
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          font-size: var(--text-sm);
          color: var(--text-on-dark-muted);
          transition: color var(--transition-fast), padding-left var(--transition-fast);
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-gold);
          padding-left: 4px;
        }

        /* Contact Items */
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--text-sm);
          color: var(--text-on-dark-muted);
        }

        .footer-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-row a {
          color: inherit;
          transition: color var(--transition-fast);
        }

        .footer-contact-row a:hover {
          color: var(--color-gold-light);
        }

        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(198, 164, 106, 0.3);
          color: var(--color-cream-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          background: var(--color-gold);
          color: var(--color-espresso-deep);
          border-color: var(--color-gold);
          transform: translateY(-2px);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(247, 241, 232, 0.1);
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .footer-legal {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .copyright-text {
          font-size: var(--text-xs);
          color: var(--text-on-dark-muted);
          margin: 0;
        }

        .parcel-reminder {
          font-size: 0.75rem;
          color: var(--color-gold-light);
          font-style: italic;
          margin: 0;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gold-light);
          font-size: var(--text-xs);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.5rem;
          transition: color var(--transition-fast);
        }

        .back-to-top-btn:hover {
          color: #FFFFFF;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }
        }
      `}</style>
    </footer>
  );
};
