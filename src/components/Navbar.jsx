import menu from "../assets/svg/menu.svg";
import plane from "../assets/svg/plane.svg";
import MainButton from "../layouts/MainButton";

const Navbar = () => {
  return (
    <div className="flex justify-between absolute w-full">
      <div className="w-1/2"></div>
      <div className="flex flex-col w-1/2 items-end">
        <div className="flex items-center justify-end px-10 py-10">
          <div className="nav-links flex gap-12 mr-16 text-xl">
            <a href="/">Solutions</a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
          </div>
          <div className="menu-links flex items-center gap-4">
            <MainButton>
              <img className="w-6 h-8" src={plane} />
            </MainButton>
            <MainButton>
              <img className="w-6 h-8" src={menu} />
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
