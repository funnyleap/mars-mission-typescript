import { Section } from "../data/factData";
import "./FactCard.scss";

interface FactCardProps {
  section: Section;
}

const FactCard = ({ section }: FactCardProps) => {
  return (
    <div className="fact-section">
      {section.facts.map((fact) => (
        <div className="fact-card">
          <h3>{fact.factTitle}</h3>
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
