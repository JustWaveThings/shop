import React from "react";
import image from "../assets/cat.png";


function NotFound() {
  return (
    <div className="not-found__cont">
      <div className="not-found__split">
        <div className="not-found__left">
          <p className="not-found__404">404</p>

          <h1 className="not-found__title">
            {" "}
            Shhhhhh... you've found the secret page of our star developer...
          </h1>
          <p className="not-found__text">
            Despite sleeping on the couch most of the day, our star still finds
            time to do the <em> real coding!</em>
          </p>
        </div>
        <img
          className="not-found__image"
          src={image}
          alt="cat sleeping on couch"
        ></img>
      </div>
      <button className="not-found__button">Back to Homepage</button>
    </div>
  );
}

export default NotFound;
