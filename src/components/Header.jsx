import Navbar from "./Navbar";
import logoImg from "../assets/svg/hyer.svg";
import cloudImg from "../assets/images/clouds.png";
import planeImg from "../assets/images/plane.png";
import MainButton from "../layouts/MainButton";

const Header = () => {
  return (
    <div className="header relative w-full h-full overflow-hidden">
      <Navbar />
      <div className="h-full pt-10">
        <div className="content px-12 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center">
            <img className="w-1/2" src={logoImg} alt="logo" />
            <div className="mr-52 mt-16">
              <h1 className="text-5xl font-bold">Personalised</h1>
              <h1 className="text-5xl font-bold">Aviation</h1>
            </div>
          </div>
          <div className="flex items-center justify-between py-10 w-full">
            <p className="text-md text-black z-40">
              More flexibility, freedom and choice!
            </p>
            <div className="flex gap-5 z-50">
              <MainButton>Book an Aircraft</MainButton>
              <MainButton>Book a Shared Flight</MainButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="plane-image w-1/2 z-40 -rotate-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16"
          src={planeImg}
          alt="plane"
        />
        <img
          className="absolute z-0 bottom-0 right-0"
          src={cloudImg}
          alt="cloud"
        />
      </div>
    </div>
  );
};

export default Header;
