import { Link } from "react-router-dom";
import iconBirthdayCard from "../assets/icon-birthdaycard.png";
import iconQuiz from "../assets/icon-quiz.png";
import iconRovers from "../assets/icon-rovers.png";
import iconWeather from "../assets/icon-weather.png";
import "./LandingPage.scss";

interface PageButton {
  name: string;
  icon: string;
  heading: string;
  className: string;
  path: string;
}

const pageButtons: PageButton[] = [
  {
    name: "Rovers",
    icon: iconRovers,
    heading: "Discover Rovers",
    className: "LandingPage__Dashboard__Item--rovers",
    path: "/rovers",
  },
  {
    name: "Birthday Card",
    icon: iconBirthdayCard,
    heading: "Make a Birthday Card",
    className: "LandingPage__Dashboard__Item--birthdayCard",
    path: "/birthday-card",
  },
  {
    name: "Quiz",
    icon: iconQuiz,
    heading: "Take our Quiz",
    className: "LandingPage__Dashboard__Item--quiz",
    path: "/quiz",
  },
  {
    name: "Weather",
    icon: iconWeather,
    heading: "Check the weather on Mars",
    className: "LandingPage__Dashboard__Item--weather",
    path: "/weather",
  },
];

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1 className="LandingPage__Heading">
        <span className="LandingPage__HeadingCapsule LandingPage__HeadingCapsule--mars">
          MARS
        </span>
        <span className="LandingPage__HeadingCapsule LandingPage__HeadingCapsule--mission">
          MISSION
        </span>
      </h1>

      <nav className="LandingPage__Dashboard">
        {pageButtons.map((pageButton) => (
          <Link to={pageButton.path} key={pageButton.name}>
            <div className="LandingPage__Dashboard__Item">
              <div
                className={`LandingPage__Dashboard__Item--icon ${pageButton.className}`}
              >
                <img src={pageButton.icon} alt={pageButton.name} />
              </div>
              <div className="LandingPage__Dashboard__Item--tile">
                {pageButton.heading}
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LandingPage;
