import styled from "styled-components";

// color pallete:
import colors from "../../helpers/colors";

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 12rem;
  justify-content: space-evenly;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;

  @media (max-width: 1013px) {
    height: 8rem;
  }
  @media (max-width: 829px) {
    width: 40%;
    height: 7rem;
    margin: 1rem 1rem 1rem 1rem;
  }
  @media (max-width: 527px) {
    width: 70%;
    height: 10rem;
  }
  @media (max-width: 377px) {
    width: 80%;
    height: 9rem;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  min-width: 100%;
  border-radius: 5px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FrontOfCard = styled.div`
  position: absolute;
  min-width: 100%;
  border-radius: 5px;
  backface-visibility: hidden;
  overflow: hidden;
  background: ${colors.accent};
  height: 10rem;

  @media (max-width: 1013px) {
    height: 8rem;
  }
  @media (max-width: 829px) {
    height: 8rem;
  }
  @media (max-width: 527px) {
    height: 10rem;
  }
  @media (max-width: 377px) {
    height: 9rem;
  }
`;

export const BackOfCard = styled.div`
  position: absolute;
  min-width: 100%;
  height: 10rem;
  border-radius: 5px;
  backface-visibility: hidden;
  overflow: hidden;
  background: ${colors.accent};
  color: ${colors.highlight};
  text-align: center;
  transform: rotateY(180deg);

  @media (max-width: 1013px) {
    height: 8rem;
  }
  @media (max-width: 829px) {
    height: 8rem;
  }
  @media (max-width: 527px) {
    height: 10rem;
  }
  @media (max-width: 377px) {
    height: 9rem;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArtistName = styled.h3`
  font-size: 2rem;
  color: white;

  @media (max-width: 1013px) {
    font-size: 1.4rem;
  }
  @media (max-width: 829px) {
  }
  @media (max-width: 527px) {
  }
  @media (max-width: 377px) {
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const ATag = styled.a`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1013px) {
    font-size: 0.9rem;
  }
`;
