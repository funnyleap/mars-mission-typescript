import { getFacts } from "../data/factData";
import "../styles/factlist.scss";

const FactList = () => {
  return (
    <div className="facts-wrapper">
      <h1 className="facts-header">Fun Facts</h1>
      <div className="facts-list">
        {getFacts().map((section) => (
          <div className="">
            <h2 className="section-header">{section.sectionTitle}</h2>
            <div className="">
              {section.facts.map((fact) => (
                <ul>
                  <li className="">
                    <h3 className="fact-header">{fact.factTitle}</h3>
                    <div className="card">
                      <img
                        className="fact-image"
                        src={fact.factImage}
                        alt="factImage"
                      />
                      <p className="fact-text"> {fact.factText} </p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactList;
