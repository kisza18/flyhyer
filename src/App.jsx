import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import FlightManager from "./components/FlightManager";
import Experience from "./components/Experience";
import Carousel from "./components/Carousel";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Header />
      <OurMission />
      <Services />
      <Destinations />
      <FlightManager />
      <Experience />
      <Carousel />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
