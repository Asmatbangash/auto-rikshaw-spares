import React from "react";
import { BigCard, Line, Title } from "../components/index";
import { assets } from "../assets/assets";
function Collection() {
  const collections = [
    { image: assets.pistonKit, desc: "lajsdlfjalsjdf", price: "$69" },
    { image: assets.cylinder, desc: "aljsldfjals", price: "$69" },
    { image: assets.Silencer, desc: "ajsdlfjas", price: "$69" },
    { image: assets.RealAxle, desc: "laksjdfalsjdlfjalsdf", price: "$69" },
    { image: assets.pistonKit, desc: "lajsdlfjalsjdf", price: "$69" },
    { image: assets.cylinder, desc: "aljsldfjals", price: "$69" },
    { image: assets.Silencer, desc: "ajsdlfjas", price: "$69" },
    { image: assets.RealAxle, desc: "laksjdfalsjdlfjalsdf", price: "$69" },
  ];
  return (
    <div>
      <div></div>
      <div className="text-3xl text-center my-5">
        <div className="inline-flex items-center gap-1 mb-5">
          <Title text1={"ALL"} text2={"PRODUCTS"} />
          <Line className="w-8 sm:w-12 h-[2px] sm:h-[3px] text-gray-700" />
        </div>
        <BigCard product={collections} />
      </div>
    </div>
  );
}

export default Collection;
