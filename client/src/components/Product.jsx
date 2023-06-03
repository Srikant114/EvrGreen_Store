import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="py-10 bg-gray-800">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl rounded-lg bg-white text-black py-2 w-80 text-center">
          Shopping With Us
        </h1>
        <span className="w-20 h-[3px] bg-white"></span>
        <p className="max-w-[700px] text-gray-300 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          asperiores tenetur velit. Aliquid voluptas laboriosam molestias dolor
          velit, ullam nobis in fuga, explicabo non quod, quas ipsa repudiandae?
          Labore, laudantium?
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductCard/>
      </div>
    </div>
  );
};

export default Product;
