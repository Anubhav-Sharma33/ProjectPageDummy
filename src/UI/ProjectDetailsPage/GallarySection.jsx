import ImagesSubSection from "./ImagesSubSection";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryImages = [
  {
    mobile:
      "https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-12_mg5.jpg",
    desktop:
      "https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-10_g3.jpg",
  },
  {
    mobile:
      "https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-15_mg6.jpg",
    desktop:
      "https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-13_g2.jpg",
  },
];

const GallarySection = () => {
  const [index, setIndex] = useState(0);
  const total = GalleryImages.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    // ✅ Proper cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [total]);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-[2.5rem] bg-[#2f2f2f]">
      <div className="flex justify-center flex-col w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className="flex justify-center mb-[20px]">
          <h1 className="text-white text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            Gallery
          </h1>
        </div>
        <div className="relative flex justify-center items-center">
          <ImagesSubSection curImage={GalleryImages[index]} />
          {/* Left Arrow */}
          <div
            className="absolute w-[calc(10%-10px)] flex items-center justify-center h-full top-0 left-0 z-20 cursor-pointer bg-black/75"
            onClick={goPrev}
          >
            <ChevronLeft className="text-white w-10 h-10" />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute w-[calc(10%-10px)] flex items-center justify-center h-full top-0 right-0 z-20 cursor-pointer bg-black/75"
            onClick={goNext}
          >
            <ChevronRight className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallarySection;
