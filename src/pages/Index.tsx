
import { useState, useEffect } from "react";
import NutritionCalculator from "@/components/NutritionCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Clock, Salad, Utensils, Heart } from "lucide-react";
import AdsenseAd from "@/components/AdsenseAd";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade in content on load
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      <AdsenseAd />

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
        <AdsenseAd />

        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            The Complete Guide to Moe's Nutrition Facts
          </h2>
          <AdsenseAd />
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="mb-4">
                Looking for the most accurate Moe's Southwest Grill nutrition information? Our Moe's Nutrition Calculator helps you make smarter choices when building your favorite meal. Whether you're counting calories or tracking macros, we've got you covered with the most up-to-date nutritional facts for Moe's menu items.
              </p>
              <p className="mb-4">
                Unlike other calorie counters, our Moe's calorie calculator lets you build your meal exactly how you order it in-store. Add your protein, toppings, and sauces to get real-time updates on calories, protein, carbs, fat, and sodium.
              </p>
              <p className="mb-4">
                With the growing interest in health-conscious dining, knowing exactly what's in your Moe's burrito or bowl has never been more important. Our calculator breaks down all the essential nutritional information so you can enjoy your favorite Moe's Southwest Grill items while staying on track with your dietary goals.
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
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Compare different meal options side by side</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-moes-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span>Mobile-friendly design for on-the-go decisions</span>
                </li>
              </ul>
            </div>
          </div>
          <AdsenseAd />

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Take Control of Your Moe's Menu Choices</h3>
            <AdsenseAd />
            <p className="mb-4">
              I've been a Moe's fan for years, but keeping track of my macros while enjoying my weekly burrito bowl was always a hassle. That's why I built this Moe's macro calculator—to help fellow Moe's lovers make informed choices without sacrificing taste.
            </p>
            <p className="mb-4">
              Whether you're following a specific diet or just trying to be more mindful about what you eat, our tool gives you the power to customize your meal while keeping an eye on the nutritional impact. The Moe's nutritional information provided here helps you build meals that align with your health goals.
            </p>
            <p className="mb-4">
              As someone who used to struggle with finding the right balance between enjoying my favorite Moe's dishes and maintaining a healthy lifestyle, I understand the importance of having accurate nutrition facts at your fingertips. Our Moe's calorie counter was designed with this exact challenge in mind.
            </p>
          </div>
          <AdsenseAd />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-moes-cream/40 dark:bg-moes-brown/30 p-5 rounded-lg shadow-sm flex flex-col">
              <Utensils className="h-8 w-8 text-moes-orange mb-3" />
              <h3 className="text-lg font-semibold mb-2">Customized Meal Building</h3>
              <p className="text-muted-foreground flex-grow">
                Our Moe's calorie calculator offers the same customization options as the in-store experience. Build your meal exactly how you like it and see the nutritional impact of each ingredient.
              </p>
            </div>
            <div className="bg-moes-cream/40 dark:bg-moes-brown/30 p-5 rounded-lg shadow-sm flex flex-col">
              <Salad className="h-8 w-8 text-moes-orange mb-3" />
              <h3 className="text-lg font-semibold mb-2">Dietary Considerations</h3>
              <p className="text-muted-foreground flex-grow">
                Whether you're counting carbs, watching sodium, or maximizing protein, Moe's dietary considerations are easy to track with our detailed nutritional breakdown.
              </p>
            </div>
            <div className="bg-moes-cream/40 dark:bg-moes-brown/30 p-5 rounded-lg shadow-sm flex flex-col">
              <Clock className="h-8 w-8 text-moes-orange mb-3" />
              <h3 className="text-lg font-semibold mb-2">Time-Saving Convenience</h3>
              <p className="text-muted-foreground flex-grow">
                Plan your order before you visit with our easy-to-use Moe's Southwest Grill nutrition calculator. Save time and make healthier choices on the go.
              </p>
            </div>
          </div>
          <AdsenseAd />

          <div className="bg-moes-cream/30 dark:bg-moes-brown/20 p-6 rounded-lg shadow-sm mb-12">
            <h3 className="text-xl font-semibold mb-4">Popular Moe's Nutrition Questions</h3>
            
            <div className="space-y-6">
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

              <div>
                <h4 className="font-medium text-moes-red">How accurate is the Moe's nutrition calculator?</h4>
                <p className="text-muted-foreground">
                  Our Moe's calorie counter uses data directly from Moe's Southwest Grill's official nutritional information, updated regularly to reflect any menu changes. We strive to provide the most accurate Moe's nutrition facts available online.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-moes-red">Can I find vegetarian and vegan options using this calculator?</h4>
                <p className="text-muted-foreground">
                  Absolutely! Our Moe's nutrition calculator clearly identifies vegetarian and vegan options. Try tofu as your protein, add black beans, and load up on veggies for a plant-based meal that doesn't skimp on flavor or nutrition.
                </p>
              </div>
            </div>
          </div>
          <AdsenseAd />

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Understanding Macros at Moe's Southwest Grill</h3>
            <AdsenseAd />
            <p className="mb-4">
              When it comes to tracking macronutrients, Moe's offers plenty of options to customize your meal. Our Moe's macro calculator breaks down the protein, carbs, and fats in each ingredient, allowing you to build meals that fit your specific macro targets.
            </p>
            <p className="mb-4">
              Protein lovers can load up on grilled chicken, steak, or tofu. Watching your carbs? Skip the rice and tortilla in favor of a salad base. Looking for healthy fats? Add guacamole or a moderate portion of cheese. The Moe's nutritional information provided through our calculator makes macro tracking simpler than ever.
            </p>
            <p className="mb-4">
              The beauty of Moe's Southwest Grill nutrition is the flexibility it offers for different dietary approaches. Whether you follow keto, paleo, Mediterranean, or any other eating style, you can find options that work for you by using our detailed Moe's nutrition facts.
            </p>
          </div>
          <AdsenseAd />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-moes-cream/30 dark:bg-moes-brown/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tips for Healthier Choices at Moe's</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-moes-red mt-0.5 mr-2 flex-shrink-0" />
                  <span>Choose a bowl or salad instead of a burrito to save on carbs and calories</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-moes-red mt-0.5 mr-2 flex-shrink-0" />
                  <span>Load up on fresh vegetables for added nutrition with minimal calories</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-moes-red mt-0.5 mr-2 flex-shrink-0" />
                  <span>Skip the queso and go for guacamole for healthier fats</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-moes-red mt-0.5 mr-2 flex-shrink-0" />
                  <span>Choose black beans over refried for more fiber and less sodium</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-moes-red mt-0.5 mr-2 flex-shrink-0" />
                  <span>Ask for sauces and dressings on the side to control portions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Beyond Calories: The Complete Nutritional Picture</h3>
              <AdsenseAd />
              <p className="mb-4">
                While calories get most of the attention, our Moe's nutrition calculator provides a more complete picture of what you're eating. From sodium content to dietary fiber, you can see all the important metrics that impact your health.
              </p>
              <p className="mb-4">
                For those monitoring sodium intake, the detailed Moe's nutritional information helps you identify lower-sodium options. If you're focused on heart health, you can track saturated fat content. And if you're looking to increase your fiber intake, our calculator makes it easy to add fiber-rich ingredients like beans and vegetables.
              </p>
              <p>
                This comprehensive approach to Moe's nutrition facts gives you everything you need to make truly informed choices about your meal.
              </p>
            </div>
          </div>
          <AdsenseAd />

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Make Informed Choices with Our Moe's Calorie Counter</h3>
            <AdsenseAd />
            <p className="mb-4">
              The best thing about Moe's Southwest Grill is the customization—but that makes tracking nutrition tricky. Our Moe's calorie counter eliminates the guesswork by calculating the exact nutritional profile of your custom creation.
            </p>
            <p className="mb-4">
              We've designed this tool with real Moe's fans in mind. It's not just another generic calorie calculator; it's specifically built for Moe's menu items with accurate Moes nutrition facts. Next time you're craving a burrito or bowl, plan your meal here first!
            </p>
            <p className="mb-4">
              Our Moe's nutrition calculator is constantly updated to reflect the latest menu offerings and nutritional data. We're committed to providing you with the most accurate information possible so you can enjoy your favorite Moe's Southwest Grill items with confidence.
            </p>
            <p>
              Whether you're a longtime Moe's enthusiast or trying it for the first time, our detailed nutritional breakdown helps you navigate the menu like a pro. The days of wondering about calories, macros, and other nutritional facts for Moe's menu items are over!
            </p>
          </div>
          <AdsenseAd />

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
          <AdsenseAd />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
