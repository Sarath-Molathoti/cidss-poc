"use client";
import React from "react";
import MailCategories from "./MailCategories.jsx";
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import EmailEditor from "./Editor.jsx";
import Logo from "../../../assets/images/flag.jpg";
import Image from "next/image";
const Mail = () => {
  return (
    <div className="fixed inset-0 flex justify-center  z-50 mt-[17vh]">
      <div className="w-[90%] h-[95%] bg-slate-200 rounded-md">
        <div className="grid grid-col-12 gap-1 h-full w-full">
          <div className="col-start-1 col-end-2 border-2 h-full w-full min-w-[12vw] max-w-[12vw]overflow-y-auto">
            <MailCategories />
          </div>
          <div className="col-start-2 col-end-4 h-[98%] my-2 min-w-[18vw] max-w-[21vw] overflow-y-auto bg-white rounded-md">
            <ChatList />
          </div>
          <div className="col-start-4 col-end-12 bg-white h-[98%] w-[99%] rounded-md m-2 flex flex-col justify-start">
            <div className="h-[7vh]">
              <Header />
            </div>
            <div className="h-[35vh]">
              <div className="flex">
                <div className="mt-4 pl-2">
                  <Image
                    src={Logo}
                    width={40}
                    height={40}
                    alt="Person Img"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="px-3 pt-2">
                    Re: The Future of Renewable Energy: Innovations and
                    Challenges Ahead
                  </div>

                  <div className="text-gray-400 text-sm px-3">
                    24 Jun 2024 1:44 pm
                  </div>
                </div>
              </div>
              <div>
                <p className="p-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero nulla at ducimus praesentium omnis esse voluptatum,
                  placeat ipsum pariatur. Cum, veniam! Doloremque nulla veniam
                  doloribus quidem vel reprehenderit officiis est.
                </p>
              </div>
            </div>
            <div className="h-[25vh]">
              <EmailEditor />
            </div>
            <div className="h-[7vh] mt-6">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
