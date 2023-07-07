import MissionCard from "../layouts/MissionCard";

const OurMission = () => {
  return (
    <div>
      <div className="mx-12 border-t flex pt-20 mb-36">
        <div className="w-full"></div>
        <div className="max-w-4xl mr-20">
          <h1 className="text-6xl font-bold leading-tight">
            We believe that in a world where passengers have become numbers, a
            personal approach is key to ensure you get the most out of your
            flying experience.
          </h1>
          <div className="grid grid-cols-2 gap-20 mt-16 pr-20">
            <MissionCard
              title="Flexible Solutions"
              content="Stop depending on airlines. Fly on your own terms or soin our
                exclusive shared flights."
            />
            <MissionCard
              title="Smart Quotes"
              content="Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs."
            />
            <MissionCard
              title="Fully Customizable"
              content="Controll all aspects of your journey. Easily upgrade services with our add-ons."
            />
            <MissionCard
              title="Personalization"
              content="Receive full support of our Flight Management service. We have you covered, anywhere."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
