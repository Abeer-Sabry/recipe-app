import React, { useState } from "react";
// ---- REACT-ROUTER-DOM ---- //
import { useNavigate } from "react-router-dom";
// ---- STYLE ---- //
import { FormStyle, Wrapper } from "./SearchStyle";
// ---- ICONS ---- //
import { FaSearch } from "react-icons/fa";

const Search = () => {
  // STATES
  const [value, setValue] = useState("");
  // Router-Dom
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate("/searched/" + value);
    setValue("");
  };
  return (
    <Wrapper>
      <FormStyle onSubmit={submitHandler}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <FaSearch />
      </FormStyle>
    </Wrapper>
  );
};

export default Search;
