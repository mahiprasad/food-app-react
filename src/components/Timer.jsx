import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Timer = () => {
  //timer logic
  setInterval(function time() {
    var d = new Date();

    var hrs = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    var sec = 60 - d.getSeconds();

    if ((min + "").length === 1) {
      min = "0" + min;
    }
    if ((sec + "").length === 1) {
      sec = "0" + sec;
    }

    document.getElementById("timer").innerHTML = hrs + ":" + min + ":" + sec;
  }, 1000);

  //hide banner logic
  function setBanner() {
    document.getElementById("banner").style.display = "none";
  }

  return (
    <div
      className=" bg-rose-800 text-rose-100 mx-auto flex justify-between items-center px-4 py-2 border border-red-400"
      id="banner"
    >
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/899/899076.png"
          alt="clock"
          className="w-10"
        />
        <p className="p-2">LIMITED TIME OFFER</p>
      </div>

      <div className="flex justify-center">
        <p className="p-2">Ends in</p>
        <div className="flex flex-row p-2 pl-0">
          <p id="timer"></p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="p-2">
          GET 10% OFF Use Code: <strong>TREATOFF</strong>
        </p>
      </div>
      <div>
        <AiOutlineClose
          onClick={() => setBanner()}
          size={15}
          className="absolute right-4 top-4 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Timer;
