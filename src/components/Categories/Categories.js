import React from "react";
// --- ICONS --- //
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
// ---- STYLE ---- //
import { List, Nav, DivList } from "./CategoriesStyle";
// CONSTANTS
import { CustomContainer } from "../../constants/constant";

const Categories = () => {
  return (
    <CustomContainer>
      <DivList>
        <List>
          <Nav to={"/"}>
            <IoHome />
            <h4>home</h4>
          </Nav>
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
      </DivList>
    </CustomContainer>
  );
};

export default Categories;
