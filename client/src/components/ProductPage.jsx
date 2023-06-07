import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/evrGreenSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});

  let [baseQty, setBaseQty] = useState(1);

  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImage"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold text-white">
              {details.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">${details.oldPrice}</p>
              <p className="font-semibold text-white">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base text-yellow-500">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-300">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-200 -mt-3">{details.description}</p>
          <div className="text-white flex gap-4">
            <div className="w-52 flex items-center justify-between to-gray-300 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-200 hover:text-black cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-200 hover:text-black cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is Added`)
              }
              className="bg-white text-black py-3 px-6 active:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
          <p className="text-base text-gray-300">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductPage;
