import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./testUtils";
import App from "../App";

/**
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<App />);
};

test("Renders with out errors or crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "App-Component");
  expect(component.length).toBe(1);
});
