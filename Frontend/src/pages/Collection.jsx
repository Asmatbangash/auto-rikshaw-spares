import React, { useState } from "react";
import { BigCard, Checkbox, Line, Title } from "../components/index";
import { assets } from "../assets/assets";

function Collection() {
  const collections = [
    {
      image: assets.pistonKit,
      desc: "High-quality piston kit",
      price: "$69",
      name: "Piston Kit",
    },
    {
      image: assets.cylinder,
      desc: "Durable cylinder for engines",
      price: "$79",
      name: "Cylinder",
    },
    {
      image: assets.Silencer,
      desc: "Noise-reducing silencer",
      price: "$59",
      name: "Silencer",
    },
    {
      image: assets.RealAxle,
      desc: "Robust rear axle",
      price: "$89",
      name: "Rear Axle",
    },
    {
      image: assets.pistonKit,
      desc: "Reliable piston kit",
      price: "$69",
      name: "Piston Kit",
    },
    {
      image: assets.cylinder,
      desc: "Engine cylinder with precision fit",
      price: "$79",
      name: "Cylinder",
    },
    {
      image: assets.Silencer,
      desc: "Performance silencer",
      price: "$59",
      name: "Silencer",
    },
    {
      image: assets.RealAxle,
      desc: "Heavy-duty rear axle",
      price: "$89",
      name: "Rear Axle",
    },
    {
      image: assets.Silencer,
      desc: "Noise-reducing silencer",
      price: "$59",
      name: "Silencer",
    },
    {
      image: assets.RealAxle,
      desc: "Robust rear axle",
      price: "$89",
      name: "Rear Axle",
    },
    {
      image: assets.pistonKit,
      desc: "Reliable piston kit",
      price: "$69",
      name: "Piston Kit",
    },
    {
      image: assets.cylinder,
      desc: "Engine cylinder with precision fit",
      price: "$79",
      name: "Cylinder",
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

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Handle checkbox change
  const handleFilterChange = (filterName, isChecked) => {
    setSelectedFilters((prev) =>
      isChecked ? [...prev, filterName] : prev.filter((f) => f !== filterName)
    );
  };
  // Apply filters
  const filteredProducts =
    selectedFilters.length > 0
      ? collections.filter((item) => selectedFilters.includes(item.name))
      : collections;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Section */}
        <aside className="lg:w-1/4 bg-white rounded-2xl shadow-md p-6 h-fit sticky top-20">
          <Title text2="Filter Products" />
          <div className="mt-6 space-y-3">
            <Checkbox product={nameOfProduct} onChange={handleFilterChange} />
          </div>
        </aside>

        {/* Product Section */}
        <main className="lg:w-3/4">
          <div className="flex items-center gap-3 mb-8">
            <Title text1="All" text2="Products" />
            <Line className="w-12 sm:w-16 h-[3px] bg-indigo-600 rounded-full" />
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <BigCard product={filteredProducts} />
          ) : (
            <p className="text-gray-600 text-center mt-10">
              No products found for selected filters.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Collection;
