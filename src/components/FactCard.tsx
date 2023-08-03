import { Section } from "../data/factData";
import "./FactCard.scss";

const FactCard = (props: { section: Section }) => {
  return (
    <div>
      {props.section.facts.map((fact) => (
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
  );
};

export default FactCard;
