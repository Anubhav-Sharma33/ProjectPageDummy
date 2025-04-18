import { useContext } from "react";
import { FormModelContext } from "./Context/FormModalContext";

const AboutSection = () => {
  const {openModal} = useContext(FormModelContext);

  return (
    <div className="w-full pt-[2rem] scroll-mt-[81px] md:scroll-mt-[86px] lg:scroll-mt-[57px]" id = "AboutSection">
      <div className="w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className="w-full">
          <div className="flex justify-center mb-[20px] text-[#525252]">
            <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
              About The Project
            </h1>
          </div>
          <div className="flex flex-col text-[1rem] font-normal text-[#525252]">
            <p className="text-center mb-[1rem]">
              Orchard at Godrej SE7EN, Kolkata is a blissful residential project
              nestled in the lap of nature. The serenity and bright sunshine
              lingering endlessly reciprocate the song of happiness. With
              precision and thoughtfulness, the project crafts top 2 BHK and 3
              BHK apartments in Kolkata.
            </p>
            <p className="text-center mb-[1rem]">
              Discover the joy and passion without hampering the work day
              pattern. Here, every breath you take is away from pollution and
              toxicity. A home here is an ode to self-care as the tranquillity
              being peace and time to introspect on what’s bothering you.
            </p>
          </div>
          <div className="flex justify-center gap-x-[10px] mt-[1.5rem] font-semibold">
            <button className="px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px]">
              READ MORE
            </button>
            <a
              className="text-center px-[20px] py-[9px] text-[13px] bg-[#eff0f3] text-[#2f2f2f] min-w-[120px] hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              DOWNLOAD BROCHURE
            </a>
            <a
              className="text-center px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px] hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              SCHEDULE SITE VISIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
