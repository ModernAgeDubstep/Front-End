import styled from "styled-components";

// Styled-Components:
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  transition: 1s;
  overflow: hidden;
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 350px;
  transition: 1s;
  overflow: hidden;
`;

export const LeftBtn = styled.img`
  background: none;
  position: absolute;
  height: 2rem;
  width: 2rem;
  left: 100;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0.5;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    opacity: 1;
  }
`;

export const RightBtn = styled.img`
  background: none;
  position: absolute;
  height: 2rem;
  width: 2rem;
  right: 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0.5;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    opacity: 1;
  }
`;
