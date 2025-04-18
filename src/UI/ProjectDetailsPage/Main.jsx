import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import Banner from "./Banner";
import CompanyInfoSection from "./CompanyInfoSection";
import { ModalProvider } from "./Context/ContentModalContext";
import FaqSection from "./FaqSection";
import FloorPlanSection from "./FloorPlanSection";
import FormSection from "./FormSection";
import GallarySection from "./GallarySection";
import GetInTouchSection from "./GetInTouchSection";
import LocationSection from "./LocationSection";
import WalkThroughSection from "./WalkThroughSection";

const Main = () => {
  return (
    <div>
      <ModalProvider>
        <Banner />
        <FormSection/>
        <AboutSection />
        <WalkThroughSection />
        <AmenitiesSection />
        <FloorPlanSection />
        <GallarySection />
        <LocationSection />
        <GetInTouchSection />
        <FaqSection />
        <CompanyInfoSection />
      </ModalProvider>
    </div>
  );
};

export default Main;
