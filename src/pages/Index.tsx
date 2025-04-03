
import { useState, useEffect } from "react";
import NutritionCalculator from "@/components/NutritionCalculator";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade in content on load
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-moes-red to-moes-orange bg-clip-text text-transparent">
              Moe's Nutrition Calculator
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className={cn(
        "flex-1 container mx-auto px-4 py-6 md:py-8", 
        loaded ? "opacity-100 transition-opacity duration-500" : "opacity-0"
      )}>
        <div className="max-w-5xl mx-auto mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-center mb-2">
            Calculate Nutrition for Your Favorite Moe's Items
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            Select your meal components to see the complete nutritional information.
          </p>
        </div>
        
        <NutritionCalculator />
      </main>

      <footer className="mt-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-border/50 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            This nutrition calculator is for informational purposes only. 
            Actual nutritional values may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
