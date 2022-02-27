import React from "react";

import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/App.styled";

import Testimonial from "./components/Testimonial";
import Data from "./Data";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    body: "hsl(210, 46%, 95%)",
  },
};

function App() {
  const [Daniel, Jonathan, Jeanette, Kira, Patrick] = Data;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Testimonial
            bgImage="images/bg-pattern-quotation.svg"
            gridCol="1 / 3"
            gridRow="1 / 2"
            bgColor="hsl(263, 55%, 52%)"
            color="white"
            img={Daniel.img}
            bordColor="hsl(263, 35%, 62%)"
            name={Daniel.name}
            verified={Daniel.verified}
            text={Daniel.text}
            review={Daniel.review}
          />
          <Testimonial
            gridCol="3 / 4"
            gridRow="1 / 2"
            bgColor="hsl(217, 19%, 35%)"
            color="white"
            img={Jonathan.img}
            name={Jonathan.name}
            verified={Jonathan.verified}
            text={Jonathan.text}
            review={Jonathan.review}
          />
          <Testimonial
            gridCol="1 / 2"
            gridRow="2 / 3"
            bgColor="hsl(0, 0%, 100%)"
            img={Jeanette.img}
            name={Jeanette.name}
            verified={Jeanette.verified}
            text={Jeanette.text}
            review={Jeanette.review}
          />
          <Testimonial
            gridCol="2 / 4"
            gridRow="2 / 3"
            bgColor="hsl(219, 29%, 14%)"
            color="white"
            img={Patrick.img}
            bordColor="hsl(263, 35%, 62%)"
            name={Patrick.name}
            verified={Patrick.verified}
            text={Patrick.text}
            review={Patrick.review}
          />
          <Testimonial
            gridCol="4 / 5"
            gridRow="1 / 3"
            bgColor="hsl(0, 0%, 100%)"
            img={Kira.img}
            name={Kira.name}
            verified={Kira.verified}
            text={Kira.text}
            review={Kira.review}
          />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
