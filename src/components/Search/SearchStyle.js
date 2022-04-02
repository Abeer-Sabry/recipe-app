import styled from "styled-components";
// color //
import { yellow } from "../../constants/constant";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormStyle = styled.form`
  width: 30%;
  text-align: center;
  position: relative;
  input {
    background-color: ${yellow};
    border: none;
    padding: 10px 45px;
    border-radius: 20px;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
