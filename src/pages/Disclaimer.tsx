
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdsenseAd from "@/components/AdsenseAd";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <AdsenseAd />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              The information provided by Moe's Nutrition Calculator ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nutritional Information</h2>
            
            <p>
              The nutritional information provided through our calculator is based on data that we believe to be accurate at the time of publication. However, menu items, ingredients, and nutritional content may vary by location and are subject to change without notice. We cannot guarantee that all information is completely accurate, current, or complete.
            </p>
            
            <p className="mt-4">
              For the most accurate and up-to-date nutritional information, please consult with your local Moe's Southwest Grill restaurant or the official Moe's Southwest Grill website.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">No Affiliation with Moe's Southwest Grill</h2>
            
            <p>
              Moe's Nutrition Calculator is not affiliated with, endorsed by, or sponsored by Moe's Southwest Grill or its parent company. All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Not Medical Advice</h2>
            
            <p>
              The information provided by our nutrition calculator is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary restrictions.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Food Allergies and Sensitivities</h2>
            
            <p>
              If you have food allergies, sensitivities, or specific dietary restrictions, we strongly recommend that you consult directly with Moe's Southwest Grill staff about ingredient information before consuming any menu items.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
            
            <p>
              The site may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
            
            <p>
              The information given by the Moe's Nutrition Calculator is for general guidance on matters of interest only. Even if we take every precaution to ensure that the content is both current and accurate, errors can occur. We may make changes to the site at any time without notice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about this Disclaimer, please contact us at <a href="mailto:contact@moesnutritioncalculator.online">contact@moesnutritioncalculator.online</a>.
            </p>
          </div>
        </div>
        <AdsenseAd />
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
