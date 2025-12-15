import { Link } from "react-router-dom";
import { Sparkles, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold">FashionPro</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where AI meets atelier. Crafted for designers who demand excellence.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 FashionPro. Powered by caffeine and couture-level AI.</p>
          <p className="font-serif italic">Design excellence meets digital innovation</p>
        </div>
      </div>
    </footer>
  );
};
