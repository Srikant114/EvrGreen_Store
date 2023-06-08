import React from "react";
import { cartImg, logoDark } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/evrGreenSlice";

const Header = () => {
  const productData = useSelector((state) => state.evrGreen.productData);
  const userInfo = useSelector((state) => state.evrGreen.userInfo);
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-20 border-b-[1px] bg-black border-b-white font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8">
            <Link className="text-base text-white font-bold hover:text-[#13e4b2] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-base text-white font-bold hover:text-[#4ae272] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
            >
              Shop
            </Link>
            <li className="text-base text-white font-bold hover:text-[#b2e85b] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              About Us
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-8" src={cartImg} alt="cartImg" />
              <span className="absolute text-white w-8 top-1.5 left-0 text-xs flex items-center justify-center font-semibold bg-transparent ">
                {productData.length}
              </span>
            </div>
          </Link>
          {/* User Information on header */}
          {userInfo ? (
            <div className="text-white flex gap-4 justify-center items-center ml-5 -mr-20">
              <img
                src={
                  userInfo
                    ? userInfo.image
                    : "https://img.icons8.com/?size=512&id=108652&format=png"
                }
                alt="userLogo"
                className="w-8 h-8 rounded-full bg-white"
              />
              <p className="text-base font-titleFont font-semibold underline underline-offset-2 text-white select-none">
                {userInfo.name}
              </p>
              <p onClick={handleSignOut} className="font-medium text-red-500 hover:underline hover:text-[#6590D5] select-none cursor-pointer">SignOut</p>
            </div>
          ) : (
            <div className="text-white flex gap-4">
              <Link to="/login" className="text-base text-white font-bold hover:text-[#b2e85b] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Login</Link>
              <Link to="/signup" className="text-base text-white font-bold hover:text-[#13e4b2] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">SignUp</Link>
            </div>
          )}
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

export default Header;
