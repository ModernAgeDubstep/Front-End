import styled from "styled-components";

// color pallete:
import colors from "../../../helpers/colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  height: 20rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;

  @media (max-width: 1250px) {
    height: 15rem;
  }
  @media (max-width: 1000px) {
    height: 14rem;
  }
  @media (max-width: 871px) {
    height: 12rem;
  }
  @media (max-width: 715px) {
    width: 40%;
    height: 11rem;
  }
  @media (max-width: 511px) {
    width: 70%;
    height: 14rem;
  }
  @media (max-width: 363px) {
    height: 15rem;
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
  height: 100%;
  width: auto;
  border-radius: 5px;
  backface-visibility: hidden;
  overflow: hidden;
`;

export const BackOfCard = styled.div`
  position: absolute;
  min-width: 100%;
  border-radius: 5px;
  backface-visibility: hidden;
  overflow: hidden;
  background: ${colors.accent};
  color: ${colors.highlight};
  text-align: center;
  transform: rotateY(180deg);
  height: 100%;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;

export const AlbumName = styled.h3`
  font-size: 2rem;
  color: white;

  // @media (max-width: 1013px) {
  //   font-size: 1.4rem;
  // }
  // @media (max-width: 829px) {
  // }
  // @media (max-width: 527px) {
  // }
  // @media (max-width: 377px) {
  // }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 25rem;
`;

export const ATag = styled.a`
  font-size: 18px;
  color: #${colors.primary};
  transition: all 0.1s ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    color: white;
    cursor: pointer;
  }

  @media (max-width: 1013px) {
    font-size: 0.9rem;
  }
`;
