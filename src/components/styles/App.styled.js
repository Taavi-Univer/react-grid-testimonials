import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  font-family: "Barlow Semi Condensed", sans-serif;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2em;
  }
`;
