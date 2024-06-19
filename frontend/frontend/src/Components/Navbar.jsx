import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div
        className={`${
          isMenuOpen
            ? "px-6 h-[520px] transition-all"
            : "h-[100px]  transition-all"
        } md:container md:flex md:justify-between   md:h-[85px] md:px-0 overflow-hidden`}
      >
        <div className="text-[45px] md:text-[50px]  font-Nunito font-bold px-4 justify-between cursor-pointer  text-cyan-600 flex mt-1">
          <div>
          <img src="https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718457264/n5r9yxgjiewbnzloeqts.png" className="h-12  mt-3 mx-3"/>
          </div>
          <h2 className="pt-2 md:pt-0"> <Link to="/">KidKinder</Link> </h2>
          <div
            className="block mt-4 text-5xl cursor-pointer md:hidden "
            onClick={toggleMenu}
          >
            <IoIosMenu />
          </div>
        </div>

        <div className="flex flex-col font-Nunito font-bold text-cyan-800 text-lg mt-4 md:flex-row">
          <Link to={`/`} className="p-[10px] hover:text-sky-500">
            Home
          </Link>
          <Link to={`/About`} className="p-[10px] hover:text-sky-500">
            About
          </Link>
          <Link to={`/Classes`} className="p-[10px] hover:text-sky-500">
            Classes
          </Link>
          <Link to={`/Teachers`} className="p-[10px] hover:text-sky-500">
            Teachers
          </Link>
          <Link to={`/home`} className="p-[10px] hover:text-sky-500">
            Gallery
          </Link>
          <Link to={`/home`} className="p-[10px]  hover:text-sky-500">
            Pages
            <IoMdArrowDropdown className="inline-block hover:text-sky-500" />
          </Link>
          <Link to={`/home`} className="p-[10px] hover:text-sky-500">
            Contact
          </Link>
          <button className="block bg-cyan-600 p-[10px] rounded-full mt-[20px]  w-28 text-white md:hidden">
            Join Class
          </button>
        </div>

        <div>
          <button className="hidden md:bg-sky-600 md:p-[5px] md:rounded-full md:mt-[25px] md:w-28 md:text-white md:block">
            Join Class
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
