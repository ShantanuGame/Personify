import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Fix: Call useNavigate correctly

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)} // Fix: Use navigate directly
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Arrow left"
          />
          <img
            onClick={() => navigate(1)} // Fix: Use navigate directly
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Arrow right"
          />
        </div>
        <div className="flex items-center gap-4">
          
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            My lil Bub
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            SN
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">All Music just for US</p>
      </div>
    </>
  );
};

export default Navbar;