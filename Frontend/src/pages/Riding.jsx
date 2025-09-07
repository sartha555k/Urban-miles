import React from "react";
import {Link, Links} from 'react-router-dom'

function Riding() {
  return (
    <div className="h-screen">
      <Link to="/home" className="bg-blue-300 flex justify-center w-10 rounded-full absolute">
        <i className="text-lg font-bold ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-3">
        <div className="flex items-center justify-between">
          <img
            className=" h-15"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          />
          <div className="text-right pt-3 pr-3">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl font-semibold -mt-1">MP04 ap 1234</h4>
            <p className="text-sm text-gray-600">audi 123</p>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center gap-2">
          <div className="w-full">
            <div>
              <div className="flex items-center gap-4 p-3 border-b-1">
                <i className="text-lg ri-map-pin-fill"></i>
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
        </div>
        <button className="border-3 rounded-2xl text-xl font-bold px-10 mt-3 hover:bg-green-400">
          Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
