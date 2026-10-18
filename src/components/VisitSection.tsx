import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  CheckCircle,
  Copy,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const VisitSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryNote, setInquiryNote] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.area}, ${siteConfig.contact.address.cityState}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    // Direct frontend preparation for WhatsApp or Phone communication
    const message = encodeURIComponent(
      `Hello Vasantham Cafe! My name is ${inquiryName} (${inquiryPhone}). ${inquiryNote ? `Note: ${inquiryNote}` : 'I would like to inquire about visiting/ordering.'}`
    );
    const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp directly with the customer's message prefilled
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setInquirySubmitted(true);
  };

  return (
    <section id="visit" className="section visit-section" aria-label="Visit Us and Cafe Location">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">LOCATION & HOURS</div>
          <h2 className="section-title">Drop by Vasantham Cafe</h2>
          <p className="section-description">
            Whether for a morning filter coffee restart, an afternoon snack, or evening chats with friends, our doors are open with fresh brews ready.
          </p>
        </div>

        <div className="visit-grid">
          {/* Left Column: Essential Visit Details */}
          <div className="visit-info-card">
            {/* Address */}
            <div className="visit-detail-block">
              <div className="visit-icon-circle">
                <MapPin size={22} />
              </div>
              <div className="visit-text-group">
                <h3 className="detail-heading">Our Location</h3>
                <address className="detail-body not-italic">
                  <strong>{siteConfig.contact.address.line1}</strong>
                  <br />
                  {siteConfig.contact.address.area}
                  <br />
                  {siteConfig.contact.address.cityState}
                </address>
                {siteConfig.contact.address.landmarkNote && (
                  <p className="landmark-note">
                    {siteConfig.contact.address.landmarkNote}
                  </p>
                )}
                <div className="address-actions">
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="btn btn-secondary btn-sm"
                    aria-label="Copy cafe address"
                  >
                    {copied ? <CheckCircle size={14} color="#2F6423" /> : <Copy size={14} />}
                    <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="visit-detail-block">
              <div className="visit-icon-circle">
                <Clock size={22} />
              </div>
              <div className="visit-text-group">
                <h3 className="detail-heading">Opening Hours</h3>
                <ul className="hours-list">
                  {siteConfig.contact.openingHours.map((slot, idx) => (
                    <li key={idx} className="hours-item">
                      <span className="days-label">{slot.days}:</span>
                      <strong className="time-label">{slot.hours}</strong>
                    </li>
                  ))}
                </ul>
                <div className="hours-badge">
                  <span className="pulse-dot" />
                  <span>Fresh Brews All Day</span>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="visit-detail-block">
              <div className="visit-icon-circle">
                <Phone size={22} />
              </div>
              <div className="visit-text-group">
                <h3 className="detail-heading">Connect With Us</h3>
                <p className="detail-body">
                  For parcel advance orders or menu queries:
                </p>
                <div className="contact-links-stack">
                  <a href={`tel:${siteConfig.contact.phone}`} className="contact-touch-link">
                    <Phone size={16} />
                    <span>{siteConfig.contact.displayPhone}</span>
                  </a>
                  <a
                    href={siteConfig.social.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-touch-link whatsapp-link"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="contact-touch-link email-link">
                    <Mail size={16} />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Visit Inquiry / Pre-order Contact Form */}
          <div className="visit-form-card">
            <div className="form-card-header">
              <span className="form-eyebrow">DIRECT INQUIRY</span>
              <h3 className="form-title">Planning a Visit or Takeaway?</h3>
              <p className="form-desc">
                Send a quick note directly to our team via WhatsApp for party orders, special requests, or group seating inquiries.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="inquiry-success-box">
                <CheckCircle size={44} className="success-icon" />
                <h4>Inquiry Prepared!</h4>
                <p>
                  Your message has been opened in WhatsApp to chat directly with Vasantham Cafe. We look forward to welcoming you!
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setInquirySubmitted(false);
                    setInquiryName('');
                    setInquiryPhone('');
                    setInquiryNote('');
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="inquiry-name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-phone" className="form-label">
                    Contact Number <span className="req">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-note" className="form-label">
                    Message or Special Requirement (Optional)
                  </label>
                  <textarea
                    id="inquiry-note"
                    rows={3}
                    value={inquiryNote}
                    onChange={(e) => setInquiryNote(e.target.value)}
                    placeholder="e.g. Large group visiting on Saturday evening, or pre-ordering 10 sandwiches..."
                    className="form-textarea"
                  />
                </div>

                <div className="form-notice">
                  <AlertCircle size={14} className="notice-icon" />
                  <span>
                    Opens WhatsApp directly to connect with our counter team in real time.
                  </span>
                </div>

                <button type="submit" className="btn btn-gold form-submit-btn">
                  <MessageCircle size={18} />
                  <span>Continue on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .visit-section {
          background-color: var(--color-cream-light);
          border-top: 1px solid var(--border-subtle);
        }

        .visit-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* Left Column Details */
        .visit-info-card {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-subtle);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .visit-detail-block {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .visit-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(198, 164, 106, 0.15);
          color: var(--color-gold-dark);
          border: 1px solid rgba(198, 164, 106, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .visit-text-group {
          flex: 1;
        }

        .detail-heading {
          font-size: var(--text-lg);
          margin-bottom: 0.5rem;
          color: var(--color-espresso);
        }

        .detail-body {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .landmark-note {
          font-size: var(--text-xs);
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 1rem;
        }

        .address-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-sm {
          padding: 0.55rem 1rem;
          font-size: 0.8rem;
        }

        /* Hours List */
        .hours-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 0.85rem;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          font-size: var(--text-sm);
          padding-bottom: 0.25rem;
          border-bottom: 1px dashed rgba(36, 25, 20, 0.08);
        }

        .days-label {
          color: var(--text-secondary);
        }

        .time-label {
          color: var(--color-espresso);
        }

        .hours-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--text-xs);
          font-weight: 600;
          color: #2F6423;
          background: #EBF3E8;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid #C1E1B6;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2F6423;
        }

        /* Contact Links */
        .contact-links-stack {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .contact-touch-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-espresso);
          padding: 0.5rem 0;
          transition: color var(--transition-fast);
        }

        .contact-touch-link:hover {
          color: var(--color-gold-dark);
        }

        .whatsapp-link {
          color: #1E7E34;
        }

        /* Right Column Form */
        .visit-form-card {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-gold);
          box-shadow: var(--shadow-editorial);
          padding: 2.25rem;
        }

        .form-card-header {
          margin-bottom: 1.5rem;
        }

        .form-eyebrow {
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--color-gold-dark);
          text-transform: uppercase;
        }

        .form-title {
          font-size: var(--text-2xl);
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .form-desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          margin: 0;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-espresso);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .req {
          color: #A32824;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-family: inherit;
          font-size: var(--text-sm);
          background-color: var(--color-cream-light);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--color-espresso);
          outline: none;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--color-gold);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(198, 164, 106, 0.2);
        }

        .form-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .notice-icon {
          color: var(--color-gold-dark);
          flex-shrink: 0;
        }

        .form-submit-btn {
          width: 100%;
          padding: 0.95rem;
        }

        .inquiry-success-box {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon {
          color: #2F6423;
          margin-bottom: 1rem;
        }

        .inquiry-success-box h4 {
          margin-bottom: 0.5rem;
        }

        .inquiry-success-box p {
          color: var(--text-muted);
          font-size: var(--text-sm);
          margin-bottom: 1.5rem;
        }

        @media (min-width: 900px) {
          .visit-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};
