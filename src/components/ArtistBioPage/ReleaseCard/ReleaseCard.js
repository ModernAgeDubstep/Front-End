import React from "react";

// Styled Components:
import {
  Container,
  CardContainer,
  FrontOfCard,
  BackOfCard,
  Photo,
  AlbumName,
  PhotoContainer,
  ATag,
} from "./ReleaseCardStyles.js";

const FlipCard = ({ releaseData }) => {

  return (
    <Container data-test="card-container">
      <CardContainer data-test="the-card">
        <FrontOfCard data-test="front-of-card">
          <PhotoContainer>
            <Photo src={releaseData.release_photo} alt={`${releaseData.release_name}`} />
          </PhotoContainer>
          {/* <NameContainer>Test</NameContainer> */}
        </FrontOfCard>
        <BackOfCard data-test="back-of-card" className="back-of-card">
          <AlbumName>{releaseData.release_name}</AlbumName>
          <ATag href="https://ffm.to/machineep" target='_blank' rel="noopener noreferrer">
            View Release
          </ATag>
        </BackOfCard>
      </CardContainer>
    </Container>
  );
};

// FlipCard.propTypes = {};

export default FlipCard;