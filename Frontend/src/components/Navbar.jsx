import React, { useState } from "react";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { href, Link, NavLink } from "react-router-dom";
import { SearchBar } from "./index";

function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collection", href: "/collection" },
    { name: "Contact", href: "/contact" },
  ];

  const auth = [
    {
      name: "MyProfile",
      href: "/myProfile",
    },
    {
      name: "Orders",
      href: "/Orders",
    },
    {
      name: "LogOut",
      href: "/LogOut",
    },
  ];
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm pl-10 pr-15 max-sm:pl-0 max-sm:pr-0">
        {/* Mobile menu */}
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
              className="flex flex-col gap-1 justify-center items-center dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow"
            >
              {navigation.map((navigateTo) => (
                <li key={navigateTo.name}>
                  <NavLink
                    to={navigateTo.href}
                    className="flex items-center flex-col gap-1"
                  >
                    {navigateTo.name}{" "}
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={assets.logo} alt="logo" className="w-15" />
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center">
            {navigation.map((navigateTo) => (
              <li key={navigateTo.name}>
                <NavLink
                  to={navigateTo.href}
                  className="flex items-center flex-col px-3"
                >
                  {navigateTo.name}{" "}
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end cursor-pointer">
          <div
            className="px-2"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <CiSearch />
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <FiUser />
            </div>
            <ul
              tabIndex={0}
              className="flex flex-col gap-1 justify-center items-start dropdown-content bg-base-100 rounded-box z-1 mt-3 w-22 p-2 shadow"
            >
              {auth.map((auth) => (
                <li key={auth.name}>
                  <NavLink
                    to={auth.href}
                    className="flex items-center flex-col gap-1"
                  >
                    {auth.name}{" "}
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <button className="btn">
              <PiShoppingCartLight />
              <div className="badge badge-sm">9</div>
            </button>
          </div>
        </div>
      </div>
      {isSearchVisible ? <SearchBar /> : null}
    </>
  );
}

export default Navbar;
