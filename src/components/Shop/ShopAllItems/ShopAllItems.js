import React, { useState, useEffect } from "react";
import axios from 'axios';

// Data:
import { data } from '../../../Data/Data';
import { sliderArr } from '../../../Data/sliderArray';

// sub components:
import Carousel from '../../reuseable/carousel/Carousel';
import SocialMediaIcons from '../../SocialMediaIcons/SocialMediaIcons';
import ShopCard from '../../reuseable/ShopCards/ShopCard';

// styled components:
import {
  Container,
  HeaderDiv,
  Header,
  ItemSection,
  LoadingHeader
} from './AllItemsStyles';

export const ShopAllItems = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/stripe/products')
    .then(res => {
      setProducts(res.data.product.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(products)
  return (
  <Container>
    <Carousel sliderArr={sliderArr} />
    {data.madSocials !== undefined ? (
        <SocialMediaIcons socials={data.madSocials} />
      ) : null}
    <HeaderDiv>
      <Header>All Items</Header>
    </HeaderDiv>
    <ItemSection>
      {products !== undefined ? 
        products.map((item) => {
          return <ShopCard key={item.id} item={item} />;
        }):
        <LoadingHeader>Loading...</LoadingHeader>
      }
    </ItemSection>
  </Container>
)};
