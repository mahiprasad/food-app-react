import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type cakes/delights/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="bg-rose-800 max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-rose-300 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div className="py-6">
          <p className="font-bold text-rose-200">Filter Type</p>
          <div className="flex justfiy-between flex-wrap text-rose-200">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-rose-200 hover:text-rose-900 hover:bg-rose-200 hover:transition-500"
            >
              All
            </button>
            <button
              onClick={() => filterType("cake")}
              className="m-1 border-rose-200 hover:text-rose-900 hover:bg-rose-200 hover:transition-500"
            >
              Cakes
            </button>
            <button
              onClick={() => filterType("delights")}
              className="m-1 border-rose-200 hover:text-rose-900 hover:bg-rose-200 hover:transition-500"
            >
              Delights
            </button>
            <button
              onClick={() => filterType("icecream")}
              className="m-1 border-rose-200 hover:text-rose-900 hover:bg-rose-200 hover:transition-500"
            >
              Icecreams
            </button>
            <button
              onClick={() => filterType("drinks")}
              className="m-1 border-rose-200 hover:text-rose-900 hover:bg-rose-200 hover:transition-500"
            >
              Drinks
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-rose-200">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("₹")}
              className="m-1 border-rose-200 text-rose-200 hover:bg-rose-200 hover:text-rose-900 hover:transition:500"
            >
              ₹
            </button>
            <button
              onClick={() => filterPrice("₹₹")}
              className="m-1 border-rose-200 text-rose-200 hover:bg-rose-200 hover:text-rose-900 hover:transition:500"
            >
              ₹₹
            </button>
            <button
              onClick={() => filterPrice("₹₹₹")}
              className="m-1 border-rose-200 text-rose-200 hover:bg-rose-200 hover:text-rose-900 hover:transition:500"
            >
              ₹₹₹
            </button>
            <button
              onClick={() => filterPrice("₹₹₹₹")}
              className="m-1 border-rose-200 text-rose-200 hover:bg-rose-200 hover:text-rose-900 hover:transition:500"
            >
              ₹₹₹₹
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border border-rose-900 shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-rose-200">{item.name}</p>
              <p>
                <span className="bg-rose-300 text-rose-900 p-1 rounded-full hover: cursor-pointer">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
