import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbarcomponent.scss";

export default function NavBarComponent() {
  const pages = [
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
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = (e) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="navbar-logo" src="/logo.png" />
      </NavLink>

      <ul className="navbar-large-menu">
        {pages.map((page) => (
          <li>
            <NavLink to={page.path}>{page.name}</NavLink>
          </li>
        ))}
      </ul>

      <button className="navbar-toggle" onClick={handleMobileMenu}>
        {mobileMenu ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      <div className={`mobile-menu ${mobileMenu ? "mobile-menu--active" : ""}`}>
        <ul className="mobile-menu-links">
          {pages.map((page) => (
            <li>
              <NavLink
                className={({ isActive }) =>
                  `mobile-menu-links__link ${
                    isActive ? "mobile-menu-links__link--active" : ""
                  }`
                }
                to={page.path}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
