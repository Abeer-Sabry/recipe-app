import React, { useEffect, useState } from "react";
// ---- Redux ---- //
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/fetchDetails/fetchDetailsSlice";
// ---- REACT-ROUTER-DOM ---- //
import { useParams } from "react-router-dom";
// ---- STYLE ---- //
import { Card, Grid, Info } from "./RecipesDetailsStyle";
import { CustomContainer } from "../../constants/constant";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const RecipesDetails = () => {
  // Redux
  const { recipe, loading } = useSelector(state => state.details);
  const dispatch = useDispatch();
  // Router-Dom
  const params = useParams();
  // useState
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <CustomContainer>
          <Grid>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Card>
            <Info>
              <button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
              <button
                className={`${activeTab === "ingredients" ? "active" : ""}`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              {activeTab === "instructions" && (
                <>
                  <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                  <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                </>
              )}

              {activeTab === "ingredients" && (
                <ul>
                  {recipe.extendedIngredients.map(ingredient => {
                    return <li key={ingredient.id}>{ingredient.original}</li>;
                  })}
                </ul>
              )}
            </Info>
          </Grid>
        </CustomContainer>
      )}
    </>
  );
};

export default RecipesDetails;
