import React from "react";
import { MdDelete, MdMail, MdMoreVert } from "react-icons/md";

import { IoMdArchive } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex flex-row justify-end p-4 border-b border-gray-300 space-x-2">
      <div className="group  p-1 rounded-full hover:bg-gray-200 ">
        <FaStar className="text-xl" />
      </div>
      <div className="group p-1 rounded-full hover:bg-gray-200 ">
        <MdMail className="text-xl" />
      </div>
      <div className="group  p-1 rounded-full hover:bg-gray-200 ">
        <IoMdArchive className="text-xl" />
      </div>
      <div className="group  p-1 rounded-full hover:bg-gray-200 ">
        <MdDelete className="text-xl" />
      </div>
      <div className="group  p-1 rounded-full hover:bg-gray-200 ">
        <MdMoreVert className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
