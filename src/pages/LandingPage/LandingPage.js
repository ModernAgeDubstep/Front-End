import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtists } from "../../state/actions";
import { sliderArr } from "../../Data/sliderArray";

// Artist Photos:
import { data } from "../../Data/Data.js";

// Sub Components:
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import Carousel from "../../components/reuseable/carousel/Carousel";
import FlipCard from "../../components/FlipCard/FlipCard";

import {
  LandingPageContainer,
  Header,
  CardContainer,
} from "./LandingPageStyles";

const LandingPage = () => {
  const artistData = useSelector((state) => state.artistData);
  const dispatch = useDispatch();
  // console.log(artistData)
  useEffect(() => {
    fetchArtists(dispatch);
  }, [dispatch]);

  return (
    <LandingPageContainer>
      <Carousel sliderArr={sliderArr} />
      {data.madSocials !== undefined ? (
        <SocialMediaIcons socials={data.madSocials} />
      ) : null}
      <Header data-test="landing-page-header">Artists</Header>
      <CardContainer>
        {artistData.map((artist) => {
          return <FlipCard key={artist.id} artist={artist} />;
        })}
      </CardContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
