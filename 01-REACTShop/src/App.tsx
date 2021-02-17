import React from "react";
import Navbar from "./Component/MyNavbar";
import Carousel from "./Component/MyCarousel";
import MyTestCardDeck from "./Component/MyTestCardDeck";
import HomePage from "./HomePage";
import "./css/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import MyNavbar from "./Component/MyNavbar";
import ProductPage from "./ProductPage";
import SearchBar from "./SearchBarTry";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar></MyNavbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path={"/product/:id"} component={ProductPage} />
          <Route exact path="/search" component={SearchBar} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
