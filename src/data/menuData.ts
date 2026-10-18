export interface MenuItem {
  id: string;
  name: string;
  price: number | string;
  description?: string;
  isVeg: boolean;
  popular?: boolean;
  pieces?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hot",
    name: "Coffee & Hot Beverages",
    subtitle: "Steaming classic tea, filter coffee and nourishing malt drinks",
    image: "/images/dishes/chai-traditional.jpg",
    items: [
      { id: "h1", name: "Elachi Tea", price: 15, isVeg: true, popular: true, description: "Fragrant crushed cardamom brewed with fresh milk" },
      { id: "h2", name: "Black Tea", price: 15, isVeg: true },
      { id: "h3", name: "Black Coffee", price: 15, isVeg: true },
      { id: "h4", name: "Fresh Milk", price: 20, isVeg: true },
      { id: "h5", name: "Ginger Tea", price: 20, isVeg: true, popular: true, description: "Zesty fresh crushed ginger infused with hot tea" },
      { id: "h6", name: "Filter Coffee", price: 20, isVeg: true, popular: true, description: "Traditional aromatic South Indian filter brew with frothy milk" },
      { id: "h7", name: "Boost", price: 20, isVeg: true },
      { id: "h8", name: "Horlicks", price: 20, isVeg: true },
      { id: "h9", name: "Lemon Tea", price: 20, isVeg: true },
      { id: "h10", name: "Badam Milk", price: 20, isVeg: true, description: "Rich almond infused warm milk with saffron notes" },
      { id: "h11", name: "Chukku Tea", price: 20, isVeg: true, description: "Traditional dry ginger herbal digestive tea" },
      { id: "h12", name: "Green Tea", price: 25, isVeg: true }
    ]
  },
  {
    id: "cold",
    name: "Cold Beverages",
    subtitle: "Icy chilled coffees and frothy malt shakes",
    image: "/images/dishes/cold-coffee-frappe.jpg",
    items: [
      { id: "c1", name: "Chocolate Coffee", price: 49, isVeg: true, popular: true, description: "Espresso blended with rich chocolate syrup and chilled milk" },
      { id: "c2", name: "Cold Coffee", price: 49, isVeg: true, popular: true, description: "Classic creamy iced coffee blended to frothy perfection" },
      { id: "c3", name: "Cold Boost", price: 49, isVeg: true, description: "Chilled chocolate-malt Boost with ice" },
      { id: "c4", name: "Cold Horlicks", price: 49, isVeg: true, description: "Thick chilled Horlicks malt shake" }
    ]
  },
  {
    id: "bread-omelette",
    name: "Bread Omelette",
    subtitle: "Golden griddle-toasted street style bread omelettes",
    image: "/images/dishes/bread-omelette.jpg",
    items: [
      { id: "bo1", name: "Plain Bread Omelette", price: 39, isVeg: false, description: "Fluffy spiced egg omelette folded into toasted buttered bread" },
      { id: "bo2", name: "Peri Peri Bread Omelette", price: 49, isVeg: false, popular: true, description: "Dusted with zesty African bird's eye chili seasoning" },
      { id: "bo3", name: "Schezwan Bread Omelette", price: 49, isVeg: false, description: "Tossed with fiery Schezwan garlic sauce" },
      { id: "bo4", name: "Tandoori Bread Omelette", price: 49, isVeg: false, description: "Smoky tandoori spices and herb mayo" },
      { id: "bo5", name: "Cheese Bread Omelette", price: 59, isVeg: false, popular: true, description: "Loaded with melting gooey cheddar and mozzarella" }
    ]
  },
  {
    id: "sandwich",
    name: "Toasted Sandwiches",
    subtitle: "Crisp golden-grilled cafe sandwiches",
    image: "/images/dishes/grilled-sandwich.jpg",
    items: [
      { id: "sw1", name: "Veg Sandwich", price: 49, isVeg: true, description: "Crisp veggies, mint chutney and cafe spice mix" },
      { id: "sw2", name: "Cheese Sandwich", price: 59, isVeg: true, description: "Molten cheese toastie grilled golden" },
      { id: "sw3", name: "Corn Sandwich", price: 59, isVeg: true, description: "Sweet corn kernels seasoned with herbs" },
      { id: "sw4", name: "Corn Cheese Sandwich", price: 69, isVeg: true, popular: true, description: "Sweet golden corn with double melted cheese" },
      { id: "sw5", name: "Paneer Sandwich", price: 79, isVeg: true, popular: true, description: "Marinated tender spiced paneer cubes grilled to perfection" },
      { id: "sw6", name: "Chicken Sandwich", price: 79, isVeg: false, popular: true, description: "Juicy shredded roasted chicken with pepper garlic mayo" }
    ]
  },
  {
    id: "snacks",
    name: "Potato & Snacks",
    subtitle: "Crispy fried snacks, finger foods and golden crunch",
    image: "/images/dishes/fries-and-smileys.jpg",
    items: [
      { id: "sn1", name: "French Fries", price: 59, isVeg: true, popular: true, description: "Golden crispy salted potato fries" },
      { id: "sn2", name: "Peri Peri French Fries", price: 69, isVeg: true, popular: true, description: "Tossed in fiery spicy peri peri dust" },
      { id: "sn3", name: "Smiley", price: 69, isVeg: true, pieces: "5 pcs", description: "Crispy cheerful potato smiles" },
      { id: "sn4", name: "Veg Nuggets", price: 69, isVeg: true, pieces: "5 pcs", description: "Crisp vegetable herb nuggets" },
      { id: "sn5", name: "Cheese Corn Nuggets", price: 79, isVeg: true, pieces: "5 pcs", description: "Golden bites oozing with melted cheese and corn" },
      { id: "sn6", name: "Pizza Veg Pockets", price: 89, isVeg: true, pieces: "3 pcs", description: "Crispy turnover pockets filled with pizza sauce and veggies" },
      { id: "sn7", name: "Potato Cheese Shots", price: 89, isVeg: true, pieces: "5 pcs", description: "Bite-sized potato spheres filled with melted cheese" }
    ]
  },
  {
    id: "momos",
    name: "Steamed Momos",
    subtitle: "Handcrafted dumplings served with spicy red chili dip",
    image: "/images/dishes/steamed-momos.jpg",
    items: [
      { id: "mo1", name: "Veg Momo", price: 59, isVeg: true, pieces: "5 pcs", description: "Finely chopped cabbage, carrots and herbs" },
      { id: "mo2", name: "Veg Schezwan Momo", price: 69, isVeg: true, pieces: "5 pcs", description: "Spicy Schezwan tossed filling" },
      { id: "mo3", name: "Corn Momos", price: 69, isVeg: true, pieces: "5 pcs" },
      { id: "mo4", name: "Corn Cheese Momos", price: 79, isVeg: true, pieces: "5 pcs", popular: true, description: "Sweet corn combined with creamy cheese" },
      { id: "mo5", name: "Paneer Momos", price: 79, isVeg: true, pieces: "5 pcs", description: "Spiced grated fresh cottage cheese" },
      { id: "mo6", name: "Chicken Momos", price: 79, isVeg: false, pieces: "5 pcs", popular: true, description: "Juicy minced chicken and spring onion stuffing" },
      { id: "mo7", name: "Chicken Schezwan Momos", price: 89, isVeg: false, pieces: "5 pcs", description: "Chicken dumplings with a spicy Schezwan kick" }
    ]
  },
  {
    id: "burger",
    name: "Gourmet Burgers",
    subtitle: "Layered buns with fresh lettuce, sauces and savory patties",
    image: "/images/dishes/gourmet-burger.jpg",
    items: [
      { id: "bg1", name: "Veg Burger", price: 89, isVeg: true, description: "Crispy potato herb patty with signature sauce" },
      { id: "bg2", name: "Cheese Burger", price: 99, isVeg: true, description: "Veg patty draped in melted cheddar slice" },
      { id: "bg3", name: "Double Cheese Burger", price: 109, isVeg: true, popular: true, description: "Two cheese slices with crunchy veggies" },
      { id: "bg4", name: "Paneer Burger", price: 109, isVeg: true, description: "Thick grilled paneer steak with tangy mayo" },
      { id: "bg5", name: "Chicken Burger", price: 129, isVeg: false, popular: true, description: "Juicy grilled chicken patty with fresh lettuce and tomato" },
      { id: "bg6", name: "Chicken Cheese Burger", price: 139, isVeg: false, description: "Chicken burger with golden melted cheese" },
      { id: "bg7", name: "Spicy Fried Chicken Burger", price: 139, isVeg: false, popular: true, description: "Crunchy fried chicken fillet with spicy dressing" },
      { id: "bg8", name: "Spicy Fried Chicken Cheese Burger", price: 149, isVeg: false, description: "Crispy fried chicken with cheddar cheese" },
      { id: "bg9", name: "Double Cheese Chicken Burger", price: 149, isVeg: false, description: "Loaded double cheese with savory chicken" }
    ]
  },
  {
    id: "pizza",
    name: "Oven-Baked Pizzas",
    subtitle: "Crisp crust topped with savory marinara and mozzarella",
    image: "/images/dishes/fresh-baked-pizza.jpg",
    items: [
      { id: "pz1", name: "Veg Pizza", price: 139, isVeg: true, description: "Capsicum, onion, tomato and mozzarella" },
      { id: "pz2", name: "Cheese Pizza", price: 149, isVeg: true, description: "Classic Margherita style cheese burst" },
      { id: "pz3", name: "Corn Pizza", price: 149, isVeg: true, description: "Sweet golden corn and cheese" },
      { id: "pz4", name: "Cheese Corn Pizza", price: 159, isVeg: true, popular: true, description: "Sweet corn on a rich cheese base" },
      { id: "pz5", name: "Paneer Pizza", price: 159, isVeg: true, description: "Tandoori spiced paneer cubes and crunchy onions" },
      { id: "pz6", name: "Double Cheese Pizza", price: 159, isVeg: true, popular: true, description: "Extra mozzarella cheese over rich tomato base" },
      { id: "pz7", name: "Chicken Pizza", price: 169, isVeg: false, popular: true, description: "Tender chicken tikka chunks and herbs" },
      { id: "pz8", name: "Chicken Cheese Pizza", price: 179, isVeg: false, popular: true, description: "Loaded with barbecue chicken and double mozzarella" }
    ]
  },
  {
    id: "ffc",
    name: "Fresh Fried Chicken (FFC)",
    subtitle: "Hot, crunchy and juicy fried chicken freshly made to order",
    image: "/images/dishes/fried-chicken-ffc.jpg",
    items: [
      { id: "ff1", name: "Chicken Popcorn", price: 99, isVeg: false, pieces: "10 pcs", popular: true, description: "Bite-sized seasoned crunchy chicken popcorn" },
      { id: "ff2", name: "Chicken Wings", price: 119, isVeg: false, pieces: "3 pcs", description: "Crispy spiced chicken wings" },
      { id: "ff3", name: "Chicken Lollipop", price: 139, isVeg: false, pieces: "3 pcs", popular: true, description: "Frenched chicken winglets tossed with house spices" },
      { id: "ff4", name: "Chicken Leg", price: 160, isVeg: false, pieces: "2 pcs", popular: true, description: "Crisp golden battered chicken drumsticks" }
    ]
  },
  {
    id: "wraps",
    name: "Wrap Rolls",
    subtitle: "Warm flatbread rolls stuffed with vegetables and meats",
    image: "/images/dishes/wrap-rolls.jpg",
    items: [
      { id: "wr1", name: "Veg Roll", price: 69, isVeg: true, description: "Sautéed vegetables with tangy sauce" },
      { id: "wr2", name: "Cheese Roll", price: 79, isVeg: true, description: "Veggie filling with molten cheese" },
      { id: "wr3", name: "Corn Roll", price: 79, isVeg: true, description: "Sweet corn and herb dressing" },
      { id: "wr4", name: "Corn Cheese Roll", price: 89, isVeg: true, popular: true, description: "Golden corn and creamy cheese roll" },
      { id: "wr5", name: "Paneer Roll", price: 99, isVeg: true, popular: true, description: "Tender cottage cheese cubes tossed with capsicum and chutney" },
      { id: "wr6", name: "Chicken Roll", price: 99, isVeg: false, popular: true, description: "Spiced chicken tikka wrapped in flaky bread" }
    ]
  },
  {
    id: "mojito",
    name: "Mojito Coolers",
    subtitle: "Refreshing fizzy mocktails with crushed ice and mint",
    image: "/images/dishes/mojito-refreshers.jpg",
    items: [
      { id: "mj1", name: "Mint Mojito", price: 59, isVeg: true, popular: true, description: "Fresh garden mint, crushed lime and sparkling soda" },
      { id: "mj2", name: "Blue Curacao", price: 59, isVeg: true, popular: true, description: "Vibrant citrus blue cooler with soda" },
      { id: "mj3", name: "Pineapple Mojito", price: 59, isVeg: true, description: "Tropical pineapple notes with fresh mint" },
      { id: "mj4", name: "Watermelon Mojito", price: 59, isVeg: true, description: "Crisp sweet watermelon flavor with lime" }
    ]
  },
  {
    id: "healthy",
    name: "Healthy Special Juices",
    subtitle: "Nutrient-packed pure fruit and vegetable cold presses",
    image: "/images/dishes/healthy-special-juices.jpg",
    items: [
      { id: "hs1", name: "Fresh Apple Juice", price: 69, isVeg: true },
      { id: "hs2", name: "Carrot Juice", price: 69, isVeg: true, description: "Sweet crisp local carrots freshly pressed" },
      { id: "hs3", name: "Beetroot Juice", price: 69, isVeg: true, description: "Rich ruby beetroot packed with natural vitality" },
      { id: "hs4", name: "Carrot Beetroot Blend", price: 79, isVeg: true, popular: true },
      { id: "hs5", name: "ABC Juice (Apple + Beetroot + Carrot)", price: 99, isVeg: true, popular: true, description: "The ultimate power booster pressed with fresh ginger & lemon" }
    ]
  },
  {
    id: "fresh-juice",
    name: "Fresh Juices",
    subtitle: "Pure pressed citrus, grapes and seasonal fruits",
    image: "/images/dishes/fresh-fruit-juices.jpg",
    items: [
      { id: "fj1", name: "Fresh Lemon Juice", price: 30, isVeg: true },
      { id: "fj2", name: "Mint Lemon Juice", price: 40, isVeg: true, popular: true },
      { id: "fj3", name: "Lemon Soda", price: 40, isVeg: true, description: "Sweet or salted chilled soda" },
      { id: "fj4", name: "Grape Juice", price: 60, isVeg: true, description: "Rich pulpy black grape juice" },
      { id: "fj5", name: "Orange Juice", price: 60, isVeg: true },
      { id: "fj6", name: "Pomegranate Juice", price: 70, isVeg: true, popular: true, description: "Pure antioxidant ruby arils pressed fresh" },
      { id: "fj7", name: "Apple Juice", price: 70, isVeg: true }
    ]
  },
  {
    id: "milkshakes",
    name: "Thick Milkshakes",
    subtitle: "Creamy whole milk blended with chocolates and classic flavors",
    image: "/images/dishes/thick-milkshakes.jpg",
    items: [
      { id: "ms1", name: "Vanilla Milkshake", price: 59, isVeg: true },
      { id: "ms2", name: "Strawberry Milkshake", price: 59, isVeg: true },
      { id: "ms3", name: "Chocolate Milkshake", price: 59, isVeg: true, popular: true, description: "Decadent Dutch cocoa blend" },
      { id: "ms4", name: "Butterscotch Milkshake", price: 69, isVeg: true },
      { id: "ms5", name: "Pista Milkshake", price: 79, isVeg: true, description: "Aromatic pistachio nut shake" },
      { id: "ms6", name: "Oreo Milkshake", price: 79, isVeg: true, popular: true, description: "Loaded with crushed Oreo cookies" },
      { id: "ms7", name: "Dairy Milk Milkshake", price: 79, isVeg: true, popular: true, description: "Blended with authentic Cadbury Dairy Milk" },
      { id: "ms8", name: "Kitkat Milkshake", price: 79, isVeg: true, description: "Crunchy Kitkat wafer bars blended thick" }
    ]
  },
  {
    id: "ice-cream",
    name: "Ice Cream Scoops",
    subtitle: "Chilled scoops of gourmet ice creams (Single / Double Scoop)",
    image: "/images/dishes/ice-cream-scoops.jpg",
    items: [
      { id: "ic1", name: "Vanilla Scoop", price: "₹40 (1 scoop) / ₹60 (2 scoops)", isVeg: true },
      { id: "ic2", name: "Strawberry Scoop", price: "₹40 (1 scoop) / ₹60 (2 scoops)", isVeg: true },
      { id: "ic3", name: "Chocolate Scoop", price: "₹40 (1 scoop) / ₹60 (2 scoops)", isVeg: true, popular: true },
      { id: "ic4", name: "Blackcurrant Scoop", price: "₹50 (1 scoop) / ₹70 (2 scoops)", isVeg: true, popular: true },
      { id: "ic5", name: "Butterscotch Scoop", price: "₹50 (1 scoop) / ₹70 (2 scoops)", isVeg: true },
      { id: "ic6", name: "Pista Scoop", price: "₹50 (1 scoop) / ₹70 (2 scoops)", isVeg: true }
    ]
  }
];
