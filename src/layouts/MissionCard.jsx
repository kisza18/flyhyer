const MissionCard = (props) => {
  return (
    <div className="border-t border-black pt-5">
      <h1 className="text-2xl font-bold mb-5">{props.title}</h1>
      <p className="text-lg font-semibold text-gray-500 leading-relaxed">
        {props.content}
      </p>
    </div>
  );
};

export default MissionCard;
