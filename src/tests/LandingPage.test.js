import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { findByTestAttr } from "./testUtils";
import { shallow } from "enzyme";

describe("expect Landing Page to render its self and its Sub Components without error", () => {
  let component;

  beforeEach(() => {
    component = shallow(<LandingPage />);
  });
  test("LandingPage renders without error", () => {
    expect(component.length).toBe(1);
  });

  test("Landing Page renders an h1 with text that is not empty", () => {
    const h1 = findByTestAttr(component, "landing-header");
    expect(h1.length).toBe(1);
    expect(h1.text().length).not.toBe(0);
    expect(h1.text()).toBe("Artists");
  });
});
