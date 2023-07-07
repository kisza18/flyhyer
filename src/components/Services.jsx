import ServicesCard from "../layouts/ServicesCard";
import rightArrow from "../assets/svg/arrow-right.svg";

const Services = () => {
  return (
    <div className="h-screen flex items-center w-full">
      <ServicesCard
        bg="#141623"
        title="Flexible Services"
        paragraph="Smart solutions for all your charter requirements"
        button="All Solutions"
      />
      <div className="plane-card h-full w-full flex flex-col justify-end px-12 py-16">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold text-white">On-Demand</h1>
          <img className="w-8 ml-5" src={rightArrow} alt="arrow" />
        </div>
        <p className="text-white text-xl mt-5">
          Customize all aspects of your journey.
        </p>
      </div>
      <div className="route-card h-full w-full flex flex-col justify-end px-12 py-16">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold text-white">Shared Flights</h1>
          <img className="w-8 ml-5" src={rightArrow} alt="arrow" />
        </div>
        <p className="text-white text-xl mt-5">
          Fly private for a fraction of the price.
        </p>
      </div>
    </div>
  );
};

export default Services;
