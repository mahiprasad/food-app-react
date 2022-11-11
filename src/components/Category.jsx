import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  console.log(categories);
  return (
    <div className="bg-rose-800 max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-rose-300 font-bold text-4xl text-center">
        Other Popular Treats
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-rose-300 text-rose-200 rounded-lg p-4 flex justify-between items-center hover:cursor-pointer "
          >
            <h2 className="font-bold ">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
