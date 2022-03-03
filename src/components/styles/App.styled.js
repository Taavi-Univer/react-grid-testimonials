import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  margin: 6rem auto;
  font-family: "Barlow Semi Condensed", sans-serif;

  @media (min-width: 1440px) {
    /* height: 500px; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(1fr, auto);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 2em;
  }
`;
