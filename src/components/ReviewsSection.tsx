import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface CafeReview {
  id: string;
  name: string;
  foodRating: number;
  ambienceRating: number;
  comment: string;
  createdAt: string;
}

const STORAGE_KEY = 'vasantham-cafe-reviews';
const MAX_REVIEWS = 30;
const MAX_COMMENT_LENGTH = 1000;

interface SavedReviewState {
  reviews: CafeReview[];
  statusMessage: string;
}

const isCafeReview = (value: unknown): value is CafeReview => {
  if (typeof value !== 'object' || value === null) return false;

  const review = value as Record<string, unknown>;
  return (
    typeof review.id === 'string' &&
    typeof review.name === 'string' &&
    typeof review.foodRating === 'number' &&
    Number.isInteger(review.foodRating) &&
    review.foodRating >= 1 &&
    review.foodRating <= 5 &&
    typeof review.ambienceRating === 'number' &&
    Number.isInteger(review.ambienceRating) &&
    review.ambienceRating >= 1 &&
    review.ambienceRating <= 5 &&
    typeof review.comment === 'string' &&
    review.comment.length <= MAX_COMMENT_LENGTH &&
    typeof review.createdAt === 'string' &&
    !Number.isNaN(Date.parse(review.createdAt))
  );
};

const readSavedReviews = (): SavedReviewState => {
  try {
    const storedReviews = window.localStorage.getItem(STORAGE_KEY);
    if (!storedReviews) return { reviews: [], statusMessage: '' };

    const parsed: unknown = JSON.parse(storedReviews);
    if (!Array.isArray(parsed)) {
      throw new Error('Stored reviews are not a list.');
    }

    const reviews = parsed.filter(isCafeReview).slice(0, MAX_REVIEWS);
    return {
      reviews,
      statusMessage: reviews.length === parsed.length
        ? ''
        : 'Some saved comments could not be displayed because their data was invalid.',
    };
  } catch (error) {
    console.error('Unable to load saved cafe reviews from this browser.', error);
    return { reviews: [], statusMessage: 'Saved comments could not be loaded from this browser.' };
  }
};

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

const ReviewStars: React.FC<{ rating: number; label: string }> = ({ rating, label }) => (
  <span className="review-display-rating" aria-label={`${label}: ${rating} out of 5`}>
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={15}
        fill={index < rating ? 'currentColor' : 'none'}
        aria-hidden="true"
      />
    ))}
    <span>{label}</span>
  </span>
);

export const ReviewsSection: React.FC = () => {
  const [savedReviewState] = useState(readSavedReviews);
  const [reviews, setReviews] = useState(savedReviewState.reviews);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [foodRating, setFoodRating] = useState(0);
  const [ambienceRating, setAmbienceRating] = useState(0);
  const [statusMessage, setStatusMessage] = useState(savedReviewState.statusMessage);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedComment = comment.trim();
    if (!trimmedComment) return;
    if (!foodRating || !ambienceRating) {
      setStatusMessage('Please choose a food and ambience rating before posting.');
      return;
    }

    const review: CafeReview = {
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
      name: name.trim().slice(0, 50),
      foodRating,
      ambienceRating,
      comment: trimmedComment.slice(0, MAX_COMMENT_LENGTH),
      createdAt: new Date().toISOString(),
    };
    const nextReviews = [review, ...reviews].slice(0, MAX_REVIEWS);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextReviews));
      setStatusMessage('Your comment has been posted on this device.');
    } catch (error) {
      console.error('Unable to save cafe review in this browser.', error);
      setStatusMessage('Your comment is visible for now, but could not be saved on this device.');
    }

    setReviews(nextReviews);
    setComment('');
  };

  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-title">
      <div className="container reviews-container">
        <div className="section-title-wrap">
          <div className="section-eyebrow">VISITOR FEEDBACK</div>
          <h2 id="reviews-title" className="section-title">Share Your Cafe Experience</h2>
          <p className="section-description">
            Tell us what you thought of the food and ambience. Your comment will appear below and be saved only in this browser.
          </p>
        </div>

        <div className="reviews-layout">
          <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="review-form-title">Write a comment</h3>
            <label className="review-input-label" htmlFor="review-name">
              Name <span>(optional)</span>
            </label>
            <input
              id="review-name"
              className="review-text-input"
              type="text"
              value={name}
              maxLength={50}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
            />

            <RatingPicker label="Food" value={foodRating} onChange={setFoodRating} />
            <RatingPicker label="Ambience" value={ambienceRating} onChange={setAmbienceRating} />

            <label className="review-input-label" htmlFor="review-comment">Your comment</label>
            <textarea
              id="review-comment"
              className="review-text-input review-comment-input"
              value={comment}
              maxLength={MAX_COMMENT_LENGTH}
              onChange={(event) => setComment(event.target.value)}
              placeholder="Share a helpful note about your visit..."
              required
              rows={5}
            />
            <div className="review-form-footer">
              <span className="review-character-count">
                {comment.length}/{MAX_COMMENT_LENGTH}
              </span>
              <button className="btn btn-primary review-submit-button" type="submit">
                Post comment
              </button>
            </div>
            <p className="review-storage-note">
              Comments are stored in this browser only; they are not sent to or visible to the cafe or other visitors.
            </p>
            {statusMessage && (
              <p className="review-status-message" role="status">{statusMessage}</p>
            )}
          </form>

          <div className="review-list" aria-live="polite">
            <h3 className="review-list-title">Visitor comments</h3>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <article className="review-card" key={review.id}>
                  <div className="review-card-heading">
                    <strong>{review.name || 'Cafe visitor'}</strong>
                    <time dateTime={review.createdAt}>
                      {new Date(review.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="review-card-ratings">
                    <ReviewStars rating={review.foodRating} label="Food" />
                    <ReviewStars rating={review.ambienceRating} label="Ambience" />
                  </div>
                  <p className="review-card-comment">{review.comment}</p>
                </article>
              ))
            ) : (
              <p className="review-empty-state">No comments yet. Be the first to share your experience.</p>
            )}
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
        .review-display-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .review-star-button {
          display: inline-flex;
          padding: 0.2rem;
          color: #B9AA93;
        }

        .review-star-button.selected,
        .review-display-rating svg {
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

        .review-card {
          padding: 1rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        .review-card:first-of-type {
          border-top: 0;
        }

        .review-card-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.4rem 1rem;
          color: var(--color-espresso);
        }

        .review-card-heading time {
          color: var(--text-secondary);
          font-size: var(--text-xs);
        }

        .review-card-ratings {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          margin-top: 0.5rem;
        }

        .review-display-rating {
          color: var(--text-secondary);
          font-size: var(--text-xs);
        }

        .review-display-rating span {
          margin-left: 0.2rem;
        }

        .review-card-comment {
          margin-top: 0.75rem;
          color: var(--text-primary);
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }

        .review-empty-state {
          padding: 1rem 0;
          color: var(--text-secondary);
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
