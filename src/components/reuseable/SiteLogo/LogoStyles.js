import styled from "styled-components";

export const Box = styled.img`
  width: 120px;
  @media (max-width: 600px) {
    width: 90px;
  }
`;

export const ShopLogoContainer = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 0.5rem;
  width: 100px;
  z-index: 1;
  transition: all 0.1s ease-in-out;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    cursor: pointer;
  }

  @media (max-width: 1013px) {
    top: 22rem;
  }
  @media (max-width: 405px) {
    left: 1.5rem;
  }
`;

export const SiteLogoContainer = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 0.5rem;
  width: 100px;
  z-index: 1;

  @media (max-width: 1013px) {
    top: 22rem;
  }
  @media (max-width: 405px) {
    left: 1.5rem;
  }
`;
