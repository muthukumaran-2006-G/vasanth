import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import type { GalleryItem } from './data/galleryData';

export const App: React.FC = () => {
  const [isMenuBoardOpen, setIsMenuBoardOpen] = useState(false);

  const menuBoardItem: GalleryItem = {
    id: "full-menu-board",
    title: "Official Vasantham Cafe Menu Board",
    category: "Brand Art",
    image: "/images/vasantham-full-menu.jpg",
    alt: "Official two-page printed menu board of Vasantham Cafe with all items and rates",
    caption: "“Fresh Brews, Great Bites, Every Time” — Complete official two-page menu with verified pricing and item listings.",
    aspect: "landscape"
  };

  return (
    <div className="vasantham-app">
      {/* Semantic Top Navigation */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content">
        <Hero />
        <StorySection />
        <ExperienceSection />
        <MenuSection onOpenMenuLightbox={() => setIsMenuBoardOpen(true)} />
        <GallerySection />
        <VisitSection />
      </main>

      {/* Footer Landmark */}
      <Footer />

      {/* Full Menu Board Lightbox */}
      <LightboxModal
        isOpen={isMenuBoardOpen}
        item={isMenuBoardOpen ? menuBoardItem : null}
        onClose={() => setIsMenuBoardOpen(false)}
        currentIndex={0}
        totalCount={1}
      />
    </div>
  );
};

export default App;
