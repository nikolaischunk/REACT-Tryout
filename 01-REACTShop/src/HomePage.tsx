import React from "react";
import Carousel from "./Component/MyCarousel";
import MyTestCardDeck from "./Component/MyTestCardDeck";
import MySearchbar from "./Component/MySearchbar";
import "./css/style.css";

function HomePage() {
  return (
    <div className="HomePage">

      <Carousel></Carousel>
      <MyTestCardDeck></MyTestCardDeck>
    </div>
  );
}

export default HomePage;
