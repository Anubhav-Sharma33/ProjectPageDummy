import AboutSection from "./UI/ProjectDetailsPage/AboutSection"
import AmenitiesSection from "./UI/ProjectDetailsPage/AmenitiesSection"
import Banner from "./UI/ProjectDetailsPage/Banner"
import CompanyInfoSection from "./UI/ProjectDetailsPage/CompanyInfoSection"
import ModalContext from "./UI/ProjectDetailsPage/Context/FormModalContext"
import FaqSection from "./UI/ProjectDetailsPage/FaqSection"
import FloorPlanSection from "./UI/ProjectDetailsPage/FloorPlanSection"
import Footer from "./UI/ProjectDetailsPage/footer"
import FormSection from "./UI/ProjectDetailsPage/FormSection"
import GallarySection from "./UI/ProjectDetailsPage/GallarySection"
import GetInTouchSection from "./UI/ProjectDetailsPage/GetInTouchSection"
import Header from "./UI/ProjectDetailsPage/Header"
import LocationSection from "./UI/ProjectDetailsPage/LocationSection"
import LowerNavBar from "./UI/ProjectDetailsPage/LowerNavBar"
import WalkThroughSection from "./UI/ProjectDetailsPage/WalkThroughSection"


function App() {

  return (
    <ModalContext>
    <Header/>
    <Banner/>
    <FormSection/>
    <AboutSection/>
    <WalkThroughSection/>
    <AmenitiesSection/>
    <FloorPlanSection/>
    <GallarySection/>
    <LocationSection/>
    <GetInTouchSection/>
    <FaqSection/>
    <CompanyInfoSection/>
    <Footer/>
    <LowerNavBar/>
    </ModalContext>
  )
}

export default App
