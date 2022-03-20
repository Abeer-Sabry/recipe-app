import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.div`
  display: flex;
  justify-content: center;
`;
export const Nav = styled(NavLink)`
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: orange;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  svg {
    color: white;
    font-size: 1.5em;
  }
  h4 {
    color: white;
    font-size: 11px;
  }
  &.active {
    background-color: brown;
  }
`;
