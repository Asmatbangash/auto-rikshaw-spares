import React from "react";

function Checkbox({ product, onChange }) {
  return (
    <>
      {product.map((item, index) => (
        <div key={index} className="flex items-center space-x-3 my-1">
          <label className="group flex items-center cursor-pointer">
            <div className="dark:bg-black/10">
              <input
                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                type="checkbox"
                onChange={(e) => onChange(item.name, e.target.checked)}
              />
            </div>

            <span className="ml-3 text-gray-700 group-hover:text-blue-500 font-medium transition-colors duration-300">
              {item.name}
            </span>
          </label>
        </div>
      ))}
    </>
  );
}

export default Checkbox;
