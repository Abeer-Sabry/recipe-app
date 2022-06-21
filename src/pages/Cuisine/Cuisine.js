import React, { useEffect } from "react";
// ---REACT-ROUTER-DOM --- //
import { useParams } from "react-router-dom";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getCuisine } from "../../Redux/CuisineSlice/CuisineSlice";
// ---- STYLE ---- //
import { Grid, Card } from "./CuisineStyle";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants/constant";

const Cuisine = () => {
  // Redux //
  const { cuisines } = useSelector(state => state.cuisine);
  const dispatch = useDispatch();
  // react-router-dom
  const params = useParams();

  useEffect(() => {
    dispatch(getCuisine(params.name));
  }, [dispatch, params.name]);
  return (
    <CustomContainer>
      <h3>that's our {params.name} picks</h3>

      <Grid>
        {cuisines.map(cuisine => (
          <Card key={cuisine.id}>
            <img src={cuisine.image} alt={cuisine.title} />
            <p>{cuisine.title}</p>
          </Card>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Cuisine;
