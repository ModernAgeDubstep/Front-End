import React from "react";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import { findByTestAttr } from "./testUtils";
import { shallow } from "enzyme";

describe("expect Landing Page to render its self and its Sub Components without error", () => {
  let component;

  beforeEach(() => {
    component = shallow(<SiteWrapper />);
  });

  test("Sub Component SiteLogo renders without errors", () => {
    const SiteLogo = findByTestAttr(component, "site-logo");
    expect(SiteLogo.length).toBe(1);
  });

  test("Sub Component SiteNavBar renders without errors", () => {
    const SiteNavBarNode = findByTestAttr(component, "nav-bar-node");
    expect(SiteNavBarNode.length).toBe(1);
  });
});
