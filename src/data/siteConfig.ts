export interface SiteConfig {
  brand: {
    name: string;
    parentGroup: string;
    tagline: string;
    secondaryTagline: string;
    wallMuralQuote: string;
    atmosphereQuotes: string[];
    description: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    address: {
      line1: string;
      area: string;
      cityState: string;
      landmarkNote?: string;
    };
    openingHours: Array<{
      days: string;
      hours: string;
    }>;
    parcelNote: string;
    googleMapsUrl: string;
  };
  social: {
    instagram: string;
    facebook?: string;
    whatsappUrl?: string;
  };
  features: Array<{
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Vasantham Cafe",
    parentGroup: "BSV Groups",
    tagline: "A Little Moment of Vasantham.",
    secondaryTagline: "Find Vasantham Cafe in Tirupathur, Tamil Nadu. Browse a menu of coffee and tea, sandwiches, momos, burgers, snacks, juices and more.",
    wallMuralQuote: "A Coffee Break isn't an End, It's the Spark for a Powerful Restart.",
    atmosphereQuotes: [
      "Fresh Brews, Great Bites, Every Time",
      "Good Food Brings People Together",
      "Freshly Made • Always Tasty",
      "Good Days Start with Coffee",
      "Good Food, Good Coffee, Good Mood",
      "Life happens, Coffee helps",
      "Eat, Drink, Enjoy, Repeat"
    ],
    description: "Vasantham Cafe is a contemporary Indian cafe crafted for genuine hospitality, fresh brews, comforting street-to-cafe bites, and uplifting moments shared among friends and family."
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "Signature Menu", href: "#menu" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
  ],
  contact: {
    phone: "+91 77088 63528",
    displayPhone: "+91 77088 63528",
    email: "vasanthamcafe2506@gmail.com",
    address: {
      line1: "Vasantham Cafe",
      area: "Mint Street",
      cityState: "Tirupathur, 635901, Tamil Nadu, India"
    },
    openingHours: [
      { days: "Monday – Saturday", hours: "7:00 AM – 10:30 PM" },
      { days: "Sunday", hours: "7:00 AM – 11:00 PM" }
    ],
    parcelNote: "Parcel orders: Extra ₹5",
    googleMapsUrl: "https://maps.google.com/?q=Vasantham+Cafe%2C+Mint+Street%2C+Tirupathur%2C+635901%2C+Tamil+Nadu%2C+India"
  },
  social: {
    instagram: "https://instagram.com/vasanthamcafe",
    facebook: "https://facebook.com/vasanthamcafe",
    whatsappUrl: "https://wa.me/917708863528?text=Hi%20Vasantham%20Cafe,%20I%20would%20like%20to%20inquire%20about%20your%20menu"
  },
  features: [
    {
      title: "Handcrafted Hot Brews",
      subtitle: "From Cardamom Chai to Filter Coffee",
      description: "Steaming hot cups prepared fresh to order, honoring timeless South Indian brewing traditions.",
      icon: "Coffee"
    },
    {
      title: "Freshly Made Everyday",
      subtitle: "Always Tasty, Never Pre-packaged",
      description: "Crispy fries, golden bread omelettes, and hot momos tossed and served piping fresh.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Signature Fast Bites",
      subtitle: "Gourmet Burgers, Pizzas & FFC",
      description: "Hearty cheese burgers, stone-oven style pizzas, and crispy fresh fried chicken to satisfy every craving.",
      icon: "Flame"
    },
    {
      title: "Chilled Refreshers",
      subtitle: "Mojitos, Cold Coffee & Thick Shakes",
      description: "Refreshing cold drinks, icy frappes, and wholesome ABC juices blended right before your eyes.",
      icon: "Sparkles"
    }
  ]
};
