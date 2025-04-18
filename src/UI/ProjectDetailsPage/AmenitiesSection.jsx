import { useContext } from "react";
import AmenitiesList from "./AmenitiesList";
import { ContentModalContext } from "./Context/ContentModalContext";

const content = {
  heading: "Amenities",
  Content:
    "Orchard at Godrej SE7EN in Joka, Kolkata, has a sustainable and fresh atmosphere. The rich floral including over a vehicle-free sphere of over 1 acre grabs attention. Sit next to the central lake and encounter serenity. The well-orchestrated functionalities make life seamless, secure, and stylish. Unmask the journey of infinite happy moments with loved ones",
};

const AmenitiesSection = () => {
  const { openModal } = useContext(ContentModalContext);
  return (
    <div
      className="relative bg-fixed bg-center bg-cover flex flex-col items-center justify-center py-[2.5rem] bg-[url('https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-10_g3.jpg')] scroll-mt-[81px] md:scroll-mt-[86px] lg:scroll-mt-[57px]"
      id="AmenitiesSection"
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-10"></div>
      <div className="flex justify-center flex-col items-center w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className=" relative mb-[20px] flex flex-col justify-center items-center  text-white z-20">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            {content.heading}
          </h1>
          <p className="text-center font-normal mb-[1rem] text-[1rem]">
            {content.Content}
          </p>
          <div className="flex gap-x-[10px] mt-[9px] justify-center font-semibold">
            <button
              className="min-w-[120px] text-[12px] px-[12px] py-[9px] bg-[#2f2f2f] text-white font-semibold hover:cursor-pointer" onClick={()=>{
              openModal(content)}}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <AmenitiesList />
    </div>
  );
};

export default AmenitiesSection;
