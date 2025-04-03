
import { useState, useEffect } from "react";
import NutritionCalculator from "@/components/NutritionCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade in content on load
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />

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

      <Footer />
    </div>
  );
};

export default Index;
