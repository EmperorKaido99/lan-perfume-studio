import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4 space-y-2">
        {category && (
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
            {category}
          </p>
        )}
        <Link to={`/product/${id}`}>
          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-primary font-body font-semibold">R{price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
