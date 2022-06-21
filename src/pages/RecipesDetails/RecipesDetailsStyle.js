import styled from "styled-components";
import { orange, yellow } from "../../constants/constant";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 60px;
  padding-bottom: 50px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
  }
  p {
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 600;
    color: black;
  }
`;
export const Info = styled.div`
  button {
    background-color: ${yellow};
    padding: 5px 13px;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    margin-bottom: 20px;
    color: darkslategray;
    :nth-child(1) {
      margin-right: 10px;
    }
    &.active {
      background: linear-gradient(to bottom right, ${yellow}, ${orange});
      color: white;
    }
  }

  p {
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 15px;
    @media only screen and (max-width: 920px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 11px;
    }
  }
  ul li {
    margin-bottom: 5px;
    font-size: 13px;
  }
  /* Responsive */
  @media only screen and (max-width: 700px) {
    margin-top: 30px;
  }
`;
