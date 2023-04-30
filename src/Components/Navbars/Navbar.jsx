import React, { useContext, useState } from "react";
import Logo from '../../assets/Logo/linkedin-logo.svg'
import owner from "../../assets/profile/owner.jpg";
import { ImHome3 } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiNotification3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { searchContext } from "../../App";

const Navbar = () => {

  // we are using the useContext hook to access the search state that is defined in the App.jsx file. Initially, the search state is set to false. When the user clicks on the search icon in mobile view, the search state is updated to true, indicating that the user is searching. If the user clicks anywhere else on the page, the search state is updated back to false, indicating that the user is no longer searching. This behavior is implemented in the Home.jsx file.
  const SearchContext = useContext(searchContext)
  const [input, setInput] = useState("");
  const [navMenu, setNavMenu] = useState(false);

  return (
    <nav
      className={`${
        SearchContext.showSearch ? "p-2" : "px-4 py-10"
      } bg-white shadow-md sm:p-2 md:px-7 xl:px-24 fixed top-0 right-0 left-0 z-10`}
    >
      <div className="relative lg:flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-1">
          <img src={Logo} alt="LinkedIn Logo" className="w-12 h-12" />
          <div className="relative">

            {/* Mobile view search bar */}
            <input
              type="text"
              className="block h-10 rounded-sm bg-search w-full px-3 pl-10 xl:focus:w-96 transition-width duration-300 ease-in-out"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <BsSearch
              size={20}
              className="text-links cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3"
            />
          </div>
        </div>

        <ul
          className={`${
            SearchContext.showSearch ? "flex justify-start items-center gap-1" : "flex items-center justify-between"} lg:gap-8 xl:gap-12`}
        >
          <li className="lg:hidden">
            <img
              src={Logo}
              alt="Linkedin Logo"
              className="w-12 h-12 cursor-pointer"
            />
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "block" : "hidden"
            } relative w-full lg:hidden`}
          >
            <input
              type="text"
              className="block h-10 rounded-sm bg-search w-full px-3 pl-10"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <BsSearch
              size={20}
              className="text-links cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3"
            />
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center lg:hidden`}
          >
            <BsSearch
              size={20}
              className="text-links cursor-pointer"
              onClick={() => SearchContext.searchDispatch('search')}
            />
            <span className="hidden md:block text-xs">search</span>
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center`}
          >
            <NavLink className="text-links">
              <ImHome3 size={20} className="text-links cursor-pointer" />
              <span className="hidden md:block text-xs">Home</span>
            </NavLink>
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center`}
          >
            <NavLink className="text-links">
              <IoMdContacts size={20} className="text-links cursor-pointer" />
              <span className="hidden md:block text-xs">Network</span>
            </NavLink>
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center`}
          >
            <NavLink className="text-links">
              <BsFillBriefcaseFill
                size={20}
                className="text-links cursor-pointer"
              />
            </NavLink>
            <span className="hidden md:block text-xs">Jobs</span>
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center`}
          >
            <NavLink className="text-links">
              <AiFillMessage size={20} className="text-links cursor-pointer" />
              <span className="hidden md:block text-xs">Message</span>
            </NavLink>
          </li>

          <li
            className={`${
              SearchContext.showSearch ? "hidden" : "block"
            } md:flex flex-col items-center`}
          >
            <NavLink className="text-links">
              <RiNotification3Fill size={20} className="cursor-pointer" />
              <span className="hidden md:block text-xs">Notification</span>
            </NavLink>
          </li>

          <li className={`${SearchContext.showSearch ? "hidden" : "block"} sm:hidden`}>
            <HiOutlineDotsHorizontal
              size={25}
              className="text-links cursor-pointer"
              onClick={() => setNavMenu((prev) => !prev)}
            />
          </li>

          <li className="hidden sm:block md:flex flex-col items-center">
            <img
              src={owner}
              alt="Owner of Account"
              className="h-6 w-6 rounded-full"
            />
            <div className="hidden md:flex items-center gap-1">
              <span className="text-xs">Me</span>
              <FaChevronDown size={12} className="text-links"/>
            </div>
          </li>

          <li className="hidden sm:block text-links">
            <CgMenuGridR size={25} />
            <div className="hidden md:flex items-center gap-1">
              <span className="text-xs">Work</span>
              <FaChevronDown size={12} />
            </div>
          </li>

          <li className="hidden sm:block">
            <NavLink className="text-premium underline text-xs">
              Get Hired faster
              <br />
              Try premium free
            </NavLink>
          </li>
        </ul>

        {navMenu && (
          <div className="flex items-center justify-between gap-5 px-5 py-3 bg-white absolute top-full right-0 shadow-md rounded-lg navMenu">
            <img
              src={owner}
              alt="Owner of Account"
              className="h-8 w-8 rounded-full"
            />
            <CgMenuGridR />
            <NavLink className="text-premium underline text-xs">
              Get Hired faster
              <br />
              Try premium free
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
