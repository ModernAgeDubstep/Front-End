import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/artists/")
      .then((res) => {
        let artists = [];
        let index = 0;

        res.data.artists.forEach((artist) => {
          const newData = {
            ...artist,
            artist_photo: data.artists[index].artist_photo,
          };
          index++;
          artists.push(newData);
        });

        setArtistData(artists);
      })
      .catch((err) => {
        console.log(err);
      });
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
