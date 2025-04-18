import { useContext } from "react";
import SectionWrapper from "./SectionWrapper";
import { FormModelContext } from "./Context/FormModalContext";

const WalkThroughSection = () => {
  const {openModal} = useContext(FormModelContext);
  return (
    <SectionWrapper>
      <div className="w-full flex justify-center flex-wrap text-white">
        <div className="w-full lg:w-[84%] max-w-[100%] flex justify-center">
          <div className="relative bg-[url('https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-16_g6.jpg')]">
            <div className="absolute inset-0 bg-black/75 pointer-events-none z-10"></div>
            <div className="relative flex flex-col justify-center min-h-[475px] py-[2.5rem] z-20">
              <div className="w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[92%] flex-none px-[0.75rem]">
                  <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
                    Walkthrough
                  </h1>
                  <p className="text-center font-normal mb-[1rem] text-[1rem]">
                    Life is greener than ever at Orchard Godrej SE7EN, Joka,
                    Kolkata. Step out from the comfort of your home and elope in
                    the serenity of 900+ trees and lengths of green corridors.
                    Self-care is pivotal to tackling challenges thrown at you by
                    the worl...
                  </p>
                  <div className="flex gap-x-[10px] mt-[1rem] justify-center">
                    <a className="text-center min-w-[120px] text-[12px] px-[12px] py-[9px] bg-white text-black font-semibold hover:cursor-pointer" onClick={()=>{openModal()}}>
                      VIEW
                    </a>
                    <button className="min-w-[120px] text-[12px] px-[12px] py-[9px] bg-[#2f2f2f] text-white font-semibold hover:cursor-pointer">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WalkThroughSection;
