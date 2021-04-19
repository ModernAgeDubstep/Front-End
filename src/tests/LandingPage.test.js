import React from "react";
import { Provider } from 'react-redux';
import LandingPage from "../components/LandingPage/LandingPage";
import { findByTestAttr } from "./testUtils";
import { shallow, mount } from "enzyme";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe("expect Landing Page to render its self and its Sub Components without error", () => {
  const store = mockStore({
    artistData: []
  });
  const component = shallow(
    <Provider store={store}>
      <LandingPage />
    </Provider>
  )
  test("LandingPage renders without error", () => {
    expect(component.length).toBe(1);
  });
});
