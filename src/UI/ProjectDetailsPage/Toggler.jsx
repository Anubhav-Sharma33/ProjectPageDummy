
const Toggler = () => {
  return (
    <div className="flex flex-col items-center justify-center hover:cursor-pointer py-4 lg:hidden">
      <span id="menuLine1" className="block w-6 h-0.5 bg-black mb-1"></span>
      <span id="menuLine2" className="block w-6 h-0.5 bg-black mb-1"></span>
      <span id="menuLine3" className="block w-6 h-0.5 bg-black"></span>
    </div>
  );
};

export default Toggler;
