import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const recommendedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4">
        {/* Back Button */}
        <Link to="/shop">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="bg-card rounded-lg overflow-hidden border border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-3xl text-primary font-body font-bold">
                ${product.price}
              </p>
            </div>

            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Scent Notes */}
            <div className="space-y-4">
              <h3 className="font-display text-xl text-foreground">Scent Notes</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-1">
                    Top Notes
                  </p>
                  <p className="text-foreground font-body">
                    {product.notes.top.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-1">
                    Heart Notes
                  </p>
                  <p className="text-foreground font-body">
                    {product.notes.heart.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-1">
                    Base Notes
                  </p>
                  <p className="text-foreground font-body">
                    {product.notes.base.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-display text-xl text-foreground mb-3">
                Ingredients
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {product.ingredients.join(", ")}
              </p>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Recommended Products */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
