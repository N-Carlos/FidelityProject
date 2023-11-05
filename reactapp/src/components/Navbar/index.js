import React from "react";
import styled from "styled-components";
import { Nav, NavLink, NavMenu, Tabs, MiddleTab } from "./NavbarElements";

const NavbarWithBackgroundColor = styled(Nav)`
  background-color: #E0EAD1;
`;

const Navbar = () => {
  return (
    <>
      <NavbarWithBackgroundColor>
        <NavMenu>
          <Tabs>
            <NavLink to="/about" activeStyle={{ color: "#4d4dff" }}>
              Accounts and Trade
            </NavLink>
          </Tabs>
          <Tabs>
            <NavLink to="/contact" activeStyle={{ color: "#4d4dff" }}>
              Planning and Advice
            </NavLink>
          </Tabs>
          <MiddleTab>
            <NavLink to="/blogs" activeStyle={{ color: "#4d4dff" }}>
              Fidelity
            </NavLink>
          </MiddleTab>
          <Tabs>
            <NavLink to="/sign-up" activeStyle={{ color: "#4d4dff" }}>
              News and Research
            </NavLink>
          </Tabs>
          <Tabs>
            <NavLink to="/sign-up" activeStyle={{ color: "#4d4dff" }}>
              Product
            </NavLink>
          </Tabs>
        </NavMenu>
      </NavbarWithBackgroundColor>
    </>
  );
};

export default Navbar;
