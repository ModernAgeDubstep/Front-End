import React from "react";
import { useHistory } from "react-router-dom";

// NAV:
import NavBar from "../reuseable/NavBar/NavBar";
import ShopLogo from "../reuseable/ShopLogo/ShopLogo";

// Tab Data:
import { shopTabNames } from "../../Data/Data";

const ShopWrapper = () => {
  let history = useHistory();

  const handleClick = (location) => {
    const newLocation = location.toLowerCase();
    newLocation === "all items"
      ? history.push("/shop/allitems")
      : history.push(`/shop/${newLocation}`);
  };

  return (
    <div>
      <ShopLogo />
      <NavBar
        data-test="nav-bar-node"
        tabNames={shopTabNames}
        type="shop"
        shopHandleClick={handleClick}
      />
    </div>
  );
};

export default ShopWrapper;
