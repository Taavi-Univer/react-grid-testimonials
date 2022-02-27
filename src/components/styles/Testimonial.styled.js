import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: 130px 150px;
  background-repeat: no-repeat;
  background-position: top right 90px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 13px;
  padding: 3em;
  border-radius: 10px;
  margin-bottom: 2em;
  grid-column: ${(props) => props.gridCol};
  grid-row: ${(props) => props.gridRow};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  border: 3px solid ${(props) => props.bordColor || props.bgColor};
  border-radius: 50%;
  margin-right: 1em;
`;

export const Name = styled.h3`
  margin-bottom: 0.1em;
`;

export const Verified = styled.p`
  opacity: 0.5;
`;

export const Review = styled.p`
  line-height: 1.6;
  opacity: 0.7;
`;
