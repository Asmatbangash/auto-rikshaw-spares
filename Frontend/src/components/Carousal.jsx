import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { assets } from "../assets/assets";

function Carousal({ settings, spareParts }) {
  if (!Array.isArray(spareParts)) {
    console.error("spareParts is undefined or not an array");
    return <p className="text-center text-red-500">No spare parts found.</p>;
  }
  return (
    <div className="slider-container px-15 py-5">
      <Slider {...settings}>
        {spareParts.map((sparePart) => (
          <div className="w-full h-full">
            <img src={sparePart.image} className="w-full h-90 rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal;
