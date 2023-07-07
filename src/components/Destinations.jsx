import { useState } from "react";
import Barcelona from "../assets/images/barcelona.png";
import Cannes from "../assets/images/cannes.png";
import Ibiza from "../assets/images/ibiza.png";
import Paris from "../assets/images/paris.png";
import DestinationCard from "../layouts/DestinationCard";

const Destinations = () => {
  const [image, setImage] = useState(Barcelona);

  const handleClick = (e) => {
    if (e === "Barcelona") {
      setImage(Barcelona);
    }
    if (e === "Ibiza") {
      setImage(Ibiza);
    }
    if (e === "Cannes") {
      setImage(Cannes);
    }
    if (e === "Paris") {
      setImage(Paris);
    }
  };
  return (
    <div className="py-32 px-36">
      <div>
        <h1 className="text-5xl font-bold mb-12">Popular Destinations</h1>
      </div>
      <div className="flex items-center justify-between h-full">
        <div
          className="dest-image w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="w-1/2 flex flex-col gap-10 h-full ml-10">
          <div className="flex items-center justify-between gap-10">
            <DestinationCard
              title="Barcelona"
              content="GRO"
              country="Spain"
              clickData={handleClick}
            />
            <DestinationCard
              title="Ibiza"
              content="IBZ"
              country="Spain"
              clickData={handleClick}
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <DestinationCard
              title="Cannes"
              content="CEQ"
              country="France"
              clickData={handleClick}
            />
            <DestinationCard
              title="Paris"
              content="LBG"
              country="France"
              clickData={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
