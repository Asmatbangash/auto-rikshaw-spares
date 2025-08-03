import React from "react";

function BestSellerProducts({ product }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {product.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center"
        >
          <img
            src={item.image}
            alt={item.desc}
            className="w-32 h-32 object-contain mb-4"
          />
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          ></p>
          <span className="text-indigo-600 font-semibold text-lg">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BestSellerProducts;
