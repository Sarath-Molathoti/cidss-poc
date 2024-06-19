"use client";
import React, { useState } from "react";
import ArmyImage from "../../../assets/images/computer.jpg";
import Image from "next/image";
import TextField from "../../../components/TextField.jsx";
import Button from "../../../components/Button.jsx";
import CustomSelect from "../../../components/CustomSelect.jsx";
import { FaLock, FaUser, FaLocationDot } from "react-icons/fa6";
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    region: "",
    username: "",
    password: "",
    appointment: "",
    node: "",
  });

  const regionOptions = [
    { value: "north", label: "North" },
    { value: "south", label: "South" },
    { value: "east", label: "East" },
    { value: "west", label: "West" },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  return (
    <div className="bg-violet-200 w-full h-screen flex items-center justify-center">
      <div className="border-8 border-white rounded-md w-[80vw] h-[80vh] flex sm:flex-col md:flex-row items-center justify-center">
        <div className="bg-violet-800 w-1/2 p-20 rounded-md h-full">
          <div className="flex flex-col align-middle justify-center ml-10">
            <h2 className="text-white text-xl md:text-5xl font-bold">
              Welcome to
            </h2>
            <h2 className="text-white text-xl md:text-5xl font-bold mt-5">
              Decision Support System !
            </h2>
            <p className="text-white text-xl mt-10">
              An Intelligent, Secure and Automated System for the Protection of
              Individuals and to draw and analyze critical war plans
            </p>
            <Image
              src={ArmyImage}
              alt="Army Image"
              className="rounded-md mt-10 border-4 border-white"
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className="bg-violet-300 w-1/2 rounded-md px-28 py-16 h-full">
          <div className="flex flex-col align-middle justify-center">
            <h2 className="text-gray-700 font-bold text-xl md:text-4xl mb-10">
              Login
            </h2>
            <TextField
              label="Region"
              id="region"
              placeholder="Enter your region"
              value={userDetails.region}
              onChange={handleInputChange}
              containerClassName="mb-6"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={
                <FaLocationDot className="text-violet-800" size={20} />
              }
            />
            <TextField
              label="Username"
              id="username"
              placeholder="Enter your username"
              value={userDetails.username}
              onChange={handleInputChange}
              containerClassName="mb-6"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={<FaUser className="text-violet-800" size={20} />}
            />
            <TextField
              label="Password"
              id="password"
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={handleInputChange}
              containerClassName="mb-6"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={<FaLock className="text-violet-800" size={20} />}
            />
            <CustomSelect
              label="Appointment Type"
              id="appointment"
              placeholder="Select Appointment"
              options={regionOptions}
              value={userDetails.appointment}
              onChange={handleInputChange}
              containerClassName="mb-6"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              selectClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
            />

            <CustomSelect
              label="Select Node"
              id="node"
              placeholder="Select Node"
              options={regionOptions}
              value={userDetails.appointment}
              onChange={handleInputChange}
              containerClassName="mb-6"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              selectClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
            />
            <Button
              variant="success"
              size="lg"
              className="bg-violet-600 py-3 rounded-md"
            >
              <h2 className="text-2xl font-bold text-white">SIGN IN</h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
