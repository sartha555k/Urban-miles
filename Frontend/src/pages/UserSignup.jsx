import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext"

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();
  const {user , setUser} = React.useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstName: firstname,
        lastName: lastname,
      },
      emailId: emailId,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if(response.status == 201){
       const data = response.data;
       setUser(data.user)
       localStorage.setItem('token' , data.token)
       navigate('/home')
    }

    setEmailId("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
          <h3 className="text-lg font-medium mb-2">Whats your Name ?</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="first-name"
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] rounded-xl mb-4 px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              type="text"
              placeholder="last-name"
              required
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="bg-[#eeeeee] rounded-xl mb-4 placeholder:text-base text-lg px-4 py-2 border w-full"
            />
          </div>

          <h3 className="text-xl mb-2 font-medium"> What's your Email ?</h3>
          <input
            type="email"
            placeholder="email@example.com"
            required
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
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
            Create account
          </button>
          <Link to="/login" className="text-blue-600">
            Already have an account ?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
