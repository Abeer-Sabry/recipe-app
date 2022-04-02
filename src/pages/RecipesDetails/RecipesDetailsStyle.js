import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-bottom: 50px;
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
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 600;
    color: black;
  }
  a {
    text-decoration: none;
  }
`;
