import React from "react";
import Button from "../../../components/Button";
import { MdSend } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { CgAttachment } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="flex justify-between p-3 ">
      <div className="flex justify-start">
        <div className="  p-1 rounded-full cursor-pointer">
          <BiSolidImageAdd className="text-2xl" />
        </div>
        <div className="  p-1 rounded-full cursor-pointer ">
          <CgAttachment className="text-2xl" />
        </div>
      </div>
      <div>
        <Button
          suffixIcon={MdSend}
          className="bg-green-600 text-white p-2 rounded-md font-bold"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Footer;
