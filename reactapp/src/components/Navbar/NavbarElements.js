import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: center;
  padding: 0.2rem 2%;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tabs = styled.div`
  background-color: #6D933E;
  text-decoration: none;
  padding: 0 2.0rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8.5%;
  flex: 0 0 auto;
`;

export const MiddleTab = styled(Tabs)`
  background-color: #6D933E;
  padding: 0 3rem;
  font-size: 1.2rem;
  height: 65px;
  margin: 8%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 0 0 auto; /* Prevent the middle tab from shrinking */
`;

export const Bars = styled(FaBars)`
  display: none;
  color: red;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`