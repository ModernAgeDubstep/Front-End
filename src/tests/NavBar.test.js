import { shallow } from "enzyme";
import NavBar from "../components/reuseable/NavBar/NavBar";
import { checkProps, findByTestAttr } from "./testUtils";

const defaultProps = {
  tabNames: ["Roster", "Shop", "Videos", "Contact"],
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NavBar {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(NavBar, defaultProps);
});

describe("if a Nav Bar Tab element is created", () => {
  let wrapper;
  let tabNodes;
  let tabNames;

  beforeEach(() => {
    wrapper = setup(tabNames);
    tabNodes = findByTestAttr(wrapper, "nav-tab");
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "Site-Nav-Bar");
    expect(component.length).toBe(1);
  });

  test("expect tab element to exist", () => {
    expect(tabNodes.length).not.toBe(0);
  });

  test("expect tab element to be 1 or greater", () => {
    expect(tabNodes.length).toBeGreaterThanOrEqual(1);
  });
});
