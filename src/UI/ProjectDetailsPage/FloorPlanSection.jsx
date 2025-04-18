import FloorPlanSubSection from "./FloorPlanSubSection";
import SectionWrapper from "./SectionWrapper";

const FloorPlanSection = () => {
  return (
    <SectionWrapper>
      <div className="w-full scroll-mt-[81px] md:scroll-mt-[86px] lg:scroll-mt-[57px]" id = "FloorPlanSection">
        <div className="flex flex-col items-center mb-[20px] text-[#2f2f2f]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            Floor Plans
          </h1>
          <p className="text-center font-normal mb-[1rem] text-[1rem]">
            The 2BHK and 3BHK apartments at Orchard in Godrej SE7EN, Joka,
            Kolkata aim to conceptualize live well. Step into the tranquil oasis
            of blissful living by staying close to nature. The high-street re...
          </p>
          <div className="flex gap-x-[10px] mt-[1rem] justify-center">
            <button className="min-w-[120px] text-[12px] px-[12px] py-[9px] bg-[#2f2f2f] text-white font-semibold">
              READ MORE
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-y-[20px] sm:flex-row sm:gap-y-0 justify-center flex-wrap">
            <FloorPlanSubSection />
            <FloorPlanSubSection />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FloorPlanSection;
