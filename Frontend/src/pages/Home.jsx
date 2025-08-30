import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelopen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current , {
          opacity:"1",
        })
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current , {
          opacity : "0"
        })
      }
    },
    [panelopen]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-20 absolute left-2 top-2"
        src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/c4d55f42-e52e-413f-a419-3f31908559c9.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            onClick={() => {
              setPanelopen(false);
            }}
            ref={panelCloseRef}
            className="absolute top-0 left-2 opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="px-5 py-2 text-base bg-gray-300 rounded-lg border w-full mb-3 mt-3"
              type="text"
              placeholder="Add a pick up location"
              onClick={() => {
                setPanelopen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />
            <input
              className="px-5 py-2 text-base bg-gray-300 rounded-lg border w-full"
              type="text"
              placeholder="Enter your Destination"
              onClick={() => {
                setPanelopen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
