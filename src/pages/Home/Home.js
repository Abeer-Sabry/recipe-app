import React from "react";
// ---- COMPONENTS ---- //
import General from "../../components/General/General";
import Veggie from "../../components/Veggie/Veggie";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants/constant";

const Home = () => {
  return (
    <>
      <CustomContainer>
        <Veggie />
        <General />
      </CustomContainer>
    </>
  );
};

export default Home;
