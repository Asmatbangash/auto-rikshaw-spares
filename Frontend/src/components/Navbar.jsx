import React from "react";
import { assets } from "../assets/assets";
import Input from "./Input";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm pl-10 pr-15 max-sm:pl-0 max-sm:pr-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navigation.map((navigateTo) => (
              <li key={navigateTo.name}>
                <Link to={navigateTo.href}>{navigateTo.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={assets.logo} alt="logo" className="w-15" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((navigateTo) => (
            <li key={navigateTo.name}>
              <Link to={navigateTo.href}>{navigateTo.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end cursor-pointer">
        <a className="px-2">
          <CiSearch />
        </a>
        <a className="px-2">
          <FiUser />
        </a>
        <a className="px-2">
          <PiShoppingCartLight />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
