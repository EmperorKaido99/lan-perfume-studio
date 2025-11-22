import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <img src={logo} alt="KM Fragrances" className="h-24 w-auto mx-auto mb-8" />
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Our Story
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Born from a passion for timeless elegance and the art of perfumery
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
                Our Mission
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                At KM Fragrances, we believe that fragrance is more than just a scent—it's an expression of identity, a moment of confidence, and a lasting memory. Our mission is to craft exceptional perfumes that evoke emotion and celebrate individuality.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Each fragrance in our collection is meticulously composed using the finest ingredients sourced from around the world. We blend traditional perfumery techniques with modern innovation to create scents that are both timeless and contemporary.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We are committed to sustainability, ethical sourcing, and creating products that not only smell beautiful but also reflect our values of quality, integrity, and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">Excellence</h3>
              <p className="font-body text-muted-foreground">
                We pursue perfection in every bottle, ensuring each fragrance meets the highest standards of quality and craftsmanship.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">Sustainability</h3>
              <p className="font-body text-muted-foreground">
                We are committed to ethical sourcing and environmentally responsible practices in every aspect of our business.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">Luxury</h3>
              <p className="font-body text-muted-foreground">
                We believe luxury is in the details—from our ingredients to our packaging, every element is designed to delight.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Experience the KM Difference
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our collection of luxury fragrances and find your signature scent
            </p>
            <a href="/shop">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-body text-lg transition-colors">
                Explore Collection
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
