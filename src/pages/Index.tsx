
import { useState, useEffect } from "react";
import NutritionCalculator from "@/components/NutritionCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

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

        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            The Complete Guide to Moe's Nutrition Facts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="mb-4">
                Looking for the most accurate Moe's Southwest Grill nutrition information? Our Moe's Nutrition Calculator helps you make smarter choices when building your favorite meal. Whether you're counting calories or tracking macros, we've got you covered with the most up-to-date nutritional facts for Moe's menu items.
              </p>
              <p className="mb-4">
                Unlike other calorie counters, our Moe's calorie calculator lets you build your meal exactly how you order it in-store. Add your protein, toppings, and sauces to get real-time updates on calories, protein, carbs, fat, and sodium.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-moes-red">Why Use Our Moe's Calories Calculator?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Complete nutritional breakdown of your custom meal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Accurate Moe's nutrition facts updated regularly</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Easy-to-use interface for building your perfect meal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Supports your dietary goals and considerations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Take Control of Your Moe's Menu Choices</h3>
            <p className="mb-4">
              I've been a Moe's fan for years, but keeping track of my macros while enjoying my weekly burrito bowl was always a hassle. That's why I built this Moe's macro calculator—to help fellow Moe's lovers make informed choices without sacrificing taste.
            </p>
            <p className="mb-4">
              Whether you're following a specific diet or just trying to be more mindful about what you eat, our tool gives you the power to customize your meal while keeping an eye on the nutritional impact. The Moe's nutritional information provided here helps you build meals that align with your health goals.
            </p>
          </div>

          <div className="bg-moes-cream/30 dark:bg-moes-brown/20 p-6 rounded-lg shadow-sm mb-10">
            <h3 className="text-xl font-semibold mb-4">Popular Moe's Nutrition Questions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-moes-red">What are the lowest calorie options at Moe's?</h4>
                <p className="text-muted-foreground">
                  A salad base with chicken, black beans, pico de gallo, and mild salsa creates a flavorful, protein-packed meal for under 400 calories. Use our Moe's calories calculator to find more low-calorie combinations.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-moes-red">How can I build a high-protein meal at Moe's?</h4>
                <p className="text-muted-foreground">
                  Start with a bowl base, add double protein (chicken or steak works best), black beans, and cheese for a meal with 40+ grams of protein. Our nutrition facts for Moe's menu items show exactly how much protein each ingredient adds.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-moes-red">Are there low-carb options at Moe's Southwest Grill?</h4>
                <p className="text-muted-foreground">
                  Yes! Choose a salad base without rice, add your favorite protein, guacamole, cheese, and sour cream for a delicious low-carb meal. The Moe's nutritional information in our calculator helps you track carbs accurately.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Make Informed Choices with Our Moe's Calorie Counter</h3>
            <p className="mb-4">
              The best thing about Moe's Southwest Grill is the customization—but that makes tracking nutrition tricky. Our Moe's calorie counter eliminates the guesswork by calculating the exact nutritional profile of your custom creation.
            </p>
            <p>
              We've designed this tool with real Moe's fans in mind. It's not just another generic calorie calculator; it's specifically built for Moe's menu items with accurate Moes nutrition facts. Next time you're craving a burrito or bowl, plan your meal here first!
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Ready to Build Your Perfect Moe's Meal?</h3>
            <p className="mb-4 max-w-2xl mx-auto">
              Scroll back up to our Moe's Nutrition Calculator and start creating your custom meal now. Your taste buds—and your body—will thank you!
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="flex items-center gap-2 mx-auto bg-moes-red hover:bg-moes-red/90 text-white px-5 py-3 rounded-md transition-colors"
            >
              Try the Calculator Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
