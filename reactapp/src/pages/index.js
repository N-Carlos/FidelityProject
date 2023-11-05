/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { StyledDiv } from "../components/index.styles";
const Home = () => {
  return (
    <div>
      <div className="navbar-container"></div>
      <h1>Community Hedge Funds</h1>
      <StyledDiv>
        <div>
          <img src={require("./FidelityProjectImg.png")}></img>
        </div>
        <div>
          <p>
            Hedge funds are actively managed alternative investments that
            commonly use risky investment strategies. Hedge fund investment
            requires a high minimum investment or net worth from accredited
            investors. Hedge funds charge higher fees than conventional
            investment funds.
          </p>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Home;
