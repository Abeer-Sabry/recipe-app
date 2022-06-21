import { NavLink } from "react-router-dom";
import styled from "styled-components";
// color //
import { yellow, orange } from "../../constants/constant";

export const DivList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  width: 45%;
  text-align: center;
  /* Responsive */
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 12px;
  }
`;
export const Nav = styled(NavLink)`
  display: inline-block;
  width: 70px;
  height: 70px;
  background: linear-gradient(to top right, ${orange} 20%, ${yellow} 80%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  /* responsive */
  @media only screen and (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
  svg {
    color: white;
    font-size: 1.5em;
    @media only screen and (max-width: 800px) {
      font-size: 1.2em;
    }
    @media only screen and (max-width: 400px) {
      font-size: 1em;
    }
  }
  h4 {
    color: white;
    font-size: 11px;
    /* Responsive */
    @media only screen and (max-width: 800px) {
      font-size: 9px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 8px;
    }
  }
  &.active {
    background-color: brown;
  }
`;
