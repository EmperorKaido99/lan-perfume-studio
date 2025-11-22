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
    price: 189,
    category: "Eau de Parfum",
    image: "/src/assets/product-real-1.jpg",
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
    price: 169,
    category: "Body Cream",
    image: "/src/assets/product-real-2.jpg",
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
    price: 199,
    category: "Parfum",
    image: "/src/assets/product-real-3.jpg",
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
    price: 179,
    category: "Body Powder",
    image: "/src/assets/product-real-4.jpg",
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
    name: "Ocean Breeze",
    price: 159,
    category: "Body Lotion",
    image: "/src/assets/product-5.jpg",
    description: "Fresh and invigorating, Ocean Breeze captures the essence of coastal air with aquatic notes and fresh citrus, perfect for everyday elegance.",
    notes: {
      top: ["Sea Salt", "Bergamot", "Mint"],
      heart: ["Marine Accord", "Lavender"],
      base: ["Driftwood", "Ambergris"]
    },
    ingredients: ["Aqua", "Parfum", "Glycerin", "Limonene", "Linalool"]
  },
  {
    id: "6",
    name: "Velvet Night",
    price: 209,
    category: "Parfum",
    image: "/src/assets/product-6.jpg",
    description: "Seductive and mysterious, Velvet Night is a rich oriental fragrance that envelops the senses with exotic spices and precious woods.",
    notes: {
      top: ["Star Anise", "Pink Pepper"],
      heart: ["Turkish Rose", "Incense", "Myrrh"],
      base: ["Agarwood", "Vanilla", "Leather"]
    },
    ingredients: ["Alcohol Denat", "Parfum", "Aqua", "Benzyl Benzoate", "Cinnamal"]
  }
];
