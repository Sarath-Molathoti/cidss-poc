"use client";
import React, { useState } from "react";
import ArmyImage from "../../../assets/images/computer.jpg";
import Image from "next/image";
import TextField from "../../../components/TextField.jsx";
import Button from "../../../components/Button.jsx";
import CustomSelect from "../../../components/CustomSelect.jsx";
import { FaLock, FaUser, FaLocationDot } from "react-icons/fa6";
import "../../globals.css";
import { ValidateForm } from "../../../utils/ValidateForm.jsx";
import { redirect, useRouter } from "next/navigation";
const Login = ({ setLoggedIn }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    region: "",
    username: "",
    password: "",
    appointment: "",
    node: "",
  });
  const [errors, setErrors] = useState({
    region: "",
    username: "",
    password: "",
    appointment: "",
    node: "",
  });

  const validationRules = {
    region: { required: true, label: "Region", length: 4 },
    username: { required: true, label: "Username", maxLength: 20 },
    password: { required: true, label: "Password", minLength: 8 },
    appointment: { required: true, label: "Appointment" },
    node: { required: true, label: "Node" },
  };

  const nodeOptions = [
    { value: "north", label: "North" },
    { value: "south", label: "South" },
    { value: "east", label: "East" },
    { value: "west", label: "West" },
  ];

  const appointmentOptions = [
    { value: "DE", label: "DE" },
    { value: "SE", label: "SE" },
    { value: "DM", label: "DM" },
    { value: "Mgr", label: "Mgr" },
    { value: "DGM", label: "DGM" },
    { value: "GM", label: "GM" },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(userDetails);
    e.preventDefault();
    const validationErrors = ValidateForm(userDetails, validationRules);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("loggedIn", JSON.stringify("true"));
      //router.push("/");
      setLoggedIn(true);
      console.log("Form submitted successfully");
    }
  };
  return (
    <div className="bg-custom-image w-full h-full lg:h-screen sm:py-32 flex items-center justify-center ">
      <div className="border-8 border-white rounded-lg w-[80vw]  grid sm:grid-cols-1 lg:grid-cols-2 lg:fixed">
        <div className="bg-violet-800  p-20 h-full">
          <div className="flex flex-col align-middle justify-center ">
            <h2 className="text-white text-xl lg:text-5xl font-bold">
              Welcome to
            </h2>
            <h2 className="text-white text-xl lg:text-5xl font-bold mt-5">
              Decision Support System !
            </h2>
            <p className="text-white text-xl mt-10">
              An Intelligent, Secure and Automated System for the Protection of
              Individuals and to draw and analyze critical war plans
            </p>
            <Image
              src={ArmyImage}
              alt="Army Image"
              className="rounded-lg mt-10 border-4 border-white"
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className="bg-violet-300  px-20 lg:px-28 py-16 h-full">
          <div className="flex flex-col align-middle justify-center">
            <h2 className="text-gray-700 font-bold text-2xl lg:text-4xl mb-10">
              Login
            </h2>
            <TextField
              label="Region"
              id="region"
              placeholder="Enter your region"
              value={userDetails.region}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={
                <FaLocationDot className="text-violet-800" size={20} />
              }
              error={errors.region}
            />
            <TextField
              label="Username"
              id="username"
              placeholder="Enter your username"
              value={userDetails.username}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={<FaUser className="text-violet-800" size={20} />}
              error={errors.username}
            />
            <TextField
              label="Password"
              id="password"
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              prefixIcon={<FaLock className="text-violet-800" size={20} />}
              error={errors.password}
            />
            <CustomSelect
              label="Appointment Type"
              id="appointment"
              placeholder="Select Appointment"
              options={appointmentOptions}
              value={userDetails.appointment}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              selectClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
              error={errors.appointment}
            />

            <CustomSelect
              label="Select Node"
              id="node"
              placeholder="Select Node"
              options={nodeOptions}
              value={userDetails.node}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base font-semibold text-xl"
              selectClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
            />
            <Button
              variant="success"
              size="lg"
              className="bg-violet-600 py-3 rounded-lg"
              onClick={handleSubmit}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                SIGN IN
              </h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
