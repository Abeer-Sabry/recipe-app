import React, { useEffect } from "react";
// ---REACT-ROUTER-DOM --- //
import { useParams, Link } from "react-router-dom";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getCuisine } from "../../Redux/CuisineSlice/CuisineSlice";
// ---- STYLE ---- //
import { Grid, Card, Gradient } from "./CuisineStyle";
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
            <p>{cuisine.title}</p>
            <img src={cuisine.image} alt={cuisine.title} />
            <Gradient />
          </Card>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Cuisine;
