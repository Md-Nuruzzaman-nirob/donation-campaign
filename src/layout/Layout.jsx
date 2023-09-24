import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Main layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
