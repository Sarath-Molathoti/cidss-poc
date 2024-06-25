import React from "react";
import Button from "../../../components/Button";
import { MdEdit, MdEmail, MdInbox, MdSend, MdDelete } from "react-icons/md";
import { IoDocumentText, IoShareSocial } from "react-icons/io5";
import { RiSpam2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
const MailCategories = () => {
  const items = [
    {
      name: "All",
      icon: <MdEdit />,
      count: 3,
    },

    {
      name: "Inbox",
      icon: <MdInbox />,
      count: 2,
    },
    {
      name: "Sent",
      icon: <MdSend />,
      count: 1,
    },
    {
      name: "Drafts",
      icon: <IoDocumentText />,
      count: 0,
    },
    {
      name: "Trash",
      icon: <MdDelete />,
      count: 0,
    },
    {
      name: "Spam",
      icon: <RiSpam2Fill />,
      count: 0,
    },
    {
      name: "Important",
      icon: <MdEdit />,
      count: 0,
    },
    {
      name: "Starred",
      icon: <FaStar />,
      count: 0,
    },
    {
      name: "Social",
      icon: <IoShareSocial />,
      count: 0,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-2 w-full">
      <Button
        prefixIcon={MdEdit}
        className="bg-black text-white py-2 px-14 rounded-md hover:bg-slate-900"
      >
        Compose
      </Button>

      {items.map((item, index) => {
        return (
          <div className="w-[100%] flex justify-between items-center  py-3 hover:bg-white cursor-pointer rounded-md px-2">
            <div className="flex justify-center items-center">
              <div className="ml-1">{item.icon}</div>
              <div className="ml-2">{item.name}</div>
            </div>
            <div>{item.count != 0 ? item.count : ""}</div>
            {/* <Button
              prefixIcon={item.icon}
              className=" rounded-md py-2 px-4 w-[100%] mt-2 text-left justify-start cursor-pointer bg-slate-200 border-0 "
              key={index}
            >
              <div className="flex justify-end ">
                <div className="w-[80%]">{item.name}</div>
                <div className="w-[20%]">
                  {item.count != 0 ? item.count : ""}
                </div>
              </div>
            </Button> */}
          </div>
        );
      })}
    </div>
  );
};

export default MailCategories;
