import React from "react";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import { findByTestAttr } from "./testUtils";
import { shallow } from "enzyme";

const defaultProps = {
  location: {
    pathname: '/site/roster'
  }
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

 const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SiteWrapper {...setupProps} />);
};


describe("expect Landing Page to render its self and its Sub Components without error", () => {
  let component;

  beforeEach(() => {
    component = setup();
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
