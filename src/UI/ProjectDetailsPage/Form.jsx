

const Form = (props) => {
  const parent = props.parent;
  return (
    <form>
      <div className={`w-full h-full flex flex-col items-center mt-[0px]`}>
        <div className= {`w-full flex flex-col sm:flex-row lg:flex-col ${parent=="getintouch"?"lg:flex-row":""}`}>
          <div className="flex-1 my-[7px] px-[3.5px]">
            <input 
              type="text"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Enter your name*"
            />
          </div>
          <div className="flex-1 my-[7px] px-[3.5px] ">
            <input
              type="text"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Your phone number*"
            />
          </div>
          <div className="flex-1 my-[7px] px-[3.5px] ">
            <input
              type="text"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Your email address*"
            />
          </div>
        </div>
        <div className={`flex gap-x-2 ${parent=="upperBanner" ? "self-start":""} mt-[7px] mb-[10px]`}>
          <input type="checkbox"></input>
          <span className="text-[1rem]">I accept the Terms & Conditions.</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-[15px] py-[5px] text-[1rem] bg-[#2f2f2f] text-white">SEND MESSAGE</button>
      </div>
    </form>
  );
};

export default Form;
