import { getFacts } from "../data/factData";

const FactsPage = () => {
  return (
    <div>
      <h1>FactsPage</h1>

      {getFacts().map((section) => (
        <div>
          <ul>
            <li>
              <h2>{section.sectionTitle}</h2>
              <div>
                {section.facts.map((fact) => (
                  <ul>
                    <li>
                      <h3>{fact.factTitle}</h3>
                      <p>{fact.factText}</p>
                      <img src={fact.factImage} alt="factImage" />
                    </li>
                  </ul>
                ))}
              </div>
            </li>
          </ul>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default FactsPage;
