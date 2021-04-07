import FlipCard from "../components/LandingPage/FlipCard";
import { findByTestAttr, checkProps } from "../tests/testUtils";
import { shallow } from "enzyme";

// Artist Photos:
import rilla from "../assets/ArtistPhotos/rilla1.png";

const defaultProps = {
  artist: {
    id: 1,
    artist_id: 1,
    artist_name: "Rilla",
    artist_photo: rilla,
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    spotify: "https://www.spotify.com",
    youtube: "https://www.youtube.com",
    twitter: "https://www.twitter.com",
  },
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FlipCard {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(FlipCard, defaultProps);
});

describe("Card Element Renders to the screen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(defaultProps.artists);
  });
  test("without errors", () => {
    const component = findByTestAttr(wrapper, "card-container");
    expect(component.length).toBe(1);
  });
  test("card element exists on screen", () => {
    const card = findByTestAttr(wrapper, "the-card");
    expect(card.length).toBe(1);
  });
  test("front of card element exists on screen", () => {
    const front = findByTestAttr(wrapper, "front-of-card");
    expect(front.length).toBe(1);
  });
  test("back of card element exists on screen", () => {
    const back = findByTestAttr(wrapper, "back-of-card");
    expect(back.length).toBe(1);
  });
});
