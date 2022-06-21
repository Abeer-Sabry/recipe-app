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
// COMPONENTS
import CustomSpinner from "../CustomSpinner/CustomSpinner";

const General = () => {
  // Redux
  const { recipes, loading } = useSelector(state => state.general);
  console.log("recipes", recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeneralRecipes());
  }, [dispatch]);
  return (
    <Wrapper>
      <h3>General Picks</h3>
      {loading ? (
        <CustomSpinner />
      ) : (
        <Splide
          options={{
            width: "100%",
            gap: "1rem",
            arrows: false,
            perPage: 4,
            pagination: false,
            drag: "free",
            breakpoints: {
              1120: {
                perPage: 3,
              },
              720: {
                perPage: 2,
              },
              510: {
                perPage: 1,
              },
            },
          }}
          // responsive={responsive}
        >
          {recipes.map(recipe => (
            <SplideSlide key={recipe.id}>
              <Link to={`recipe/${recipe.id}`}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </Wrapper>
  );
};

export default General;
