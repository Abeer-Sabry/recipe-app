import React, { useEffect } from "react";
// ---- REDUX ----//
import { useDispatch, useSelector } from "react-redux";
import { getGeneralRecipes } from "../../Redux/GeneralSlice/generalSlice";
// ---- STYLEY  --- //
import { CustomContainer } from "../../constants/constant";
import { Card, Gradient } from "./GeneralStyle";
// ---- PLUGINS --- //
import { Splide, SplideSlide } from "@splidejs/react-splide";

const General = () => {
  // Redux
  const { recipes } = useSelector(state => state.general);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeneralRecipes());
  }, [dispatch]);
  return (
    <CustomContainer>
      <Splide
        options={{
          width: "100%",
          gap: "1rem",
          arrows: false,
          perPage: 4,
          pagination: false,
          drag: "free",
        }}
      >
        {recipes.map(recipe => (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </CustomContainer>
  );
};

export default General;
