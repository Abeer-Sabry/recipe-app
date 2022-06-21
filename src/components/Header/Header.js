import React from "react";
import { Wrapper } from "./HeaderStyle";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h2>
          <GiKnifeFork />
          tasty
        </h2>
      </Link>
    </Wrapper>
  );
};

export default Header;
