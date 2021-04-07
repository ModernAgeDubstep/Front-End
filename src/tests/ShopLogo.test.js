import ShopLogo from "../components/reuseable//ShopLogo/ShopLogo";
import { findByTestAttr } from "../tests/testUtils";
import { shallow } from "enzyme";

test("component renders without failing", () => {
  const component = shallow(<ShopLogo />);
  expect(component.length).toBe(1);
});

test("component renders with app logo contained within", () => {
  const component = shallow(<ShopLogo />);
  const madLogo = findByTestAttr(component, "site-logo");
  expect(madLogo.length).toBe(1);
});
