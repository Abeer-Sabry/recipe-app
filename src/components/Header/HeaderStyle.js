import styled from "styled-components";
import cover from "../../imgs/photo.png";

export const Wrapper = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 720px;
  background-position: center;
  padding-left: 60px;
  padding-top: 10px;

  h2 {
    font-family: "Pacifico", cursive;
    text-transform: capitalize;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    svg {
      font-size: 20px;
      margin-right: 2px;
    }
  }
`;
