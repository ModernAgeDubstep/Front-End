import React from "react";
import { useHistory } from "react-router-dom";

// Mad Logo:
import madLogo from "../../../assets/mad-logo.png";

// Styles:
import { Box, ShopLogoContainer } from "../SiteLogo/LogoStyles";

const SiteLogo = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/site/roster`);
  };
  return (
    <ShopLogoContainer>
      <Box
        src={madLogo}
        alt="Mad Logo"
        data-test="site-logo"
        onClick={handleClick}
      />
    </ShopLogoContainer>
  );
};

export default SiteLogo;
