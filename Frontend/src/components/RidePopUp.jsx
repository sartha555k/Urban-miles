import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="pb-2 top-0 text-center absolute w-[93%]"
      >
        <i className=" text-gray-700 ri-arrow-down-wide-fill"></i>
      </h3>
      <h3 className="text-2xl font-semibold mb-3">New Ride Available</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePTMSz5LtRX9Ox_VrqdbFlEIsmQgZQjhiAg&s" alt="" />
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
        <button  onClick={()=>{
            props.setConfirmRidePopupPanel(true)
        }}className="border-3 rounded-2xl w-full p-1 text-2xl font-bold bg-green-700">
          Accept
        </button>
        <button onClick={()=>{
            props.setRidePopupPanel(false)
        }} className="border-3 rounded-2xl w-full p-1 mt-2 text-2xl font-bold bg-gray-700">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
