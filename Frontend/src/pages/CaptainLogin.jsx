import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      emailId: email,
      password,
    };
    const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/captains/login`,
  captain
);
    if(response.status == 200){
      const data = response.data
      setCaptain(data.captain);
      localStorage.setItem('token' , data.token);
      navigate('/captain-home')
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div>
        <img
          className="w-30"
          src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/c4d55f42-e52e-413f-a419-3f31908559c9.png"
          alt=""
        />
        <form
          className="p-7"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 font-medium"> What's your Email ?</h3>
          <input
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] rounded-xl px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-xl mb-2 font-medium mt-2">Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] rounded-xl placeholder:text-base text-lg px-4 py-2 border w-full"
          />
          <button className="bg-black text-white placeholder:text-base text-lg px-4 py-2 border w-full mt-6 rounded-xl">
            Login
          </button>
          <Link to="/captain-signup" className="text-blue-600">
            New as a captain?
          </Link>
        </form>
      </div>
      <div className="px-7">
        <Link
          to="/login"
          className="bg-gray-500 flex items-center justify-center text-white placeholder:text-base text-lg px-4 py-2 border w-full mt-6 rounded-xl "
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
