const ServicesCard = (props) => {
  return (
    <div
      className="relative h-full w-full flex flex-col justify-between px-12 py-16"
      style={{ background: props.bg }}
    >
      <h1 className="text-6xl text-white font-semibold w-32">{props.title}</h1>

      <div>
        <p className="text-xl text-white font-semibold">{props.paragraph}</p>

        <button className="rounded-full bg-transparent text-white text-lg border-white border-2 px-5 py-2 mt-8 hover:bg-blue-200 hover:text-black duration-500">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
