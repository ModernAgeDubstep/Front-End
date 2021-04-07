import React, { useEffect } from "react";
import { stripeAuth } from '../../../api/withAuth';

// Styled Components:
import {
  Container,
  CardContainer,
  FrontOfCard,
  BackOfCard,
  Photo,
  ItemName,
  PhotoContainer,
} from "./ShopCardStyles";

const ShopCard = ({ item }) => {

    useEffect(() => {
        // switch to axios.
        stripeAuth()
        .get(`http://localhost:5000/api/stripe/price/${item.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [item.id])
    
  return (
    <Container data-test="card-container">
      <CardContainer data-test="the-card">
        <FrontOfCard data-test="front-of-card">
          <PhotoContainer>
            <Photo src={item.images[0]} alt={`${item.name}`} />
          </PhotoContainer>
          {/* <NameContainer>Test</NameContainer> */}
        </FrontOfCard>
        <BackOfCard data-test="back-of-card" className="back-of-card">
          <ItemName>{item.name}</ItemName>
        </BackOfCard>
      </CardContainer>
    </Container>
  );
};

// ShopCard.propTypes = {};

export default ShopCard;