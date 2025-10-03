import { useContext } from "react";
import { AddToCartContext } from "../store/AddToCart";

function CartPage() {
  const { addToCart, setCart } = useContext(AddToCartContext);

  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = addToCart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = addToCart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(addToCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = addToCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          🛒 Your Cart
        </h2>

        {addToCart.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">Cart is empty</p>
        ) : (
          <>
            {/* Table for medium & large screens */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100 text-left">
                    <th className="p-3">Image</th>
                    <th className="p-3">Item</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addToCart.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <img
                          src={item.image}
                          alt={item.desc}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-3 font-semibold">{item.desc}</td>
                      <td className="p-3 text-indigo-600">{item.price}</td>
                      <td className="p-3 flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                          +
                        </button>
                      </td>
                      <td className="p-3 font-bold text-gray-700">
                        ${item.price * item.quantity}
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for small screens */}
            <div className="md:hidden space-y-4">
              {addToCart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border rounded-lg p-4 shadow-sm bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.desc}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.desc}
                      </h3>
                      <p className="text-indigo-600 font-bold">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity + Actions */}
                  <div className="flex items-center gap-3 mt-3 sm:mt-0">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="flex justify-between items-center border-t pt-4 mt-6">
              <h3 className="text-xl font-bold text-gray-800">Grand Total</h3>
              <span className="text-2xl font-bold text-indigo-600">
                ${totalPrice}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
