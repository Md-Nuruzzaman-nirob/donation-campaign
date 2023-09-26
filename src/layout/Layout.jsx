import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const Layout = () => {
  return (
    <div
      className={`md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[82rem] mx-8 md:mx-auto`}
    >
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
