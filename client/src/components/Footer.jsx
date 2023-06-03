import React from "react";
// Importing Logos 
import { logoDark, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* =============== Logo Icon Section =============== */}
        <div className="flex flex-col gap-7">
          <img className="w-28" src={logoDark} alt="logo" />
          <p className="text-white text-sm tracking-wide">
            &copy; evrgreenshop.com
          </p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-300">
            <ImGithub className="hover:text-[#7289da] duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-[#ff0000] duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-[#1877f2] duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-[#1da1f2] duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-[#c13584] duration-300 cursor-pointer" />
          </div>
        </div>
        {/* =============== Contact Us Section =============== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Contact Us Here
          </h2>
          <div className="text-base flex flex-col gap-4">
            <p>#22/177, Marathalli, Bengaluru - KA</p>
            <p>Mobile: +91-9876543210</p>
            <p>Phone: 080-3636366</p>
            <p>e-mail: evrgreenshop@gmail.com</p>
          </div>
        </div>
        {/* =============== Profile Section =============== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Profile</h2>
          <div className="flex flex-col gap-4 text-base">
            <p className="text-gray-400 flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="text-gray-400 flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="text-gray-400 flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="text-gray-400 flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        {/* =============== Subscribe Section =============== */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm placeholder:text-center outline-none"
            placeholder="Enter your email"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
