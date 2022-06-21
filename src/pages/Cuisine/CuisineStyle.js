import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-bottom: 50px;
  /* Responsive */
  @media only screen and (max-width: 891px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 681px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 481px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  overflow: hidden;
  margin-bottom: 15px;

  img {
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: 12px;
  }
  p {
    font-size: 11px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkslategray;
    /* Responsive */
    @media only screen and (max-width: 891px) {
      font-size: 10px;
    }
    @media only screen and (max-width: 481px) {
      font-size: 11px;
    }
  }
`;
