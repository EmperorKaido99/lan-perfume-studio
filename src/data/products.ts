import kmProduct1 from "@/assets/km-product-1.jpg";
import kmProduct2 from "@/assets/km-product-2.jpg";
import kmProduct3 from "@/assets/km-product-3.jpg";
import kmProduct4 from "@/assets/km-product-4.jpg";
import kmProduct5 from "@/assets/km-product-5.jpg";
import kmProduct6 from "@/assets/km-product-6.jpg";
import kmProduct8 from "@/assets/km-product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  ingredients: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Noir Elegance",
    price: 250,
    category: "Eau de Parfum",
    image: kmProduct1,
    description: "A captivating blend of mystery and sophistication. Noir Elegance opens with fresh bergamot and transitions into a heart of rose and jasmine, settling on a warm base of amber and vanilla.",
    notes: {
      top: ["Bergamot", "Black Pepper", "Cardamom"],
      heart: ["Rose", "Jasmine", "Iris"],
      base: ["Amber", "Vanilla", "Sandalwood"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Limonene", "Linalool", "Citral"]
  },
  {
    id: "2",
    name: "Golden Dawn",
    price: 60,
    category: "Body Cream",
    image: kmProduct8,
    description: "Embrace the warmth of a new beginning. Golden Dawn features citrus notes that evolve into floral elegance, finished with hints of musk and cedar.",
    notes: {
      top: ["Mandarin", "Lemon", "Grapefruit"],
      heart: ["Lily", "Peony", "Orange Blossom"],
      base: ["Musk", "Cedar", "Patchouli"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Limonene", "Geraniol"]
  },
  {
    id: "3",
    name: "Midnight Essence",
    price: 250,
    category: "Parfum",
    image: kmProduct3,
    description: "An intense and unforgettable fragrance for the bold. Midnight Essence combines spicy notes with deep woods and leather for a truly distinctive character.",
    notes: {
      top: ["Saffron", "Nutmeg", "Cinnamon"],
      heart: ["Oud", "Patchouli", "Leather"],
      base: ["Vetiver", "Tobacco", "Amber"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Coumarin", "Eugenol"]
  },
  {
    id: "4",
    name: "Rose Imperial",
    price: 60,
    category: "Body Powder",
    image: kmProduct6,
    description: "A luxurious tribute to the queen of flowers. Rose Imperial is a rich, velvety fragrance that celebrates the timeless beauty of rose with modern sophistication.",
    notes: {
      top: ["Pink Pepper", "Mandarin"],
      heart: ["Bulgarian Rose", "Turkish Rose", "Geranium"],
      base: ["White Musk", "Cashmere Wood"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Citronellol", "Geraniol"]
  },
  {
    id: "5",
    name: "Crystal Essence",
    price: 250,
    category: "Eau de Parfum",
    image: kmProduct5,
    description: "Fresh and invigorating, Crystal Essence captures pure elegance with its crystal bottle design and refined notes that last all day.",
    notes: {
      top: ["Sea Salt", "Bergamot", "Mint"],
      heart: ["Marine Accord", "Lavender"],
      base: ["Driftwood", "Ambergris"]
    },
    ingredients: ["Aqua", "Parfum", "Glycerin", "Limonene", "Linalool"]
  },
  {
    id: "6",
    name: "Luxe Cream",
    price: 60,
    category: "Body Cream",
    image: kmProduct8,
    description: "Indulgent body cream that hydrates and perfumes the skin with a luxurious, long-lasting fragrance that complements our signature scents.",
    notes: {
      top: ["Star Anise", "Pink Pepper"],
      heart: ["Turkish Rose", "Incense", "Myrrh"],
      base: ["Agarwood", "Vanilla", "Leather"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Benzyl Benzoate", "Cinnamal"]
  },
  {
    id: "7",
    name: "Royal Signature",
    price: 250,
    category: "Parfum",
    image: kmProduct2,
    description: "Our most prestigious fragrance in an elegant square bottle. Royal Signature represents the pinnacle of luxury with its bold, unforgettable scent.",
    notes: {
      top: ["Saffron", "Bergamot", "Cardamom"],
      heart: ["Oud", "Rose", "Jasmine"],
      base: ["Amber", "Sandalwood", "Musk"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Coumarin", "Linalool"]
  },
  {
    id: "8",
    name: "Golden Powder",
    price: 60,
    category: "Body Powder",
    image: kmProduct6,
    description: "Silky body powder with a subtle fragrance that keeps you feeling fresh and luxurious throughout the day. Perfect for layering with our perfumes.",
    notes: {
      top: ["Vanilla", "Orange Blossom"],
      heart: ["Jasmine", "Iris"],
      base: ["Musk", "Tonka Bean"]
    },
    ingredients: ["Talc", "Parfum", "Silica", "Limonene", "Geraniol"]
  }
];
