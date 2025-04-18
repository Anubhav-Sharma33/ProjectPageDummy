import Accordion from "./Accordian";


const FaqSection = () => {
  return (
    <div className="w-full py-[2.5rem]" style={{
        background: 'linear-gradient(to bottom right, #eff0f3, #ffffff)',
        boxShadow: '3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff'
      }}>
      <div className="flex flex-col items- center justify-center w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className="flex mb-[20px] justify-center">
          <h2 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            FAQ
          </h2>
        </div>
        <div className="w-full">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
