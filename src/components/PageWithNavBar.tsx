import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./PageWithNavBar.scss";

const PageWithNavBar = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageWithNavBar;
