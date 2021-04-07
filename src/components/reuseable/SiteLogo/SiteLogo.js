import React from "react";

// Mad Logo:
import madLogo from "../../../assets/mad-logo.png";

// Styles:
import { Box, SiteLogoContainer } from "./LogoStyles";

const SiteLogo = () => {
  return (
    <SiteLogoContainer>
      <Box src={madLogo} alt="Mad Logo" data-test="site-logo" />
    </SiteLogoContainer>
  );
};

export default SiteLogo;
