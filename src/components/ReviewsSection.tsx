import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const RatingPicker: React.FC<{
  label: string;
  value: number;
  onChange: (rating: number) => void;
}> = ({ label, value, onChange }) => (
  <fieldset className="review-rating-field">
    <legend>{label}</legend>
    <div
      className="review-rating-options"
      role="group"
      aria-label={`${label} rating`}
      aria-required="true"
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          className={`review-star-button ${rating <= value ? 'selected' : ''}`}
          aria-label={`${rating} out of 5`}
          aria-pressed={rating === value}
          onClick={() => onChange(rating)}
        >
          <Star size={22} fill={rating <= value ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      ))}
      <span className="review-rating-value">
        {value ? `${value} / 5` : 'Select a rating'}
      </span>
    </div>
  </fieldset>
);

export const ReviewsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [foodRating, setFoodRating] = useState(0);
  const [ambienceRating, setAmbienceRating] = useState(0);
  const [smsLink, setSmsLink] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedComment = comment.trim();
    if (!trimmedComment) return;
    if (!foodRating || !ambienceRating) {
      setSmsLink('');
      setStatusMessage('Please choose a food and ambience rating before preparing your SMS.');
      return;
    }

    const message = [
      `Vasantham Cafe feedback${name.trim() ? ` from ${name.trim().slice(0, 50)}` : ''}`,
      `Food rating: ${foodRating}/5`,
      `Ambience rating: ${ambienceRating}/5`,
      `Comment: ${trimmedComment.slice(0, 1000)}`,
    ].join('\n');
    const phone = siteConfig.contact.phone.replace(/\D/g, '');
    setSmsLink(`sms:${phone}?body=${encodeURIComponent(message)}`);
    setStatusMessage('Your review is ready. Open your messaging app and tap Send to send it to the cafe.');
  };

  const updateName = (value: string) => {
    setName(value);
    setSmsLink('');
    setStatusMessage('');
  };

  const updateComment = (value: string) => {
    setComment(value);
    setSmsLink('');
    setStatusMessage('');
  };

  const updateFoodRating = (value: number) => {
    setFoodRating(value);
    setSmsLink('');
    setStatusMessage('');
  };

  const updateAmbienceRating = (value: number) => {
    setAmbienceRating(value);
    setSmsLink('');
    setStatusMessage('');
  };

  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-title">
      <div className="container reviews-container">
        <div className="section-title-wrap">
          <div className="section-eyebrow">VISITOR FEEDBACK</div>
          <h2 id="reviews-title" className="section-title">Share Your Cafe Experience</h2>
          <p className="section-description">
            Tell us what you thought of the food and ambience. Prepare a text message to send your feedback directly to the cafe.
          </p>
        </div>

        <div className="reviews-layout">
          <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="review-form-title">Send a review by SMS</h3>
            <label className="review-input-label" htmlFor="review-name">
              Name <span>(optional)</span>
            </label>
            <input
              id="review-name"
              className="review-text-input"
              type="text"
              value={name}
              maxLength={50}
              onChange={(event) => updateName(event.target.value)}
              placeholder="Your name"
            />

            <RatingPicker label="Food" value={foodRating} onChange={updateFoodRating} />
            <RatingPicker label="Ambience" value={ambienceRating} onChange={updateAmbienceRating} />

            <label className="review-input-label" htmlFor="review-comment">Your comment</label>
            <textarea
              id="review-comment"
              className="review-text-input review-comment-input"
              value={comment}
              maxLength={1000}
              onChange={(event) => updateComment(event.target.value)}
              placeholder="Share a helpful note about your visit..."
              required
              rows={5}
            />
            <div className="review-form-footer">
              <span className="review-character-count">
                {comment.length}/1000
              </span>
              <button className="btn btn-primary review-submit-button" type="submit">
                Prepare SMS
              </button>
            </div>
            <p className="review-storage-note">
              Your review is not saved on this website. Your messaging app will open with the review addressed to {siteConfig.contact.displayPhone}; check it and tap Send. SMS charges may apply.
            </p>
            {statusMessage && (
              <p className="review-status-message" role="status">{statusMessage}</p>
            )}
            {smsLink && (
              <a className="btn btn-secondary review-sms-link" href={smsLink}>
                Open SMS app
              </a>
            )}
          </form>

          <div className="review-list">
            <h3 className="review-list-title">What your SMS includes</h3>
            <p>Your optional name, separate food and ambience ratings, and your comment are added to the draft message.</p>
            <p>The SMS app lets you review the message and choose whether to send it. This website does not store submissions.</p>
          </div>
        </div>
      </div>

      <style>{`
        .reviews-section {
          background: var(--color-cream-light);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .reviews-container {
          max-width: 1100px;
        }

        .reviews-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 2rem;
          align-items: start;
        }

        .review-form,
        .review-list {
          min-width: 0;
          padding: 1.5rem;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          background: #FFFFFF;
          box-shadow: var(--shadow-subtle);
        }

        .review-form-title,
        .review-list-title {
          margin-bottom: 1rem;
          color: var(--color-espresso);
        }

        .review-input-label,
        .review-rating-field legend {
          display: block;
          margin-bottom: 0.45rem;
          color: var(--color-espresso);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .review-input-label span {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .review-text-input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.75rem 0.85rem;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--color-espresso);
          background: #FFFFFF;
          font: inherit;
        }

        .review-text-input:focus {
          border-color: var(--color-gold);
          outline: 2px solid rgba(198, 164, 106, 0.25);
        }

        .review-comment-input {
          resize: vertical;
          min-height: 120px;
        }

        .review-rating-field {
          margin: 0 0 1rem;
          border: 0;
        }

        .review-rating-options,
        .review-star-button {
          display: inline-flex;
          padding: 0.2rem;
          color: #B9AA93;
        }

        .review-star-button.selected {
          color: var(--color-gold-dark);
        }

        .review-rating-value {
          margin-left: 0.5rem;
          color: var(--text-secondary);
          font-size: var(--text-sm);
        }

        .review-form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .review-character-count,
        .review-storage-note,
        .review-status-message {
          color: var(--text-secondary);
          font-size: var(--text-xs);
        }

        .review-submit-button:disabled {
          cursor: wait;
          opacity: 0.65;
        }

        .review-storage-note {
          margin-top: 1rem;
        }

        .review-status-message {
          margin-top: 0.5rem;
          color: var(--color-espresso);
        }

        .review-sms-link {
          margin-top: 1rem;
        }

        @media (max-width: 760px) {
          .reviews-layout {
            grid-template-columns: 1fr;
          }

          .review-form,
          .review-list {
            padding: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};
