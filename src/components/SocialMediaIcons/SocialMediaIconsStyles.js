import styled from "styled-components";

export const StyledOuterDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledInnerDiv = styled.div``;

export const StyledImg = styled.img`
  width: 25px;
  margin-left: 1rem;
  transition: all 0.1s ease-in-out;
  opacity: 0.5;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    opacity: 1;
  }

  @media (max-width: 1000px) {
    width: 22px;
  }
`;
