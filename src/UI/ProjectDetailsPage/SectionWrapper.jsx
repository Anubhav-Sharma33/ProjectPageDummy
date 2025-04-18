const SectionWrapper = (props) => {
  return (
    <div className="w-full py-[2.5rem]">
      <div className="flex flex-col items- center justify-center w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        {props.children}
      </div>
    </div>
  );
};

export default SectionWrapper;
