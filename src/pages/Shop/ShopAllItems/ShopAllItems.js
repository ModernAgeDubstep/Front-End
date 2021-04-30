import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../state/actions";

// Data:
import { data } from "../../../Data/Data";
import { sliderArr } from "../../../Data/sliderArray";

// sub components:
import Carousel from "../../../components/reuseable/carousel/Carousel";
import SocialMediaIcons from "../../../components/SocialMediaIcons/SocialMediaIcons";
import ShopCard from "../../../components/reuseable/ShopCards/ShopCard";

// styled components:
import {
  Container,
  HeaderDiv,
  Header,
  ItemSection,
  LoadingHeader,
} from "./AllItemsStyles";

export const ShopAllItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProducts(dispatch);
  }, [dispatch]);

  // console.log(products);

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
        {products !== undefined ? (
          products.map((item) => {
            return <ShopCard key={item.id} item={item} />;
          })
        ) : (
          <LoadingHeader>Loading...</LoadingHeader>
        )}
      </ItemSection>
    </Container>
  );
};
