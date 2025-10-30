import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl p-10 w-[500px] text-center">

        <img
        alt="Welcome"
          className="w-full h-64 object-cover rounded-xl mb-8 ml-10"
          src="../src/assets/s2p logo with bg.png"
        />

        <h1 className="text-3xl font-semibold mb-3">Welcome to Beyond Office</h1>
        <p className="text-gray-600 mb-8">
          An S2P Edutech sub-enterprise
        </p>


        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
