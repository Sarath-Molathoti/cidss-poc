"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo.webp";
import MilitaryLogo from "../../../assets/images/logo-one.jpg";
import Image from "next/image";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("loggedIn"));
    if (storedUserDetails && storedUserDetails === "true") {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      {loggedIn ? (
        <div className="w-full h-[10vh]  p-0 m-0">
          <div className="bg-white flex items-center justify-between px-4 md:px-8">
            <div className="px-2 py-2">
              <Image
                width={60}
                height={60}
                src={MilitaryLogo}
                alt="Military Logo"
              />
            </div>
            <div className="text-xl font-bold sm:text-2xl lg:text-3xl  text-center">
              Army Integration & Decision Support System (AIDSS)
            </div>
            <div className="px-2 py-2">
              <Image width={90} height={60} src={Logo} alt="MOD Logo" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
