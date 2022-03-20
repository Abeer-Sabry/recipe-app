import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
export const FormStyle = styled.form`
  width: 30%;
  text-align: center;
  position: relative;
  input {
    border: 1px solid gray;
    padding: 5px 45px;
    border-radius: 10px;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;
