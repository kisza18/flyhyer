import menu from "../assets/svg/menu.svg";
import plane from "../assets/svg/plane.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end px-10 py-7">
      <div className="nav-links flex gap-6 mr-12">
        <a href="/">Solutions</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
      </div>
      <div className="menu-links flex items-center">
        <a className="flex w-10 bg-black rounded-full" href="/">
          <img className="rounded-full p-3" src={plane} />
        </a>
        <a className="flex w-10 bg-black rounded-full ml-2" href="/">
          <img className="rounded-full p-3" src={menu} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
