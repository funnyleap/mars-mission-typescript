import { getFacts } from "../data/factData";

const FactList = () => {
  return (
    <div className="fact-list">
      <h1 className="fact-list__header">FactsPage</h1>
      {getFacts().map((section) => (
        <div className="fact-list-section">
          <h2 className="fact-list-section__title">{section.sectionTitle}</h2>
          <div className="fact-list-section-fact">
            {section.facts.map((fact) => (
              <ul>
                <li className="fact-list-section-fact-content">
                  <h3 className="fact-list-section-fact-content__title">
                    {fact.factTitle}
                  </h3>
                  <p className="fact-list-section-fact-content__text">
                    {fact.factText}
                  </p>
                  <img
                    className="fact-list-section-fact-content__image"
                    src={fact.factImage}
                    alt="factImage"
                  />
                </li>
              </ul>
            ))}
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default FactList;
