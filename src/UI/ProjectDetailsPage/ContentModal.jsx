import React, { useContext } from "react";
import { ContentModalContext } from "./Context/ContentModalContext";

const ContentModal = () => {
  const { setModalContent, closeModal } = useContext(ContentModalContext);
  return (
    <div className="fixed w-full max-w-[440px] top-0 right-0 bottom-0 bg-white z-20 mt-[81px] md:mt-[87px] lg:mt-[58px] mb-[35px] sm:mb-[38px] md:mb-0 shadow-[0_0_2rem_rgb(0_0_0_/_20%)] text-[#2f2f2f]">
      <div className=" h-full grid grid-rows-[auto_1fr_auto]">
        <div className="flex justify-between items-center pt-9 px-5 pb-5 border-b border-b-[rgb(0_0_0_/_10%)] font-semibold">
          <h6>Heading</h6>
          <button
            className="text-[1.25rem] hover:cursor-pointer"
            onClick={() => {
              setModalContent(null);
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <p className="pr-[10px] mt-5 mb-5 mr-[10px] ml-5 text-[0.875rem]">
          Life is greener than ever at Orchard Godrej SE7EN, Joka, Kolkata. Step
          out from the comfort of your home and elope in the serenity of 900+
          trees and lengths of green corridors. Self-care is pivotal to tackling
          challenges thrown at you by the world. Meditate to decorate yourself
          with utmost blissfulness.
        </p>
        <div className="w-full flex pt-0 pr-5 pb-2 pl-5">
          <a className="w-full px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px] border border-amber-50 font-semibold text-center">I'm interested in this project</a>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
