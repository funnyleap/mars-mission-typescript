import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import "./NavBar.scss";

const pageLinks = [
  {
    name: "Rovers",
    path: "/rovers",
  },
  {
    name: "Weather",
    path: "/weather",
  },
  {
    name: "Quiz",
    path: "/quiz",
  },
  {
    name: "Birthday Card",
    path: "/birthday-card",
  },
];

const NavBar = () => {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  return (
    <nav className="NavBar">
      <NavLink to="/">
        <img className="NavBar__Logo" src={logo} />
      </NavLink>

      <ul className="NavBar__Menu NavBar__Menu--large">
        {pageLinks.map((pageLink) => (
          <li>
            <NavLink
              to={pageLink.path}
              className={({ isActive }) =>
                `NavBar__MenuLink ${isActive ? "NavBar__MenuLink--active" : ""}`
              }
            >
              {pageLink.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="NavBar__Toggle"
        onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
      >
        {mobileMenuExpanded ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      <ul
        className={`NavBar__Menu NavBar__Menu--mobile ${
          mobileMenuExpanded ? "NavBar__Menu--mobile--expanded" : ""
        }`}
      >
        {pageLinks.map((page) => (
          <li>
            <NavLink
              className={({ isActive }) =>
                `NavBar__MenuLink ${isActive ? "NavBar__MenuLink--active" : ""}`
              }
              to={page.path}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
