import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 50px 0;
  h3 {
    text-transform: uppercase;
    font-weight: 800;
  }
`;
export const Card = styled.div`
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 9999;
    height: 30%;
    width: 80%;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
    font-size: 10px;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    /* Responsive */
    @media only screen and (max-width: 1145px) {
      font-size: 9px;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 2rem;
`;
