import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-bottom: 50px;
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
  }
`;
