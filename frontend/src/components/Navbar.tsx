import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl font-semibold">FashionPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <Link
              to="/features"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <div className="px-4 space-y-2">
              <div className="flex justify-center mb-2">
                <ThemeToggle />
              </div>
              <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
