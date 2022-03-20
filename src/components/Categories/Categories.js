import React from "react";
// --- ICONS --- //
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
// ---- STYLE ---- //
import { List, Nav } from "./CategoriesStyle";
// ---- React-Router-dom ---- //
import { NavLink } from "react-router-dom";
// CONSTANTS
import { CustomContainer } from "../../constants/constant";

const Categories = () => {
  return (
    <CustomContainer>
      <List>
        <Nav to={"cuisine/italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </Nav>
        <Nav to={"cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </Nav>
        <Nav to={"cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </Nav>
        <Nav to={"cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </Nav>
      </List>
    </CustomContainer>
  );
};

export default Categories;
