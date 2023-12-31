import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold; /* Set font weight to bold */
`;

export const Tabs = styled.div`
  content: fit;
  background-color: #6d933e;
  text-decoration: none;
  margin: 2%; /* Adjust margin to increase space between tabs (2% adds 2% of the available width) */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 45px;
  width: auto%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: #e1e6e1;
  }
`;

export const MiddleTab = styled(Tabs)`
  background-color: #6D933E;
  color: #FFFFFF;
  padding: 0 2.5rem; /* Increase padding for the middle tab */
  font-size: 1.2rem;
  height: 65px;
  width: 20%;
  margin: 2%; /* Adjust margin for the middle tab */
  border-radius: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  flex: 0 0 auto;
  &:hover {
    background-color: #e1e6e1;
  }
}`;

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
  @media screen and (max-width: 768px) {
    display: none;
  }
  background-color: #e0ead1;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #6d933e;
  color: #ffffff;
  padding: 0 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: 65px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e1e6e1;
  }
`;

export const TesterDivs = styled.div`
  content: fit;
  background-color: Yellow;
`;
