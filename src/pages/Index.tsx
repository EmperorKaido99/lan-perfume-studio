import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-perfume.jpg";
import perfumeHand from "@/assets/perfume-hand.jpg";

const Index = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in">
            Wrap Yourself in
            <span className="block text-primary mt-2">Timeless Elegance</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            A distinctive blend of exquisite notes and artisan—designed to
            awaken the senses and embrace timeless allure
          </p>
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-lg px-8 animate-scale-in group"
            >
              View Our Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Discover our most beloved fragrances
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                A Fragrance Born of Passion
              </h2>
              <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
                Inspired by the fusion of tradition and modernity, our fragrances are crafted with the finest ingredients. Each scent tells a unique story, evoking emotions and memories that linger long after the initial spritz.
              </p>
              <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
                From radiant serums to nourishing moisturizers, each product is part of a quiet, intentional ritual—created to help you feel your best, brightest self.
              </p>
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={perfumeHand}
                alt="Fragrance"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
