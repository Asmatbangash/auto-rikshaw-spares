import React from "react";
import { Carousal, Spares } from "../components";
import { assets } from "../assets/assets";

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const spareParts = [
    { image: assets.Banner1 },
    { image: assets.Banner2 },
    { image: assets.Banner3 },
  ];
  return (
    <div>
      <Carousal settings={settings} spareParts={spareParts} />
      <Spares />
    </div>
  );
}

export default Home;
