import React from "react";
import { Navbar, Footer } from "./components";

import { Outlet } from "react-router-dom";
import AddToCartProvider from "./store/AddToCart";

function App() {
  return (
    <AddToCartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AddToCartProvider>
  );
}

export default App;
