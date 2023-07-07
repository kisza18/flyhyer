import mobileImg from "../assets/images/mobile.png";
import germany from "../assets/flags/germany.png";
import britain from "../assets/flags/britain.png";
import netherlands from "../assets/flags/netherlands.png";
import portugal from "../assets/flags/portugal.png";
import spain from "../assets/flags/spain.png";

const FlightManager = () => {
  return (
    <div className="w-full flex h-full">
      <div className="mobile-section w-1/2">
        <img src={mobileImg} alt="mobile" />
      </div>
      <div className="content-section w-1/2 px-12 py-16 flex flex-col justify-between">
        <h1 className="text-6xl text-white font-bold mb-20">Flight Manager</h1>
        <p className="text-white text-2xl leading-normal pr-52">
          All of our flights come with complimentary Flight Manager Service.
          Your dedicated Flight Manager ensures that every detail of your flight
          is taken care of and you get the most competitive tailor-made offers.
          Speak with your Flight Manager in
        </p>
        <div className="flex items-center gap-5 mt-10 flex-wrap text-white">
          <div className="flex items-center">
            English
            <img className="ml-2" src={britain} />
          </div>
          <div className="flex items-center">
            Dutch
            <img className="ml-2" src={netherlands} />
          </div>
          <div className="flex items-center">
            German
            <img className="ml-2" src={germany} />
          </div>
          <div className="flex items-center">
            Spanish
            <img className="ml-2" src={spain} />
          </div>
          <div className="flex items-center">
            Portuguese
            <img className="ml-2" src={portugal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightManager;
