import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="pb-2 top-0 text-center absolute w-[93%]"
      >
        <i className=" text-gray-700 ri-arrow-down-wide-fill"></i>
      </h3>
      <h3 className="text-2xl font-semibold mb-7">Finish this ride </h3>
      <div className="flex items-center justify-between mb-5 bg-gray-400 p-5 rounded-2xl hover:bg-gray-700">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover border-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePTMSz5LtRX9Ox_VrqdbFlEIsmQgZQjhiAg&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Sarthak Patel</h2>
        </div>
        <h5>2.2 Km</h5>
      </div>

      <div className="flex justify-center flex-col items-center gap-2">
        <div className="w-full">
          <div className="flex items-center gap-4 p-3 border-b-1">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">122/A</h3>
              <p className="text-base -mt-1">vijay nangar , Indore</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3 border-b-1">
              <i className="ri-map-pin-2-line"></i>
              <div>
                <h3 className="text-lg font-medium">122/A</h3>
                <p className="text-base -mt-1">vijay nangar , Indore</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3">
              <i className=" text-lg ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">99rs.</h3>
                <p className="text-base -mt-1">cash/online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Link
            to="/captain-home"
            className="border-3 flex justify-center rounded-lg w-full p-1 text-2xl font-bold bg-green-700 "
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
