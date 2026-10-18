import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/galleryData';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex = 0,
  totalCount = 0
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Manage dialog modal state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && item) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    }
  }, [isOpen, item]);

  // Handle keyboard events (Esc, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Modern Web Guidance: Light dismiss fallback for backdrop clicks
  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isInside) {
        onClose();
      }
    }
  };

  if (!item) return null;

  return (
    <dialog
      ref={dialogRef}
      {...{ closedby: 'any' }}
      className="lightbox-dialog"
      onClick={handleDialogClick}
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-caption"
    >
      <div className="lightbox-content-box">
        {/* Top Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-info-pill">
            <span className="lightbox-category-tag">{item.category}</span>
            {totalCount > 1 && (
              <span className="lightbox-counter">
                {currentIndex + 1} / {totalCount}
              </span>
            )}
          </div>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close image lightbox"
          >
            <X size={22} />
          </button>
        </div>

        {/* Media Frame with Prev/Next Controls */}
        <div className="lightbox-image-stage">
          {onPrev && totalCount > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous photograph"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="lightbox-media-container">
            <img
              src={item.image}
              alt={item.alt}
              className="lightbox-full-img"
              width="1000"
              height="750"
            />
          </div>

          {onNext && totalCount > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next photograph"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Image Caption & Details */}
        <div className="lightbox-caption-bar">
          <h3 id="lightbox-title" className="lightbox-image-title">
            {item.title}
          </h3>
          <p id="lightbox-caption" className="lightbox-caption-text">
            {item.caption}
          </p>
        </div>
      </div>

      <style>{`
        .lightbox-dialog {
          border: none;
          background: transparent;
          max-width: 95vw;
          max-height: 94vh;
          margin: auto;
          outline: none;
          overflow: hidden;
        }

        .lightbox-dialog::backdrop {
          background-color: rgba(18, 12, 9, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .lightbox-content-box {
          display: flex;
          flex-direction: column;
          background: var(--color-espresso-deep);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
          max-height: 92vh;
        }

        .lightbox-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(36, 25, 20, 0.8);
          border-bottom: 1px solid rgba(198, 164, 106, 0.2);
        }

        .lightbox-info-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lightbox-category-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold);
          background: rgba(198, 164, 106, 0.15);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(198, 164, 106, 0.3);
        }

        .lightbox-counter {
          font-size: 0.8rem;
          color: var(--color-cream-muted);
          font-family: var(--font-sans);
        }

        .lightbox-close-btn {
          color: var(--color-cream-light);
          padding: 0.4rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background: var(--color-gold);
          color: var(--color-espresso-deep);
        }

        .lightbox-image-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0D0907;
          min-height: 320px;
          max-height: 68vh;
          overflow: hidden;
        }

        .lightbox-media-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          max-height: 68vh;
          padding: 0.5rem;
        }

        .lightbox-full-img {
          max-width: 100%;
          max-height: 66vh;
          object-fit: contain;
          border-radius: var(--radius-sm);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(36, 25, 20, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: var(--color-cream-light);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(198, 164, 106, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all var(--transition-fast);
        }

        .lightbox-nav-btn:hover {
          background: var(--color-gold);
          color: var(--color-espresso-deep);
          border-color: var(--color-gold);
        }

        .lightbox-nav-btn.prev-btn {
          left: 1rem;
        }

        .lightbox-nav-btn.next-btn {
          right: 1rem;
        }

        .lightbox-caption-bar {
          padding: 1.25rem 1.75rem;
          background: var(--color-espresso);
          border-top: 1px solid rgba(198, 164, 106, 0.2);
        }

        .lightbox-image-title {
          font-family: var(--font-serif);
          font-size: var(--text-lg);
          color: var(--color-cream-light);
          margin-bottom: 0.35rem;
        }

        .lightbox-caption-text {
          font-size: var(--text-sm);
          color: var(--text-on-dark-muted);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </dialog>
  );
};
