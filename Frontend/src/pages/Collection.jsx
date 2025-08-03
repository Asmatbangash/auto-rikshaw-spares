import React from "react";
import { BigCard, Checkbox, Line, Title } from "../components/index";
import { assets } from "../assets/assets";

function Collection() {
  const collections = [
    { image: assets.pistonKit, desc: "High-quality piston kit", price: "$69" },
    {
      image: assets.cylinder,
      desc: "Durable cylinder for engines",
      price: "$79",
    },
    { image: assets.Silencer, desc: "Noise-reducing silencer", price: "$59" },
    { image: assets.RealAxle, desc: "Robust rear axle", price: "$89" },
    { image: assets.pistonKit, desc: "Reliable piston kit", price: "$69" },
    {
      image: assets.cylinder,
      desc: "Engine cylinder with precision fit",
      price: "$79",
    },
    { image: assets.Silencer, desc: "Performance silencer", price: "$59" },
    { image: assets.RealAxle, desc: "Heavy-duty real axle", price: "$89" },
    { image: assets.Silencer, desc: "Noise-reducing silencer", price: "$59" },
    { image: assets.RealAxle, desc: "Robust rear axle", price: "$89" },
    { image: assets.pistonKit, desc: "Reliable piston kit", price: "$69" },
    {
      image: assets.cylinder,
      desc: "Engine cylinder with precision fit",
      price: "$79",
    },
  ];

  const nameOfProduct = [
    { name: "Clutch Plate" },
    { name: "Piston Kit" },
    { name: "Cylinder" },
    { name: "Silencer" },
    { name: "Rear Axle" },
    { name: "Brake Shoe" },
    { name: "Spark Plug" },
    { name: "Headlight" },
    { name: "Tail Light" },
    { name: "Air Filter" },
    { name: "Battery" },
    { name: "Speedometer" },
  ];

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Section */}
        <div className="lg:w-1/4 bg-white rounded-2xl shadow-md p-6">
          <Title text2="Filter Products" />
          <div className="mt-4">
            <Checkbox product={nameOfProduct} />
          </div>
        </div>

        {/* Product Section */}
        <div className="lg:w-3/4">
          <div className="flex items-center gap-2 mb-6">
            <Title text1="All" text2="Products" />
            <Line className="w-10 sm:w-14 h-[3px] bg-indigo-600" />
          </div>
          <BigCard product={collections} />
        </div>
      </div>
    </div>
  );
}

export default Collection;
