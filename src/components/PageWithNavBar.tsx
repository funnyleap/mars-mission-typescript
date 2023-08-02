import { ReactNode } from "react";
import NavBar from "./NavBar";
import "./PageWithNavBar.scss";

interface PageWithNavBarProps {
  children?: ReactNode;
}

const PageWithNavBar = ({ children }: PageWithNavBarProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default PageWithNavBar;
