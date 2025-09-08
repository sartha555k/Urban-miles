import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null)
useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="w-20 absolute left-2 top-2 flex">
        <img
          src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/c4d55f42-e52e-413f-a419-3f31908559c9.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="bg-blue-300 h-10 fixed rounded-full right-2 top-2 "
        >
          <i className="font-bold text-2xl ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div onClick={(e)=>{
        setFinishRidePanel(true)
      }} className="h-1/5 p-4 flex items-center justify-between bg-yellow-600 relative">
        <h5 className="pb-2 top-0 text-center absolute w-[93%]">
          <i className="ri-arrow-up-wide-fill font-bold text-lg"></i>
        </h5>
        <h4 className="text-lg font-semibold">4Km away</h4>
        <button className="bg-green-700 mt-2 p-2 font-medium rounded-lg px-5">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed h-screen z-10 bottom-0 p-3 bg-white w-full px-3 py-6 translate-y-full"
      >
        <FinishRide setFinishRidePanel = {setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
