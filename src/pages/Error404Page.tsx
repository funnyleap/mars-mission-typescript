import { NavLink } from "react-router-dom";
import "./Error404Page.scss";

function Error404Page() {
  return (
    <div className="Error404Page">
      <h1>404</h1>
      <img
        className="Error404Page__image"
        src="https://paul7dxb.github.io/hosted-assets/mars/404-image.jpeg"
        alt="404 image sad rover lost"
      />
      <div>
        <p>It looks like you've got a bit lost</p>
        <NavLink to="/">Take me Home</NavLink>
      </div>
    </div>
  );
}

export default Error404Page;
