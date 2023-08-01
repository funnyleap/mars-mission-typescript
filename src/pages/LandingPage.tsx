import "../styles/_variables.scss";
import iconBCard from "../assets/icon-bcard.png";
import iconQuiz from "../assets/icon-quiz.png";
import iconRovers from "../assets/icon-rovers.png";
import iconWeather from "../assets/icon-weather.png";
import "./landing-page.scss";

interface PageButtons {
  name: string;
  icon: string;
  heading: string;
  background: string;
}
const Home = () => {
  const buttonsArray: PageButtons[] = [
    {
      name: "rovers",
      icon: iconRovers,
      heading: "Discover Rovers",
      background: "dashboard-navigation-item__rovers",
    },
    {
      name: "bCard",
      icon: iconBCard,
      heading: "Make a Birthday Card",
      background: "dashboard-navigation-item__bCard",
    },
    {
      name: "quiz",
      icon: iconQuiz,
      heading: "Take our Quiz",
      background: "dashboard-navigation-item__quiz",
    },
    {
      name: "weather",
      icon: iconWeather,
      heading: "Check the weather on Mars",
      background: "dashboard-navigation-item__weather",
    },
  ];

  return (
    <div className="landing-page-wrapper">
      <div className="heading-wrapper">
        <div className="mars-wrapper headings-wrapper">
          <span className="heading-text">MARS</span>
        </div>
        <div className="mission-wrapper headings-wrapper">
          <span className="heading-text">MISSION</span>
        </div>
      </div>

      <div className="dashboard-navigation">
        {buttonsArray.map((button) => (
          <div className="dashboard-navigation-item">
            <div
              className={`dashboard-navigation-item-icon ${button.background}`}
            >
              <img src={button.icon} alt={button.name} />
            </div>
            <button className="dashboard-navigation-button" key={button.name}>
              {button.heading}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
