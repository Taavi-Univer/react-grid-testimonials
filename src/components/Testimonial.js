import React from "react";

import {
  Container,
  Header,
  Image,
  Name,
  Verified,
  Review,
} from "./styles/Testimonial.styled";

function Testimonial({
  bgImage,
  bgColor,
  color,
  gridCol,
  gridRow,
  img,
  name,
  verified,
  text,
  review,
  bordColor,
}) {
  return (
    <Container
      bgImage={bgImage}
      bgColor={bgColor}
      color={color}
      gridCol={gridCol}
      gridRow={gridRow}
    >
      <Header>
        <Image src={img} alt={name} bordColor={bordColor} bgColor={bgColor} />

        <div>
          <Name>{name}</Name>
          <Verified>{verified}</Verified>
        </div>
      </Header>
      <h2>{text}</h2>
      <Review>"{review}"</Review>
    </Container>
  );
}

export default Testimonial;
