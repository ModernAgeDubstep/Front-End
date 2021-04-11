import React from "react";
import { useHistory } from "react-router-dom";

// components:
import NavBar from "../reuseable/NavBar/NavBar";
import SiteLogo from "../reuseable/SiteLogo/SiteLogo";

// Tab Data:
import { siteTabNames } from "../../Data/Data";

const SiteWrapper = (props) => {
  let history = useHistory();

  const handleClick = (location) => {
    const newLocation = location.toLowerCase();
    location === "Shop"
      ? history.push(`/${newLocation}/allitems`)
      : history.push(`/site/${newLocation}`);
  };

  
  return (
    <div>
      {props.location.pathname === "/site/roster" ? (
        <SiteLogo data-test="site-logo" />
      ) : null}
      <NavBar
        data-test="nav-bar-node"
        tabNames={siteTabNames}
        type="site"
        siteHandleClick={handleClick}
      />
    </div>
  );
};

export default SiteWrapper;
