import styled from "styled-components";
import colors from "../../helpers/colors";

export const LandingPageContainer = styled.div`
  background-color: ${colors.background};
`;

export const Header = styled.h1`
  color: ${colors.fontDefault};
  position: relative;
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
