import { createContext, useState } from "react";

export const AddToCartContext = createContext({
  addToCart: [],
  cartCounter: [],
});

function AddToCartProvider({ children }) {
  const [addToCart, setAddToCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  return (
    <AddToCartContext
      value={{ addToCart, setAddToCart, cartCounter, setCartCounter }}
    >
      {children}
    </AddToCartContext>
  );
}

export default AddToCartProvider;
