import React from "react";
import { Button } from "../components/Navbar/NavbarElements"; 

const Home = () => {
  return (
    <div>
      <h1>Reverse Hedge Funds</h1>
      <p>
        Hedge funds are actively managed alternative investments that commonly use risky investment strategies. 
        Hedge fund investment requires a high minimum investment or net worth from accredited investors. 
        Hedge funds charge higher fees than conventional investment funds.
      </p>
      <div className="navbar-container">
        <Button img="profile_pic.png">Click Me</Button> 
      </div>
    </div>
  );
};

export default Home;
