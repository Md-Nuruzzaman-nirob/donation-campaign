import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center mt-8 mb-10 md:my-10 lg:mt-12 md:mb-14 lg:mb-20">
      <Logo></Logo>
      <ul className="flex items-center gap-4 md:gap-8 lg:gap-12 text-xs md:text-base lg:text-lg xl:text-xl md:font-semibold xl:font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Statistics
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
