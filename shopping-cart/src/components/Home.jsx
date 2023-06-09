import React from "react";
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="home--cont">

        <div className="home--cta--text--button">
          <h1 className="home--title">Chopping prices on what you want!</h1>
          <Link to="catalog">
              <button className="home--button">Shop Now!</button>
          </Link>
        </div>

    </div>
  );
}

export default Home;
