import React, { useEffect } from "react";
// ---- REDUX ----//
import { useDispatch, useSelector } from "react-redux";
import { getVeggie } from "../../Redux/VeggieSlice/VeggieSlice";
// ---- STYLE --- //
import { Card, Gradient, Wrapper } from "./VeggieStyle";
// ---- PLUGINS --- //
import { Splide, SplideSlide } from "@splidejs/react-splide";
// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";

const Veggie = () => {
  // Redux
  const { Veggies } = useSelector(state => state.Veggie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVeggie());
  }, [dispatch]);
  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          width: "100%",
          gap: "1rem",
          arrows: false,
          perPage: 3,
          pagination: false,
          drag: "free",
        }}
      >
        {Veggies.map(Veggie => (
          <SplideSlide key={Veggie.id}>
            <Link to={`recipe/${Veggie.id}`}>
              <Card>
                <p>{Veggie.title}</p>
                <img src={Veggie.image} alt={Veggie.title} />
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
