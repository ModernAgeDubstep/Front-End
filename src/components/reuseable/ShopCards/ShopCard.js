import React from "react";

// Styled Components:
import {
  Container,
  Photo,
  PhotoContainer,
  ProductName
} from "./ShopCardStyles";

const ShopCard = ({ item }) => {
  return (
      <Container>
        <PhotoContainer>
          <Photo src={item.images[0]} alt={`${item.name}`} />
          <ProductName>{item.name}</ProductName>
        </PhotoContainer>
      </Container>
  );
};

// ShopCard.propTypes = {};

export default ShopCard;
