export interface GalleryItem {
  id: string;
  title: string;
  category: "Ambiance" | "Coffee & Drinks" | "Dishes" | "Brand Art";
  image: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Mural Seating",
    category: "Ambiance",
    image: "/images/cafe-interior-mural.jpg",
    alt: "Vasantham Cafe interior seating corner with brand mural wall art and modern designer chairs",
    caption: "The signature dining corner with the Vasantham Cafe wall mural: 'A Coffee Break isn't an End, It's the Spark for a Powerful Restart.'",
    aspect: "portrait"
  },
  {
    id: "g2",
    title: "Cafe Dining Hall & Doodle Wall",
    category: "Ambiance",
    image: "/images/cafe-interior-ambiance.jpg",
    alt: "Wide angle view of Vasantham Cafe dining hall, wood finish floors and coffee doodle art wall",
    caption: "Warm wood-tile floors and creative coffee illustrations greeting patrons at Vasantham Cafe.",
    aspect: "portrait"
  },
  {
    id: "g3",
    title: "Official Vasantham Menu Board",
    category: "Brand Art",
    image: "/images/vasantham-full-menu.jpg",
    alt: "Complete two-page official menu board of Vasantham Cafe with all items and pricing",
    caption: "The official Vasantham Cafe menu board: 'Fresh Brews, Great Bites, Every Time.'",
    aspect: "landscape"
  },
  {
    id: "g4",
    title: "Handcrafted Golden Crest",
    category: "Brand Art",
    image: "/images/dishes/mural-brand-crest.jpg",
    alt: "BSV Groups Vasantham Cafe golden flourish emblem and coffee cup crest",
    caption: "The official BSV Groups emblem — reflecting contemporary South Indian coffee craftsmanship.",
    aspect: "landscape"
  },
  {
    id: "g5",
    title: "Traditional Cardamom Chai",
    category: "Coffee & Drinks",
    image: "/images/dishes/chai-traditional.jpg",
    alt: "Freshly brewed hot cardamom tea in glass cup with whole spices",
    caption: "Brewed fresh with whole crushed green cardamom pods and rich milk.",
    aspect: "square"
  },
  {
    id: "g6",
    title: "Gourmet Cheese Burger",
    category: "Dishes",
    image: "/images/dishes/gourmet-burger.jpg",
    alt: "Layered gourmet burger with cheese, fresh tomato, crisp lettuce on sesame seed bun",
    caption: "Flame-grilled savory patty with melted cheese and fresh crisp greens.",
    aspect: "square"
  },
  {
    id: "g7",
    title: "Fresh Baked Mozzarella Pizza",
    category: "Dishes",
    image: "/images/dishes/fresh-baked-pizza.jpg",
    alt: "Fresh oven-baked pizza on wooden serving paddle with golden cheese",
    caption: "Bubbling mozzarella on a golden crust, baked to order.",
    aspect: "landscape"
  },
  {
    id: "g8",
    title: "Steamed Momos with Red Chili Dip",
    category: "Dishes",
    image: "/images/dishes/steamed-momos.jpg",
    alt: "Steamed dumplings in traditional bamboo steamer basket with fiery chili chutney",
    caption: "Delicate handcrafted dumplings steamed fresh and paired with house chili dip.",
    aspect: "square"
  },
  {
    id: "g9",
    title: "Fresh Fried Chicken (FFC)",
    category: "Dishes",
    image: "/images/dishes/fried-chicken-ffc.jpg",
    alt: "Crispy golden fried chicken wings and popcorn in red serving bucket",
    caption: "Crisp and juicy fried chicken pieces seasoned with house spices.",
    aspect: "square"
  },
  {
    id: "g10",
    title: "Chilled Mojito Refreshers",
    category: "Coffee & Drinks",
    image: "/images/dishes/mojito-refreshers.jpg",
    alt: "Vibrant glasses of chilled mint, blue curacao and watermelon mojitos",
    caption: "Cool sparkling refreshments infused with garden mint and fresh citrus.",
    aspect: "landscape"
  },
  {
    id: "g11",
    title: "Coffee Art & Culture Mural",
    category: "Ambiance",
    image: "/images/dishes/cafe-doodle-wall.jpg",
    alt: "Illustrative coffee doodles and quotes on the cafe interior wall",
    caption: "'Good Days Start with Coffee' — custom chalkboard art celebrating everyday cafe rituals.",
    aspect: "square"
  },
  {
    id: "g12",
    title: "Warm Dining Seating",
    category: "Ambiance",
    image: "/images/dishes/cafe-seating-dining.jpg",
    alt: "Cafe dining table with blue modern lattice chairs and warm wooden table",
    caption: "Comfortable seating designed for conversation, coffee dates, and relaxed dining.",
    aspect: "square"
  }
];
