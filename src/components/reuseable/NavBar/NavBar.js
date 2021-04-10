import React, { useState } from "react";
import PropTypes from "prop-types";

// Material UI Components
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// colors:
import colors from "../../../helpers/colors";

const SiteNavBar = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      square
      data-test="Site-Nav-Bar"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors.accent,
      }}
    >
      <Tabs
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="active tabs"
        style={{ color: "white" }}
      >
        {props.tabNames.map((tabName) => {
          return props.type === "site" ? (
            <Tab
              key={tabName}
              data-test="nav-tab"
              label={tabName}
              onClick={() => props.siteHandleClick(tabName)}
            />
          ) : (
            <Tab 
              key={tabName} 
              data-test="nav-tab" 
              label={tabName} 
              onClick={() => props.shopHandleClick(tabName)}
            />
          );
        })}
      </Tabs>
    </Paper>
  );
};

SiteNavBar.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default SiteNavBar;
