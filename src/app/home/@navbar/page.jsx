"use client";

import React from "react";
import MultiLevelDropdown from "@/components/NestedDropdown"; // Adjust path as needed
import Logo from "../../../assets/images/flag.jpg";

const menuData = {
  "RESOURCE MGT": {
    image: Logo, // Specify the image path for RESOURCE MGT
    items: [
      { name: "Lgs Overview", image: Logo },
      { name: "Wpn Mgt", image: Logo },
      {
        name: "Engg. Store Mgt",
        image: Logo, // Icon for Engg. Store Mgt (if different from RESOURCE MGT)
        subItems: [
          {
            name: "Def Bricks Store",
            image: Logo,
          },
          { name: "ETSR Store", image: Logo },
          {
            name: "CETB Store",
            image: Logo,
            subItems: [
              {
                name: "Home Goods",
                image: Logo,
              },
              {
                name: "Garden Tools",
                image: Logo,
              },
            ],
          },
        ],
      },
      { name: "UE Mgt", image: Logo },
    ],
  },
  "RESOURCE MGT2": {
    image: Logo, // Specify the image path for RESOURCE MGT2
    items: [
      { name: "Lgs Overview", image: Logo },
      { name: "Wpn Mgt", image: Logo },
      {
        name: "Engg. Store Mgt",
        image: Logo, // Icon for Engg. Store Mgt (if different from RESOURCE MGT2)
        subItems: [
          {
            name: "Def Bricks Store",
            image: Logo,
          },
          { name: "ETSR Store", image: Logo },
          {
            name: "CETB Store",
            image: Logo,
            subItems: [
              {
                name: "Home Goods",
                image: Logo,
              },
              {
                name: "Garden Tools",
                image: Logo,
              },
            ],
          },
        ],
      },
      { name: "UE Mgt", image: Logo },
    ],
  },
  MOB: {
    image: Logo, // Specify the image path for MOB
    items: [
      { name: "Mobilisation", image: Logo },
      {
        name: "Road Mov",
        image: Logo, // Icon for Road Mov (if different from MOB)
        subItems: [
          { name: "Simulation", image: Logo },
          { name: "Actual Plan", image: Logo },
        ],
      },
      { name: "Electronics", image: Logo },
    ],
  },
  // Include other menu items as necessary
};

const Home = () => {
  return (
    <div className="fixed h-[7vh] mx-auto p-4 w-full  bg-slate-400">
      <div className="flex space-x-4">
        {Object.keys(menuData).map((menu, index) => (
          <MultiLevelDropdown
            key={index}
            title={menu}
            data={menuData[menu].items || menuData[menu]}
            topLevelIcon={menuData[menu].image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
