import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ArtistBioSection = styled.section`
  display: flex;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;

  @media (max-width: 879px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const ImgWrapper = styled.div`
  width: 33%;

  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 75%;
  }
`;

export const ArtistImg = styled.img`
  max-width: 100%;
`;

export const BioWrapper = styled.div`
  padding: 0px 10px 10px 10px;
  width: 64%;

  @media (max-width: 1170px) {
    width: 63%;
  }
  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 75%;
    padding: 0px 5px 5px 5px;
  }
`;

export const ArtistName = styled.h2`
  color: white;
  margin: 0px;
  @media (max-width: 879px) {
    display: flex;
    align-self: center;
  }
`;

export const ArtistBio = styled.p`
  color: white;
  font-size: 14px;

  @media (max-width: 1017px) {
    font-size: 10px;
  }
  @media (max-width: 879px) {
    text-align: center;
  }
`;

export const ReleaseSection = styled.section`
  width: 90%;
  display: flex;
  align-self: center;
  flex-direction: column;
  padding: .5rem;
`;

export const ReleaseContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem
`;

export const ReleaseHeader = styled.h2`
    display: flex;
    align-self: center;
    color: white;
    margin: 0px;
`;
