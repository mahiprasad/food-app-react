import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-rose-800 max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center text-rose-200">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer hover:bg-rose-900 hover:text-rose-100 transition-500"
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          imm<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-rose-100 rounded-full p-1 text-[14px]">
          <p className="bg-rose-800 text-rose-100 rounded-full p-2">Delivery</p>
          <p className="p-2 text-rose-900">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-rose-100 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] text-rose-900">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart button */}
      <button className="border-none bg-rose-700 text-rose-200 hidden md:flex items-center py-2 rounded-full hover:bg-rose-100 hover:text-rose-800 transition-500">
        <BsFillCartFill size={20} />
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-rose-800 text-rose-200 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-rose-800 text-rose-200 z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">
          imm<span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4  ">
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4 " /> Orders
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <FaUserFriends size={25} className="mr-4 " /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
