import Slider from "react-slick";
import SingleAmenity from "./SingleAmenity";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const amenities = [
  {
    title: "GYM",
    image:
      "https://sar.ecis.in/api/starestate/star_estate/amenities/gymnew.webp",
  },
  {
    title:"CHESS",
    image:"https://sar.ecis.in/api/starestate/star_estate/amenities/2024-10-21_12-44-29_chess.png"
  },
  {
    title:"ACTIVE PET PARK",
    image:"https://sar.ecis.in/api/starestate/star_estate/amenities/2024-10-22_05-33-28_dogpark.webp"
  },
  {
    title:"YOGA",
    image:"https://sar.ecis.in/api/starestate/star_estate/amenities/2024-10-22_07-22-03_hinduistyogaposition.webp"
  },
  {
    title:"POWER BACKUP",
    image:"https://sar.ecis.in/api/starestate/star_estate/amenities/power_backupnew.webp"
  },
];

const AmenitiesList = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden px-10 z-20">
      <Slider {...settings}>
        {amenities.map((cur)=>{
            return(
                <SingleAmenity title = {cur.title} image = {cur.image}/>)
        })}
      </Slider>
    </div>
  );
};

export default AmenitiesList;
