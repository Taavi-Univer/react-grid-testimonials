import styled from "styled-components";

export const Container = styled.div`
  margin: 2em;
  font-family: "Barlow Semi Condensed", sans-serif;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr, 1fr;
    gap: 2em;
  }
`;
