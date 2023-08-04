import "./FactPage.scss";
import { Section, facts } from "../data/factData";
import FactCard from "../components/FactCard";

const FactPage = () => {
  return (
    <>
      <h1 className="page-header">Fun Facts</h1>
      <ul>
        {facts.map((section: Section) => (
          <li className="fact-section-card">
            <h2 className="section-header">{section.sectionTitle}</h2>
            <FactCard section={section} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FactPage;
