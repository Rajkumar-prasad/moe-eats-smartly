
import { useEffect } from "react";

const AdsenseAd = () => {
  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (error) {
      console.error("Error loading AdSense ad:", error);
    }
  }, []);

  return (
    <div className="my-6">
      <ins 
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7904206080765704"
        data-ad-slot="9371338969"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdsenseAd;
