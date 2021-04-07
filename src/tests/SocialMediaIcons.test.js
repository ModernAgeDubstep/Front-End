import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import { findByTestAttr, checkProps } from "../tests/testUtils";
import { shallow } from "enzyme";

const defaultProps = {
  socials: {
    id: 1,
    artist_id: 12,
    artist_name: "some string",
    instagram: "some string",
    facebook: "some string",
    spotify: "some string",
    youtube: "some string",
    twitter: "some string",
  },
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SocialMediaIcons {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(SocialMediaIcons, defaultProps);
});

describe("when SocialMediaIcons component recieves props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(defaultProps);
  });
  test("renders with out errors", () => {
    const component = findByTestAttr(wrapper, "social-media-widget");
    expect(component.length).toBe(1);
    expect(component.length).toBeGreaterThan(0);
  });
  test("amount of widget which appears is equal to amount provided", () => {
    const trimmedProps = Object.keys(defaultProps.socials).splice(3, 7);
    const component = findByTestAttr(wrapper, "widget");
    expect(component.length).toBe(trimmedProps.length);
  });
});
describe("when SocialMediaIcons component does not recieve props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ socials: undefined });
  });
  test("does not render icon component", () => {
    const component = findByTestAttr(wrapper, "social-media-widget");
    expect(component.length).not.toBeGreaterThan(0);
    expect(component.length).toBe(0);
  });
});
