import "./FactPage.scss";
import { getFacts } from "../data/factData";
import FactCard from "../components/FactCard";

const FactPage = () => {
  return (
    <div className="facts-wrapper">
      <h1 className="page-header">Fun Facts</h1>

      {getFacts().map((section) => (
        <div className="section">
          <h2 className="section-header">{section.sectionTitle}</h2>
          <FactCard section={section} />
        </div>
      ))}
    </div>
  );
};

export default FactPage;
