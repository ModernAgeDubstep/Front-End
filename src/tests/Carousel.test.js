import { findByTestAttr, checkProps } from "../tests/testUtils";
import { shallow } from "enzyme";
import Carousel from "../components/reuseable/carousel/Carousel";
import ImgContainer from "../components/reuseable/carousel/ImgContainer";

// Carousel Images:
import cyber from "../assets/CarouselImages/cyber.jpg";
import dj from "../assets/CarouselImages/dj.jpg";
import dys1 from "../assets/CarouselImages/dys1.jpg";
import dys2 from "../assets/CarouselImages/dys2.jpg";
import studio from "../assets/CarouselImages/studio.jpg";

const defaultProps = {
  sliderArr: [
    <ImgContainer src={cyber} alt="cyber punk" />,
    <ImgContainer src={dj} alt="Dj" />,
    <ImgContainer src={dys1} alt="dystopian" />,
    <ImgContainer src={dys2} alt="dystopian" />,
    <ImgContainer src={studio} alt="music studio" />,
  ],
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Carousel {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(Carousel, defaultProps);
});

describe("When props are not passed to Carousel", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ sliderArr: [] });
  });
  test("component does not render images", () => {
    const component = findByTestAttr(wrapper, "Images");
    expect(component.length).toBe(0);
  });
  test("expect two buttons to appear on the Carousel", () => {
    const buttonComponent = findByTestAttr(wrapper, "carousel-buttons");
    expect(buttonComponent.length).toBe(2);
  });
});

describe("When props are passed to Carousel", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(defaultProps);
  });
  test("component the same number of images passed to Carousel component", () => {
    const component = findByTestAttr(wrapper, "Images");
    expect(component.length).toBe(defaultProps.sliderArr.length);
  });
  test("expect two buttons to appear on the Carousel", () => {
    const buttonComponent = findByTestAttr(wrapper, "carousel-buttons");
    expect(buttonComponent.length).toBe(2);
  });
});
