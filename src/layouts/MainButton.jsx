const MainButton = (props) => {
  return (
    <button className="bg-black text-white px-3 py-2 rounded-full shadow-xl hover:bg-blue-200 hover:text-black duration-500">
      {props.children}
    </button>
  );
};

export default MainButton;
