import React from "react";
import SearchBar from "../../../components/SearchBar";
import Logo from "../../../assets/images/flag.jpg";
import Image from "next/image";
const ChatList = () => {
  const items = [
    {
      name: "Molathoti Sarath",
      icon: Logo,
      lastSeen: "34 min",
      lastMessage: "Hi, How have you been do...",
    },

    {
      name: "Hasan Jamil",
      icon: Logo,
      lastSeen: "19 hrs",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Lam Teja",
      icon: Logo,
      lastSeen: "19 hrs",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Balakrishna B",
      icon: Logo,
      lastSeen: "20 hrs",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Athira Dileep Kumar",
      icon: Logo,
      lastSeen: "2 days",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Pravitha Satyavan ",
      icon: Logo,
      lastSeen: "2 days",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Mathew George",
      icon: Logo,
      lastSeen: "4 days",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Darshana Suresh",
      icon: Logo,
      lastSeen: "4 days",
      lastMessage: "Hi, How have you been do...",
    },
    {
      name: "Darshana Suresh",
      icon: Logo,
      lastSeen: "4 days",
      lastMessage: "Hi, How have you been do...",
    },
  ];
  return (
    <div className="flex flex-col  justify-start items-start  bg-white h-[98%] py-2 rounded-md">
      <SearchBar className="m-2 w-[94%]" />

      {items.map((item, index) => {
        return (
          <div
            className="flex justify-start items-center cursor-pointer p-3 hover:bg-gray-300 "
            key={index}
          >
            <div>
              <Image
                src={item.icon}
                width={40}
                height={40}
                alt="Person Img"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-between pl-2">
                <div className="text-sm w-[13vw] font-semibold">
                  {item.name}
                </div>
                <div className="text-gray-500 text-sm">{item.lastSeen}</div>
              </div>
              <div className="text-gray-500 pl-2 text-sm">
                {item.lastMessage}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
