import { Link } from "react-router-dom";
import "./Error404Page.scss";

function Error404Page() {
  return (
    <div className="Error404Page">
      <h1>404</h1>
      <p>It looks like you've got a bit lost</p>
      <img
        className="Error404Page__image"
        src="/image-404.jpeg"
        alt="404 image sad rover lost"
      />
      <Link className="Error404Page__Link" to="/">
        Take me Home
      </Link>
    </div>
  );
}

export default Error404Page;
