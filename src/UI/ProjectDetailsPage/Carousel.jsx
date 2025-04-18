import { useEffect, useState } from "react";

const banner = [
  {
    desktop_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-54_d2.jpg",
    mobile_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-05_m3.jpg",
    tablet_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-58_t2.jpg",
  },
  {
    desktop_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-01_d3.jpg",
    mobile_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-05_m3.jpg",
    tablet_image_url:
      "/ProjectBannerImage/2025-02-19_12-40-05_t3.jpg",
  },
];

const Carousel = () => {
  const base = "https://sar.ecis.in/api/starestate/star_estate";
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState(base + banner[0].desktop_image_url); // Initial image

  // **Change image every 3 seconds**
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banner.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // **Update image when index changes**
  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      let newUrl = base + banner[index].desktop_image_url; // Default to desktop

      if (width <= 648) {
        newUrl = base + banner[index].mobile_image_url;
      } else if (width <= 1024) {
        newUrl = base + banner[index].tablet_image_url;
      }

      setUrl(newUrl);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [index]); // Runs whenever `index` updates

  return (
    <div className="w-full h-full">
      <img src={url} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default Carousel;
