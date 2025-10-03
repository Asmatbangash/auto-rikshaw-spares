import React, { useContext } from "react";
import { AddToCartContext } from "../store/AddToCart";

function BestSellerProducts({ product }) {
  const { setAddToCart, setCartCounter } = useContext(AddToCartContext);

  const handleAddToCartClick = (item) => {
    setAddToCart((prevCart) => [...prevCart, item]);
    setCartCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {product.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col text-center"
        >
          {/* Product Image */}
          <div className="w-32 h-32 mb-4 mx-auto flex items-center justify-center">
            <img
              src={item.image}
              alt={item.desc}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Description */}
          <p
            className="text-gray-700 text-sm mb-3"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          ></p>

          {/* Product Price */}
          <span className="text-black font-bold text-lg mb-4">
            {item.price}
          </span>

          {/* Add to Cart Button (always at bottom) */}
          <button
            onClick={() => handleAddToCartClick(item)}
            className="w-full py-2 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
          >
            🛒 Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default BestSellerProducts;
