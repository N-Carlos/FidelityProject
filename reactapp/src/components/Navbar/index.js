import React from "react";
import { NavLink, NavMenu, Tabs, MiddleTab, Button } from "./NavbarElements";

import {
  Nav,
  NavLink,
  NavMenu,
  Tabs,
  MiddleTab,
  Button,
} from "./NavbarElements";
import LoginButton from "../login-button";
const Navbar = () => {
  return (
    <>
      <NavMenu>
        <Tabs>
          <NavLink to="/AccountsAndTrade" activeStyle={{ color: "#4d4dff" }}>
            Accounts and Trade
          </NavLink>
        </Tabs>
        <Tabs>
          <NavLink to="/PlanningAndAdvice" activeStyle={{ color: "#4d4dff" }}>
            Planning and Advice
          </NavLink>
        </Tabs>
        <MiddleTab>
          <NavLink to="/index" activeStyle={{ color: "#4d4dff" }}>
            Fidelity
          </NavLink>
        </MiddleTab>
        <Tabs>
          <NavLink to="/sign-up" activeStyle={{ color: "#4d4dff" }}>
            News and Research
          </NavLink>
        </Tabs>
        <Tabs>
          <NavLink to="/Calculator" activeStyle={{ color: "#4d4dff" }}>
            Product
          </NavLink>
        </Tabs>
        <Button style={{ position: "absolute", bottom: "10px", left: "10px" }}>
          Start Investing Today!
        </Button>
        <Tabs>
          <LoginButton></LoginButton>
        </Tabs>
      </NavMenu>
    </>
  );
};

export default Navbar;
