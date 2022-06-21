import React, { useEffect } from "react";
// ---REACT-ROUTER-DOM --- //
import { useParams, Link } from "react-router-dom";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery } from "../../Redux/SearchSlice/SearchSlice";
// ---- STYLE ---- //
import { Grid, Card } from "./SearchedStyle";
import { CustomContainer, orange } from "../../constants/constant";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const Searched = () => {
  // Redux //
  const { Queries, loading } = useSelector(state => state.search);
  const dispatch = useDispatch();
  // react-router-dom
  const params = useParams();
  useEffect(() => {
    dispatch(getSearchQuery(params.search));
  }, [dispatch, params.search]);
  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <CustomContainer>
          <h3>
            that's our{" "}
            <span style={{ color: ` ${orange} `, textTransform: "capitalize" }}>
              {params.search}
            </span>{" "}
            picks
          </h3>

          <Grid>
            {Queries.map(Query => (
              <Link key={Query.id} to="">
                <Card>
                  <img src={Query.image} alt={Query.title} />
                  <p>{Query.title}</p>
                </Card>
              </Link>
            ))}
          </Grid>
        </CustomContainer>
      )}
    </>
  );
};

export default Searched;
