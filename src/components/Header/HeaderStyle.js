import styled from "styled-components";
import cover from "../../imgs/photo.png";
import responsive1 from "../../imgs/responsive1.png";
import responsive2 from "../../imgs/responsive2.png";

export const Wrapper = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 720px;
  background-position: center;
  padding-left: 60px;
  padding-top: 10px;
  /* Responsive */
  @media only screen and (max-width: 991px) {
    background-image: url(${responsive1});
  }
  @media only screen and (max-width: 750px) {
    background-image: url(${responsive2});
    background-position: initial;
    height: 590px;
  }
  @media only screen and (max-width: 750px) {
    height: 530px;
  }
  @media only screen and (max-width: 600px) {
    height: 490px;
    padding-left: 40px;
  }
  @media only screen and (max-width: 535px) {
    height: 400px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 440px) {
    height: 320px;
  }
  @media only screen and (max-width: 401px) {
    height: 290px;
  }
  @media only screen and (max-width: 370px) {
    height: 260px;
  }
  @media only screen and (max-width: 331px) {
    height: 230px;
  }

  h2 {
    font-family: "Pacifico", cursive;
    text-transform: capitalize;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    svg {
      font-size: 20px;
      margin-right: 2px;
    }
    /* Responsive */
    @media only screen and (max-width: 535px) {
      font-size: 17px;
    }
    @media only screen and (max-width: 401px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 331px) {
      font-size: 10px;
      svg {
        font-size: 15px;
      }
    }
  }
`;
