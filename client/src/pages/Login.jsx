import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoDark } from "../assets/index";
import { googleLogo, githubLogo } from "../assets/index";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/evrGreenSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-slate-700 flex flex-col items-center h-full pt-5 pb-5 ">
      <div className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-3 text-2xl font-semibold text-white"
        >
          <img src={logoDark} alt="logoSignup" className="w-28 mr-2" />
          <p className="font-titleFont">EvrGreen Stores</p>
        </Link>
      </div>
      <section>
        <div className="rounded-lg shadow w-screen border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in to your Account
            </h1>
            <form className="space-y-4 md:space-y-6">
              {/* Email Section */}
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Your email <sup className="text-red-600">*</sup>
                </label>
                <input
                  type="email"
                  name="email"
                  className="border outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="user@mail.com"
                  required
                />
              </div>
              {/* Password Section */}
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Password <sup className="text-red-600">*</sup>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="border outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              {/* Remember me & Forget Password Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-[#3061AF] ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-300">Remember me</label>
                  </div>
                </div>
                <Link
                  to=""
                  className="text-sm font-medium hover:underline text-[#6590D5]"
                >
                  Forgot password?
                </Link>
              </div>
              {/* Submit Btn Section */}
              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#3061AF] hover:bg-[#285192] focus:ring-[#204075]"
              >
                Sign in
              </button>
              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[rgb(212,212,212)] after:mt-0.5 after:flex-1 after:border-t after:border-[rgb(212,212,212)]">
                <p className="mx-4 mb-0 text-center font-semibold text-[rgb(299,299,299)]">
                  OR
                </p>
              </div>
              {/* Login With Google - Social  */}
              <div
                onClick={handleGoogleLogin}
                className="mb-3 select-none flex w-full items-center justify-center rounded bg-white px-7 pb-2.5 pt-3 text-center text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-green-500 focus:bg-green-600  focus:outline-none focus:ring-0 active:bg-green-700 shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
              >
                <img src={googleLogo} alt="googleLogo" className="w-5" />
                <p className="ml-2 text-base">Continue with Google</p>
              </div>
              {/* Login with Github - Social */}
              <div className="mb-3 select-none flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-500 focus:bg-gray-600  focus:outline-none focus:ring-0 active:bg-gray-700 shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                <img src={githubLogo} alt="googleLogo" className="w-5" />
                <p className="ml-2 text-base">Continue with Github</p>
              </div>
              <div>
                <p className="text-sm font-light text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/signup"
                    className="font-medium hover:underline text-[#6590D5]"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
