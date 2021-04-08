import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtists } from '../../state/actions';
import { sliderArr } from "../../Data/sliderArray";

// Artist Photos:
import { data } from "../../Data/Data.js";

// Sub Components:
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import Carousel from "../reuseable/carousel/Carousel";
import FlipCard from "./FlipCard";

import {
  LandingPageContainer,
  Header,
  CardContainer,
} from "./LandingPageStyles";

const LandingPage = () => {
  const artistData = useSelector(state => state.artistData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchArtists(dispatch)
  }, []);

  return (
    <LandingPageContainer>
      <Carousel sliderArr={sliderArr} />
      {data.madSocials !== undefined ? (
        <SocialMediaIcons socials={data.madSocials} />
      ) : null}
      <Header data-test="landing-header">Artists</Header>
      <CardContainer>
        {artistData.map((artist) => {
          return <FlipCard key={artist.id} artist={artist} />;
        })}
      </CardContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
