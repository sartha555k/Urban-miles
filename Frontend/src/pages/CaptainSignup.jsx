import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      emailId: emailId,
      password: password,
      fullname: {
        firstName: firstname,
        lastName: lastname,
      },
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if(response.status == 201){
      const data = response.data;
      setCaptain(data);
      localStorage.setItem('token' , data.token)
      navigate('/captain-home')
    }



    setEmailId("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
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
          <h3 className="text-lg font-medium mb-2">
            Whats your Captain-Name ?
          </h3>
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

          <h3 className="text-xl mb-2 font-medium mt-2">
            Vechicle Information
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Vechicle Color"
              required
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="bg-[#eeeeee] rounded-xl mb-4 px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              type="text"
              placeholder="Vehicle Plate"
              required
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="bg-[#eeeeee] rounded-xl mb-4 placeholder:text-base text-lg px-4 py-2 border w-full"
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-black text-white placeholder:text-base text-lg px-4 py-2 border w-full mt-6 rounded-xl">
            Create Captain's Account !
          </button>
          <Link to="/captain-login" className="text-blue-600">
            Already have an captain-account ?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
