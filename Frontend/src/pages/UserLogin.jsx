import React, { useContext, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      emailId: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if(response.status == 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token' , data.token)
      navigate('/home')
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
          <Link to="/signup" className="text-blue-600">
            New User ?
          </Link>
        </form>
      </div>
      <div className="px-7">
        <Link
          to="/captain-login"
          className="bg-gray-500 flex items-center justify-center text-white placeholder:text-base text-lg px-4 py-2 border w-full mt-6 rounded-xl "
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
