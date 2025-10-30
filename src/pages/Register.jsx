import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpModal from "./OtpModal";

const RegisterPage = () => {
  const [showOtp, setShowOtp] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-sky-50 ${showOtp ? "blur-sm" : ""}`}>
      <div className="flex w-[850px] bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-1/2 bg-black text-white flex flex-col justify-center p-10 rounded-r-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-transparent blur-2xl opacity-90" />
          <h1 className="text-3xl font-semibold z-10">
            An S2P EduTech product.
          </h1>
        </div>
        <div className="w-1/2 px-10 py-12 flex flex-col justify-center">
          <div className="flex flex-col space-y-1 mb-8">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              <span>☀️</span>
            </div>
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p className="text-gray-500 text-sm">
              Welcome to Beyond Office — Let’s get started
            </p>
          </div>
          <form className="flex flex-col space-y-5" onSubmit={handleRegister}>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="hi@hextastudio.in"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <OtpModal isOpen={showOtp} onClose={() => setShowOtp(false)} />
    </div>
  );
};

export default RegisterPage;
