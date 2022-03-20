import React, { useEffect } from "react";
// ---REACT-ROUTER-DOM --- //
import { useParams, Link } from "react-router-dom";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery } from "../../Redux/SearchSlice/SearchSlice";
// ---- STYLE ---- //
import { Grid, Card, Gradient } from "./SearchedStyle";
import { CustomContainer } from "../../constants/constant";

const Searched = () => {
  // Redux //
  const { Queries } = useSelector(state => state.search);
  const dispatch = useDispatch();
  // react-router-dom
  const params = useParams();
  useEffect(() => {
    dispatch(getSearchQuery(params.search));
  }, [dispatch, params.search]);
  return (
    <CustomContainer>
      <h3>that's our {params.name} picks</h3>

      <Grid>
        {Queries.map(Query => (
          <Link to={`cuisine/${Query.id}`}>
            <Card key={Query.id}>
              <p>{Query.title}</p>
              <img src={Query.image} alt={Query.title} />
              <Gradient />
            </Card>
          </Link>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Searched;
