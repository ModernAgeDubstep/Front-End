import React from "react";
import { useHistory } from 'react-router-dom';

// Styled Components:
import {
  Container,
  Photo,
  PhotoContainer,
  ProductName
} from "./ShopCardStyles";

const ShopCard = ({ item }) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/shop/item/${id}`)
  }

  return (
      <Container onClick={() => handleClick(item.id)}>
        <PhotoContainer>
          <Photo src={item.images[0]} alt={`${item.name}`} />
          <ProductName>{item.name}</ProductName>
        </PhotoContainer>
      </Container>
  );
};

// ShopCard.propTypes = {};

export default ShopCard;
