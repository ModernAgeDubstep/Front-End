import React from "react";
import ShopWrapper from "../components/ShopWrapper/ShopWrapper";
import { findByTestAttr } from "./testUtils";
import { shallow } from "enzyme";

test("", () => {
  const component = shallow(<ShopWrapper />);
  const SiteNavBarNode = findByTestAttr(component, "nav-bar-node");
  expect(SiteNavBarNode.length).toBe(1);
});
