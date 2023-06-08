import React from "react";
import { logoDark } from "../assets/index";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-gray-700 overflow-x-hidden">
      <section>
        <div className="flex flex-col items-center justify-center py-8 mx-auto mr-4.2 md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center justify-center mb-3 text-2xl font-semibold text-white"
          >
            <img src={logoDark} alt="logoSignup" className="w-28 mr-2" />
            <p className="font-titleFont">EvrGreen Stores</p>
          </Link>
          {/* Signup Form           */}
          <div className="w-screen rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6">
                {/* Email Section */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    Your Email <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className=" border sm:text-sm rounded-lg focus:ring-[#3061AF]  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@mail.com"
                    required
                  />
                </div>
                {/* Password Section */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    Password <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className=" border sm:text-sm rounded-lg focus:ring-[#3061AF]  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {/* Confirm Password Section */}
                <div>
                  <label
                    htmlFor="confirmPass"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    Confirm Password <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="confirmPass"
                    name="confirmPass"
                    className=" border sm:text-sm rounded-lg focus:ring-[#3061AF]  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {/* Terms And Condition Section */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-[#3061AF] ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label class="font-light text-gray-300">
                      I accept the
                      <Link
                        className="font-medium hover:underline text-[#6590D5]"
                        to=""
                      >
                        Terms and Conditions
                        <sup className="text-red-600">*</sup>
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center bg-[#3061AF] hover:bg-[#285192] focus:ring-[#204075]"
                >
                  Create an Account
                </button>
                <p className="text-sm font-light text-gray-400">
                  Already have an account?
                  <Link to="/login" className="font-medium hover:underline text-[#6590D5]">Login Here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
