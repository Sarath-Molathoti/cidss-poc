import React from "react";
import Logo from "../../assets/images/logo.webp";
import MilitaryLogo from "../../assets/images/logo-one.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-full  p-0 m-0">
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
          Invitation Management System (IMS)
        </div>
        <div className="px-2 py-2">
          <Image width={90} height={60} src={Logo} alt="MOD Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
