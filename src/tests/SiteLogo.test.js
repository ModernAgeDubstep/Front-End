import SiteLogo from "../components/reuseable/SiteLogo/SiteLogo";
import { findByTestAttr } from "../tests/testUtils";
import { shallow } from "enzyme";

test("component renders without failing", () => {
  const component = shallow(<SiteLogo />);
  expect(component.length).toBe(1);
});

test("component renders with app logo contained within", () => {
  const component = shallow(<SiteLogo />);
  const madLogo = findByTestAttr(component, "site-logo");
  expect(madLogo.length).toBe(1);
});
