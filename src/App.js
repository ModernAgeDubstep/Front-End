import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// Site Pages:
import SiteWrapper from "./components/SiteWrapper/SiteWrapper";
import LandingPage from "./pages/LandingPage/LandingPage";
import ArtistBioPage from "./pages/ArtistBioPage/ArtistBioPage";
// Shop Pages:
import ShopWrapper from "./components/ShopWrapper/ShopWrapper";
import { ShopAllItems } from "./pages/Shop/ShopAllItems/ShopAllItems";
import ShopHats from './pages/Shop/ShopHats/ShopHats';
import ShopShirts from './pages/Shop/ShopShirts/ShopShirts';
import ShopAccessories from "./pages/Shop/ShopAccessories/ShopAccessories";

// colors:
import colors from "./helpers/colors";

const AppContainer = styled.div`
  background: ${colors.background};
`;

function App() {
  return (
    <AppContainer data-test="App-Component" className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/site/roster" />} />
        </Switch>
        <Route path="/site" component={SiteWrapper} />
        <Route path="/site/roster" component={LandingPage} />
        <Route path="/site/artist/:artistName/:id" component={ArtistBioPage} />
        <Route path="/shop" component={ShopWrapper} />
        <Route path="/shop/allitems" component={ShopAllItems} />
        <Route path="/shop/hats" component={ShopHats} />
        <Route path="/shop/shirts" component={ShopShirts} />
        <Route path="/shop/accessories" component={ShopAccessories} />
        
      </Router>
    </AppContainer>
  );
}

export default App;
