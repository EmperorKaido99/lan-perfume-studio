import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="KM Fragrances" className="h-16 w-auto" />
            <p className="text-muted-foreground font-body text-sm">
              Crafting timeless elegance through luxury fragrances
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Customer Service</h3>
            <ul className="space-y-2 font-body text-sm">
              <li className="text-muted-foreground">Shipping Information</li>
              <li className="text-muted-foreground">Returns & Exchanges</li>
              <li className="text-muted-foreground">Privacy Policy</li>
              <li className="text-muted-foreground">Terms of Service</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Connect With Us</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground font-body text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                smutskeanu4@gmail.com
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2024 KM Fragrances. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
