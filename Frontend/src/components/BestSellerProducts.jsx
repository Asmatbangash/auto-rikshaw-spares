import React from "react";
import { assets } from "../assets/assets";

function BestSellerProducts() {
  const products = [
    { image: assets.pistonKit, desc: "lajsdlfjalsjdf", price: "$69" },
    { image: assets.cylinder, desc: "aljsldfjals", price: "$69" },
    { image: assets.Silencer, desc: "ajsdlfjas", price: "$69" },
    { image: assets.RealAxle, desc: "laksjdfalsjdlfjalsdf", price: "$69" },
  ];
  return (
    <div className="mb-10">
      <h1 className="text-center text-3xl font-bold my-5">
        Best Seller Products
      </h1>
      <div className="flex justify-center items-center">
        {products.map((products) => (
          <div className="card bg-white w-60 shadow-sm mx-2">
            <figure>
              <img
                src={products.image}
                className="w-full h-40"
                alt="best seller product"
              />
            </figure>
            <div className="card-body">
              <p>{products.desc}</p>
              <div className="card-actions justify-start">
                <p>{products.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerProducts;
