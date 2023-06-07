import React, { useState, useEffect } from "react";
import { cartBgImg } from "../assets/index";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Cart = () => {
  const productData = useSelector((state) => state.evrGreen.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src={cartBgImg}
        alt="cartBgImg"
      />
      <div>
        {productData.length === 0 ? (
          <div>
            <h2 className="text-red-500 flex justify-center  my-4">
              Your Cart is Empty, Please Go back and add Some Product
            </h2>
            <div>
              <Link to="/">
                <button className="my-2 w-screen flex justify-center items-center gap-1 text-gray-400 hover:text-black duration-300">
                  <span>
                    <HiOutlineArrowLeft />
                  </span>
                  Go Shopping
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem />
            <div className="w-1/3 bg-slate-300 py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-black pb-6">
                <h2 className="text-2xl font-medium">Cart Total</h2>
                <p className="flex items-center gap-4 text-base">
                  SubTotal
                  <span className="font-titleFont font-bold text-lg">
                    $ {totalAmt}
                  </span>
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shipping
                  <span>
                    2, Hansraj Niwas, Sv Rd, Dahisar, Mumbai, Maharashtra,
                    India, Pin-400068, Ph No- +91-02228953151
                  </span>
                </p>
              </div>
              <div>
                <p className="font-titleFont font-semibold flex justify-between mt-6">
                  Total <span className="text-xl font-bold"> $ {totalAmt}</span>
                </p>
                <button className="text-base text-white bg-black w-full py-3 mt-6 hover:bg-gray-800 duration-300 rounded-md">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
