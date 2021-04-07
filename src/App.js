import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// Site Pages:
import SiteWrapper from "./components/SiteWrapper/SiteWrapper";
import LandingPage from "./components/LandingPage/LandingPage";
import ArtistBioPage from "./components/ArtistBioPage/ArtistBioPage";
// Shop Pages:
import ShopWrapper from "./components/ShopWrapper/ShopWrapper";
import { ShopAllItems } from './components/Shop/ShopAllItems/ShopAllItems';

// colors:
import colors from "./helpers/colors";

const AppContainer = styled.div`
  background: ${colors.background};
`;

function App() {
  return (
    <AppContainer data-test="App-Component" className="App">
      <Router>
        <Route path="/site" component={SiteWrapper} />
        <Route path="/site/roster" component={LandingPage} />
        <Route path="/site/artist/:artistName/:id" component={ArtistBioPage} />
        <Route path="/shop" component={ShopWrapper} />
        <Route path='/shop/allitems' component={ShopAllItems} />
      </Router>
    </AppContainer>
  );
}

export default App;
