import ModalContext from "./UI/ProjectDetailsPage/Context/FormModalContext";
import Footer from "./UI/ProjectDetailsPage/footer";
import Header from "./UI/ProjectDetailsPage/Header";
import LowerNavBar from "./UI/ProjectDetailsPage/LowerNavBar";
import Main from "./UI/ProjectDetailsPage/Main";

function App() {
  return (
    <ModalContext>
      <Header />
      <Main/>
      <Footer />
      <LowerNavBar />
    </ModalContext>
  );
}

export default App;
