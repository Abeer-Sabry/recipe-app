import React, { useEffect } from "react";
// ---- Redux ---- //
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/fetchDetails/fetchDetailsSlice";
// ---- REACT-ROUTER-DOM ---- //
import { useParams } from "react-router-dom";
// ---- STYLE ---- //
import { Card, Grid } from "./RecipesDetailsStyle";
import { CustomContainer } from "../../constants/constant";

const RecipesDetails = () => {
  // Redux
  const { recipe } = useSelector(state => state.details);
  const dispatch = useDispatch();
  // Router-Dom
  const params = useParams();

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);
  return (
    <CustomContainer>
      <Grid>
        <Card>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
        </Card>
      </Grid>
    </CustomContainer>
  );
};

export default RecipesDetails;
