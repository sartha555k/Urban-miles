import React, { useRef, useState } from "react";
import { Link, Links } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );


   useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
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
      <div className="h-3/5">
        <img
          className="h-full w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-2/5 p-4 ">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className="fixed z-10 bottom-0 p-3 bg-white w-full px-3 py-6 translate-y-full">
        <RidePopUp setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel = {setConfirmRidePopupPanel}/>
      </div>
      <div ref={confirmRidePopupPanelRef} className="fixed z-10 bottom-0 p-3 bg-white w-full px-3 py-6 translate-y-full">
        <ConfirmRidePopUp setConfirmRidePopupPanel = {setConfirmRidePopupPanel} setRidePopupPanel = {setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
