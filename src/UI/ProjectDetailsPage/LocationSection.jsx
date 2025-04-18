import LocationAddress from "./LocationAddress";
import LocationAdvantage from "./LocationAdvantage";
import { ContentModalContext } from "./Context/ContentModalContext";
import { useContext } from "react";

const location = [
  { title: "Address", location: "Joka Kolkata" },
  { title: "City", location: "Kolkata" },
  { title: "State", location: "West Bengal" },
  { title: "Country", location: "India" },
];

const LocationAdvantages = [
  {
    image:
      "https://sar.ecis.in/api/starestate/star_estate/location_advantages/Metro.png",
    title: "upcoming Joka metro",
    distance: "1.6 Km",
  },
  {
    image:"https://sar.ecis.in/api/starestate/star_estate/location_advantages/hospital.png",
    title: "Disha Eye Hospital",
    distance:"5.8 km"
  },
  {
    image:"https://sar.ecis.in/api/starestate/star_estate/location_advantages/school.png",
    title:"ekananda Mission School",
    distance:"850 m",
  },
  {
    image:"https://sar.ecis.in/api/starestate/star_estate/location_advantages/railwaystation.png",
    title:"Howrah Station",
    distance:"19.9 km"
  }
];
const content = {
  heading: "Location",
  Content:"Orchard at Godrej SE7EN, Joka, Kolkata, maps the entire city in a few minutes. The proximity to academic establishments, work places, and recreational spheres. Live well at a world-class living address with smooth navigation to anywhere you wish to be on time."
};

const LocationSection = () => {
  const { openModal } = useContext(ContentModalContext);
  return (
    <div className="w-full py-[2.5rem] scroll-mt-[81px] md:scroll-mt-[86px] lg:scroll-mt-[57px]" id = "LocationSection">
      <div className="flex justify-center flex-col w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className="flex flex-col items-center mb-[20px]">
          <h1 className="text-[#2f2f2f] text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            {content.heading}
          </h1>
          <p className="text-center font-normal mb-[1rem] text-[1rem]">
            {content.Content}
          </p>
          <div className="flex gap-x-[10px] mt-[1rem] justify-center">
            <button className="min-w-[120px] text-[12px] px-[12px] py-[9px] bg-[#2f2f2f] text-white font-semibold hover:cursor-pointer" onClick={()=>{
              openModal(content)}}>
              READ MORE
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-[20px] lg:flex-row-reverse lg:items-start">
          <div className="w-full px-[0.75rem] lg:w-1/2">
            <div
              className="p-[1rem]"
              style={{
                background:
                  "linear-gradient(to bottom right, #eff0f3, #ffffff)",
                boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
              }}
            >
              <div>
                <a href="#">
                  <img
                    src="https://sar.ecis.in/api/starestate/star_estate/projects/2025-02-19_12-39-14_Screenshot_20250219_180759.png"
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-[0.75rem] lg:w-1/2">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                {LocationAdvantages.map((cur)=>{
                    return (<LocationAdvantage image = {cur.image} title = {cur.title} distance = {cur.distance}/>)
                })}
              </div>
            </div>
            <div
              className="flex flex-col mt-[1rem] p-[1rem] text-[14px] border border-[#116d42]"
              style={{
                background:
                  "linear-gradient(to bottom right, #eff0f3, #ffffff)",
                boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-[20px]">
                {location.map((cur) => {
                  return (
                    <LocationAddress
                      title={cur.title}
                      location={cur.location}
                    />
                  );
                })}
              </div>
              <div className="mt-[2.5rem] flex">
                <a className="text-center px-[20px] py-[9px] text-[13px] bg-gradient-to-br from-[#eff0f3] to-[#ffffff] p-4 text-[#2f2f2f] min-w-[120px] font-semibold shadow-[3px_3px_3px_#e8e6e6,-3px_-3px_3px_#fff] ">
                  <i className="fa fa-map-marker-alt mr-[5px]"></i> VIEW ON MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
