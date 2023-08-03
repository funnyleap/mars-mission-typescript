import "./Area51Page.scss";
import { useState, useEffect } from "react";

const checkSecurityCookie = () => {
  const cookieName = "security-clearance";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${encodeURIComponent(cookieName)}=`)) {
      const [, cookieValue] = cookie.split("=");
      const cookieVal = decodeURIComponent(cookieValue);
      return cookieVal === "super-secret-cleared";
    }
  }
  return false;
};

function Area51Page() {
  const [securityCleared, setSecurityCleared] = useState<boolean>();

  useEffect(() => {
    const cookieVal = checkSecurityCookie();
    setSecurityCleared(cookieVal);
  }, []);

  return securityCleared ? (
    <div className="Area51Page">
      <h1>Area 51.</h1>
      <p className="Area51Page__classification">TOP SECRET</p>
      <p>
        You have now been cleared to find out the most secret discoveries from
        our Mars mission.
      </p>
      <p>
        On May 1, 2009, the Spirit rover got stuck on its travels over the Mars
        surface. One of the last images the rover transmitted back to Earth was
        a "selfie" image which shows our most conclusive evidence of Martian
        life.
      </p>
      <p>
        We believe that the rover has been completely scrapped for parts now.
      </p>
      <img src="/image-martian-selfie.jpeg" className="Area51__image" />
      <p className="Area51Page__classification">TOP SECRET</p>
    </div>
  ) : (
    <h1>You shouldn't be here</h1>
  );
}

export default Area51Page;
