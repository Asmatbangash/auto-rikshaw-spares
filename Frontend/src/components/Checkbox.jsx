import React from "react";

function Checkbox({ product }) {
  return (
    <>
      {product.map((itemName) => (
        <div class="flex items-center space-x-3 my-1">
          <label class="group flex items-center cursor-pointer">
            <div class="dark:bg-black/10">
              <label class="text-white">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                  type="checkbox"
                />
              </label>
            </div>

            <span class="ml-3 text-gray-700 group-hover:text-blue-500 font-medium transition-colors duration-300">
              {itemName.name}
            </span>
          </label>
        </div>
      ))}
    </>
  );
}

export default Checkbox;
