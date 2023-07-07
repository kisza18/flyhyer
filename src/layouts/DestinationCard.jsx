const DestinationCard = (props) => {
  const clicked = () => {
    props.clickData(props.title);
  };

  return (
    <div
      onClick={clicked}
      className="dest-card border-t border-b h-64 flex flex-col justify-between py-5 px-5 cursor-pointer hover:shadow-md duration-300 w-full"
    >
      <h1 className="text-3xl font-semibold">
        {props.title} <span className="font-normal">({props.content})</span>
      </h1>
      <p>{props.country}</p>
    </div>
  );
};

export default DestinationCard;
