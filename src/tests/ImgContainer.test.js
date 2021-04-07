import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "./testUtils";

// Components:
import ImgContainer from "../components/reuseable/carousel/ImgContainer";

// Images:
import cyber from "../assets/CarouselImages/cyber.jpg";

const defaultProps = {
  src: cyber,
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ImgContainer {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(ImgContainer, defaultProps);
});

describe("When props is not passed to ImgContainer", () => {
  test("Image component does not render to the screen when props is undefined", () => {
    const wrapper = setup({ src: undefined });
    const component = findByTestAttr(wrapper, "carousel-image");
    expect(component.length).toBe(0);
  });
});

describe("When props is passed to ImgContainer", () => {
  test("Image component returns an image to the screen", () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(wrapper, "carousel-image");
    expect(component.length).toBe(1);
  });
});
