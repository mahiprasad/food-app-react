import React from "react";

const HeadlineCards = () => {
  return (
    <div className="text-gray-100 max-w-[1640px] mx-auto my-6 p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="px-2">Grab Yours</p>
          <button className="border-none bg-gray-100 text-rose-900 mx-2 absolute bottom-4 hover:bg-rose-800 hover:text-rose-100 duration-500">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4 ">New Bakeries</p>
          <p className="px-2">Added Daily</p>
          <button className="border-none bg-gray-100 text-rose-900 mx-2 absolute bottom-4 hover:bg-rose-800 hover:text-rose-100 duration-500">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4 ">We Deliver Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-none bg-gray-100 text-rose-900 mx-2 absolute bottom-4 hover:bg-rose-800 hover:text-rose-100 duration-500">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/808923/pexels-photo-808923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
