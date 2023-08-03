import { Section } from "../data/factData";
import "./FactCard.scss";

const FactCard = (props: { section: Section }) => {
  return (
    <div className="fact-section">
      {props.section.facts.map((fact) => (
        <div className="fact-card">
          <h3 className="fact-header">{fact.factTitle}</h3>
          <div className="card-content">
            <img className="fact-image" src={fact.factImage} alt="factImage" />
            <p className="fact-text"> {fact.factText} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactCard;

<li className="sub-section"></li>;
