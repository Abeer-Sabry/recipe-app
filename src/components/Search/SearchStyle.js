import styled from "styled-components";
// color //
import { yellow } from "../../constants/constant";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormStyle = styled.form`
  width: 100%;
  text-align: center;
  position: relative;
  input {
    background-color: ${yellow};
    border: none;
    padding: 13px 45px;
    border-radius: 18px;
    color: darkslategray;
    width: 40%;
    padding-left: 50px;
    &:focus {
      border: none;
    }
    /* Responsive */
    @media only screen and (max-width: 1124px) {
      width: 50%;
    }
    @media only screen and (max-width: 970px) {
      width: 60%;
    }
    @media only screen and (max-width: 700px) {
      width: 65%;
    }
    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    left: 31%;
    transform: translate(100%, -50%);
    color: white;
    /* Responsive */
    @media only screen and (max-width: 1124px) {
      left: 26%;
    }
    @media only screen and (max-width: 970px) {
      left: 23%;
    }
    @media only screen and (max-width: 700px) {
      left: 20%;
    }
    @media only screen and (max-width: 600px) {
      left: 12%;
    }
  }
`;
