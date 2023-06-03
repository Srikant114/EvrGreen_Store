import React from 'react'
import { cartImg, logoDark } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] bg-black border-b-white font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28" src={logoDark} alt="logoDark" />
        </div>
        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8">
            <li className="text-base text-white font-bold hover:text-[#13e4b2] hover:underline underline-offset-2 decoration-[3px] cursor-pointer duration-300 ">
              Home
            </li>
            <li className="text-base text-white font-bold hover:text-[#13e4b2] hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300 ">
              Pages
            </li>
            <li className="text-base text-white font-bold hover:text-[#4ae272] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Shop
            </li>
            <li className="text-base text-white font-bold hover:text-[#b2e85b] hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300 ">
              Element
            </li>
            <li className="text-base text-white font-bold hover:text-[#b2e85b] hover:underline underline-offset-2 decoration-[3px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-8" src={cartImg} alt="cartImg" />
            <span className="absolute text-white w-8 top-1.5 left-0 text-xs flex items-center justify-center font-semibold bg-transparent">
              0
            </span>
          </div>
          <img
            src="https://img.icons8.com/?size=512&id=108652&format=png"
            alt="userLogo"
            className="w-8 h-8 rounded-full bg-white"
          />
        </div>
      </div>
    </div>
  )
}

export default Header