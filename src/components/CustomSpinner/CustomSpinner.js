import React from "react";
// SPINNER
import { PropagateLoader } from "react-spinners";
import { orange } from "../../constants/constant";
import { FixedWrapper, MainDiv } from "./CustomSpinnerStyle";

const CustomSpinner = () => {
  return (
    <FixedWrapper>
      <MainDiv>
        <PropagateLoader color={`${orange}`} size={15} />
      </MainDiv>
    </FixedWrapper>
  );
};

export default CustomSpinner;
