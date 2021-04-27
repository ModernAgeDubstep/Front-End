import styled from "styled-components";

// color pallete:
import colors from "../../../helpers/colors";

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1.5rem;
  transition: all 0.1s ease-in-out;
  opacity: 0.5;

  &:hover{
    transition-timing-function: ease-in;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: translateY(-3px);
    cursor: pointer;
    opacity: 1;
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: fill;
  overflow: hidden;
`;

export const ProductName = styled.p`
  color: white;
  margin: auto;
  font-size: 17px;
  margin-top: .5rem;
`;

