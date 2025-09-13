import React from "react";

function ConfirmRide(props) {
  return (
    <div>
      <h3
        onClick={() => {
          props.setConfirmRide(false);
          console.log("click")
        }}
        className="pb-2 top-0 text-center absolute w-[93%]"
      >
        <i className=" text-gray-700 ri-arrow-down-wide-fill"></i>
      </h3>
      <h3 className="text-2xl font-semibold mb-3">Confirm your ride !!</h3>
      <div className="flex justify-center flex-col items-center gap-2">
        <img
          className=" h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        />
        <div className="w-full">
          <div className="flex items-center gap-4 p-3 border-b-1">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
             
              <p className="text-base -mt-1">{props.pickup}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3 border-b-1">
              <i className="ri-map-pin-2-line"></i>
              <div>
          
                <p className="text-base -mt-1">{props.destination}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3">
              <i className=" text-lg ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">{props.fare[props.vehicleType]}</h3>
                <p className="text-base -mt-1">cash/online</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.createRide(),
            props.setVehicleFound(true), props.setConfirmRide(false);
          }}
          className="border-3 rounded-2xl w-full p-2 text-2xl font-bold "
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmRide;
