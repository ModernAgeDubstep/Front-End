import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// sub components:
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

// Styled Components:
import {
  Container,
  CardContainer,
  FrontOfCard,
  BackOfCard,
  Photo,
  NameContainer,
  ArtistName,
  PhotoContainer,
  ATag,
} from "./FlipCardStyles.js";

const FlipCard = ({ artist }) => {
  let history = useHistory();

  const handleClick = (name, id) => {
    history.push(`/site/artist/${name}/${id}`);
  };

  return (
    <Container data-test="card-container">
      <CardContainer data-test="the-card">
        <FrontOfCard data-test="front-of-card">
          <PhotoContainer>
            <Photo
              className="artist-photo"
              src={artist.artist_photo}
              alt={`${artist.artist_name}`}
            />
          </PhotoContainer>
          <NameContainer>Test</NameContainer>
        </FrontOfCard>
        <BackOfCard data-test="back-of-card" className="back-of-card">
          <ArtistName>{artist.artist_name}</ArtistName>
          <SocialMediaIcons socials={artist} />
          <ATag onClick={() => handleClick(artist.artist_name, artist.id)}>
            View Artist Bio &amp; Releases
          </ATag>
        </BackOfCard>
      </CardContainer>
    </Container>
  );
};

FlipCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number,
    artist_id: PropTypes.number,
    artist_name: PropTypes.string,
    artist_photo: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    spotify: PropTypes.string,
    youtube: PropTypes.string,
    twitter: PropTypes.string,
  }),
};

export default FlipCard;
