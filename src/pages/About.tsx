
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdsenseAd from "@/components/AdsenseAd";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      <AdsenseAd />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Welcome to Moe's Nutrition Calculator, your trusted tool for making informed dietary choices while enjoying your favorite Moe's Southwest Grill menu items.
            </p>
            
            <AdsenseAd />
            
            <p className="mt-4">
              Our mission is to help you make healthier food choices by providing accurate and comprehensive nutritional information for all menu items at Moe's Southwest Grill. We understand that maintaining a balanced diet is important, and we want to empower you with the knowledge to make choices that align with your dietary goals.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Purpose</h2>
            
            <p>
              Moe's Nutrition Calculator was created to bridge the gap between enjoying delicious Southwestern cuisine and maintaining awareness of nutritional intake. Whether you're counting calories, monitoring macronutrients, or managing dietary restrictions, our calculator provides the information you need in a user-friendly format.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
            
            <p>
              Our calculator allows you to select menu items and view detailed nutritional information including calories, protein, carbohydrates, fat, and sodium content. You can customize your meal by adding or removing ingredients, just as you would when ordering at a Moe's restaurant.
            </p>
            
            <p className="mt-4">
              We maintain our database with the most current nutritional information available, though we always recommend confirming with your local Moe's Southwest Grill for the most accurate and up-to-date nutritional facts.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            
            <p>
              We are committed to providing a reliable, user-friendly tool that helps you make informed dietary decisions. We value your feedback and continually work to improve the calculator's functionality and accuracy.
            </p>
            
            <p className="mt-4">
              Thank you for using Moe's Nutrition Calculator. We hope our tool helps you enjoy your favorite Southwestern meals while staying mindful of your nutritional goals.
            </p>
          </div>
        </div>
        <AdsenseAd />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
