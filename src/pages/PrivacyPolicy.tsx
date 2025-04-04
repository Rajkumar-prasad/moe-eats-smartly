
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdsenseAd from "@/components/AdsenseAd";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      <AdsenseAd />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit Moe's Nutrition Calculator website.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <p>
              When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            
            <p className="mt-4">
              Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to our site, and information about how you interact with the site. We refer to this automatically-collected information as "Device Information."
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            
            <p>
              We use the Device Information that we collect to help us screen for potential risk and fraud, and more generally to improve and optimize our site (for example, by generating analytics about how our customers browse and interact with the site).
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
            
            <p>
              We do not share your Personal Information with third parties except to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Behavioral Advertising</h2>
            
            <p>
              We use your browsing behavior on our website to help us understand your preferences and improve your experience with our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Do Not Track</h2>
            
            <p>
              Please note that we do not alter our site's data collection and use practices when we see a Do Not Track signal from your browser.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
            
            <p>
              When you use our website, we will maintain your data for our records unless and until you ask us to delete this information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes</h2>
            
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:contact@moesnutritioncalculator.online">contact@moesnutritioncalculator.online</a>.
            </p>
          </div>
        </div>
        <AdsenseAd />
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
