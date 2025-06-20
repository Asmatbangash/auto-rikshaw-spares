import React from "react";
import { assets } from "../assets/assets";
import Input from "./Input";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <img src={assets.logo} alt="Logo" className="w-[60px]" />
        </a>
      </div>
      <div className="navbar-center w-60">
        <div className="w-full flex items-center border border-gray-300 rounded-full overflow-hidden">
          <Input
            type="text"
            placeholder="Search spare parts"
            className="w-full bg-white px-4 py-2 text-sm font-medium outline-none"
          />
          <button className="p-2 bg-red-500 text-white">
            <CiSearch className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
