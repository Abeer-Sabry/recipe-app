import React, { useEffect } from "react";
// ---- REDUX ----//
import { useDispatch, useSelector } from "react-redux";
import { getGeneralRecipes } from "../../Redux/GeneralSlice/generalSlice";
// ---- STYLEY  --- //
import { Wrapper, Card, Gradient } from "./GeneralStyle";
// ---- PLUGINS --- //
import { Splide, SplideSlide } from "@splidejs/react-splide";
// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";

const General = () => {
  // Redux
  const { recipes } = useSelector(state => state.general);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeneralRecipes());
  }, [dispatch]);
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
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
            <Link to={`recipe/${recipe.title}`}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default General;
