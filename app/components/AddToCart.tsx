"use client";
import React from "react";

const AddToCart = async () => {
  return (
    <div>
      <button onClick={() => console.log("You product has been added to cart")}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
