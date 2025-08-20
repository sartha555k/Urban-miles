import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://5.imimg.com/data5/LV/UR/SM/SELLER-47229742/traffic-signal-paintings-500x500.jpg)] h-screen flex justify-between flex-col w-full bg-red-300 ">
        <img
          className="w-30"
          src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/c4d55f42-e52e-413f-a419-3f31908559c9.png"
          alt=""
        />
        <div className="bg-white py-10 px-10 my-4">
          <h2 className="text-3xl font-bold ">Get started with Urban-Miles</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black rounded-2xl mt-3 text-white py-3 font-bold text-2xl"
          >
            Continue
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 w-full text-center">
        <p className='font-bold'>❤️ from sarthak </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
