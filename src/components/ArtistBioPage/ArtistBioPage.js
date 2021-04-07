import React, { useState, useEffect } from "react";
import axios from "axios";

// Artist Photos:
import { data } from "../../Data/Data";

// Sub Components:
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import ReleaseCard from "./ReleaseCard/ReleaseCard";

// Styled Components:
import {
  Container,
  ArtistBioSection,
  ImgWrapper,
  ArtistImg,
  BioWrapper,
  ArtistName,
  ArtistBio,
  ReleaseSection,
  ReleaseHeader,
  ReleaseContainer
} from "./ArtistBioPageStyles";

const ArtistBioPage = (props) => {
  // Params needed for axios call:
  const artistName = props.match.params.artistName;
  const id = props.match.params.id;
  // State:
  const [artist, setArtist] = useState();
  const [releases, setReleases] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:5000/api/artists/${artistName}`),
        axios.get(`http://localhost:5000/api/releases/${id}`),
      ])
      .then(
        axios.spread((artistData, releaseData) => {
          setArtist(artistData.data.artistData[0]);
          // This code block adds a photo to each index for the album release.
          // Will refactor once I know how to use photo bucket tech
          let releasesArray = [];
          let index = 0;
          releaseData.data.releases.forEach(release => {
            const newRelease = {
              ...release,
              release_photo: data.releasePhotos[index]
            }
            if(index < 2){
              index++
            } else {
              index = 0
            }
            releasesArray.push(newRelease);
          })
          setReleases(releasesArray);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, [artistName, id]);

  return (
    <Container>
      <ArtistBioSection>
        <ImgWrapper>
          {data.artists.map((artist) => {
            if (artist.artist_name === artistName) {
              return (
                <ArtistImg
                  key={artist.artist_name}
                  src={artist.artist_photo}
                  alt={artistName}
                />
              )
            }
            return null
          })}
          {artist !== undefined ? <SocialMediaIcons socials={artist} /> : null}
        </ImgWrapper>
        <BioWrapper>
          <ArtistName>{artistName}</ArtistName>
          <ArtistBio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
          </ArtistBio>
        </BioWrapper>
      </ArtistBioSection>
      <ReleaseSection>
        <ReleaseHeader>Releases</ReleaseHeader>
        <ReleaseContainer>  
          {releases !== undefined ? 
          releases.map((release) => {
            return <ReleaseCard key={release.id} releaseData={release} />;
          })
          : <h4>Loading...</h4>
          }
        </ReleaseContainer>
      </ReleaseSection>
    </Container>
  );
};

export default ArtistBioPage;
