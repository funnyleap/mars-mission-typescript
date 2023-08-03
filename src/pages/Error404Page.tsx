import { Link } from "react-router-dom";
import image404 from "../assets/image-404.jpeg";
import "./Error404Page.scss";

function Error404Page() {
  return (
    <div className="Error404Page">
      <h1>404</h1>
      <img
        className="Error404Page__image"
        src={image404}
        alt="404 image sad rover lost"
      />
      <div>
        <p>It looks like you've got a bit lost</p>
        <Link to="/">Take me Home</Link>
      </div>
    </div>
  );
}

export default Error404Page;
