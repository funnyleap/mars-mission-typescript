import { Link } from "react-router-dom";
import iconBirthdayCard from "../assets/icon-birthdaycard.png";
import iconQuiz from "../assets/icon-quiz.png";
import iconRovers from "../assets/icon-rovers.png";
import iconFacts from "../assets/icon-facts.png";
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
    className: "LandingPage__DashboardItemIcon--rovers",
    path: "/rovers",
  },
  {
    name: "Birthday Card",
    icon: iconBirthdayCard,
    heading: "Make a Birthday Card",
    className: "LandingPage__DashboardItemIcon--birthdayCard",
    path: "/birthday-card",
  },
  {
    name: "Quiz",
    icon: iconQuiz,
    heading: "Take our Quiz",
    className: "LandingPage__DashboardItemIcon--quiz",
    path: "/quiz",
  },
  {
    name: "Facts",
    icon: iconFacts,
    heading: "Discover the Fun Facts!",
    className: "LandingPage__DashboardItemIcon--weather",
    path: "/facts",
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
            <div className="LandingPage__DashboardItem">
              <div
                className={`LandingPage__DashboardItemIcon ${pageButton.className}`}
              >
                <img src={pageButton.icon} alt={pageButton.name} />
              </div>
              <div className="LandingPage__DashboardItemTile">
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
