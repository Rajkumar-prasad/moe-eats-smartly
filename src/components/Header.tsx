
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-moes-red to-moes-orange bg-clip-text text-transparent">
              Moe's Nutrition Calculator
            </h1>
          </Link>
          
          <div className="flex items-center gap-4">
            {!isMobile ? (
              <nav className="flex items-center space-x-1">
                <NavLinks onClick={closeMenu} />
              </nav>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
            )}
          >
            <nav className="flex flex-col space-y-4 py-2">
              <NavLinks onClick={closeMenu} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => (
  <>
    <Link
      to="/"
      onClick={onClick}
      className="text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent"
    >
      Home
    </Link>
    <Link
      to="/about"
      onClick={onClick}
      className="text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent"
    >
      About
    </Link>
    <Link
      to="/contact"
      onClick={onClick}
      className="text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent"
    >
      Contact
    </Link>
  </>
);

export default Header;
