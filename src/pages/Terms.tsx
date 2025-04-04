
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdsenseAd from "@/components/AdsenseAd";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <AdsenseAd />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Moe's Nutrition Calculator website.
            </p>
            
            <p className="mt-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            
            <AdsenseAd />
            
            <p className="mt-4">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
            
            <p>
              Permission is granted to temporarily use the materials on Moe's Nutrition Calculator's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            
            <ul className="list-disc pl-6 mt-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Moe's Nutrition Calculator's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Links To Other Web Sites</h2>
            
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Moe's Nutrition Calculator.
            </p>
            
            <p className="mt-4">
              Moe's Nutrition Calculator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Moe's Nutrition Calculator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
            
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <AdsenseAd />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:contact@moesnutritioncalculator.online">contact@moesnutritioncalculator.online</a>.
            </p>
          </div>
        </div>
        <AdsenseAd />
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
