import React from "react";
import BookCard from "../components/BookCard";

const Cart = ({ cartItems, removeFromCart }) => {
  const isEmpty = cartItems && cartItems?.length === 0;

  return (
    <div className="container mx-auto px-4 py-8 min-h-[76vh]">
      {isEmpty ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((book, index) => (
            <BookCard key={index} {...book} removeFromCart={removeFromCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
