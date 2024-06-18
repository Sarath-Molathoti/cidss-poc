"use client";

import React from "react";
import MultiLevelDropdown from "../../components/NestedDropdown.jsx";
import Logo from "../../assets/images/flag.jpg";
import MilitaryLogo from "../../assets/images/logo-one.jpg";

const menuData = {
  HOME: {
    image: Logo,
    items: [],
    component: "/",
  },
  "RESOURCE MGT": {
    image: Logo,
    items: [
      {
        name: "Lgs Overview",
        image: MilitaryLogo,
        component: "/menu/pages/charts",
      },
      { name: "Wpn Mgt", image: Logo, component: "/menu/pages/wpn-mgt" },
      {
        name: "Engg. Store Mgt",
        image: Logo,
        subItems: [
          {
            name: "Def Bricks Store",
            image: Logo,
            component: "/",
          },
          { name: "ETSR Store", image: MilitaryLogo, component: "/" },
          {
            name: "CETB Store",
            image: Logo,
            subItems: [
              {
                name: "Home Goods",
                image: Logo,
                component: "/",
              },
              {
                name: "Garden Tools",
                image: Logo,
                component: "/",
              },
            ],
          },
        ],
      },
      { name: "UE Mgt", image: MilitaryLogo, component: "/" },
    ],
  },

  MOB: {
    image: MilitaryLogo,
    items: [
      { name: "Mobilisation", image: MilitaryLogo, component: "/" },
      {
        name: "Road Mov",
        image: Logo,
        subItems: [
          { name: "Simulation", image: MilitaryLogo, component: "/" },
          { name: "Actual Plan", image: Logo, component: "/" },
        ],
      },
      {
        name: "Rail Mov",
        image: Logo,
        subItems: [
          { name: "ORMP Details", image: MilitaryLogo, component: "/" },
        ],
      },
      {
        name: "Air Mov",
        image: Logo,
        subItems: [
          { name: "Aircrafts Master", image: Logo, component: "/" },
          { name: "Airfield Master", image: MilitaryLogo, component: "/" },
          { name: "Load Table", image: Logo, component: "/" },
          { name: "OAMP Details", image: Logo, component: "/" },
          { name: "Schedule Generation", image: Logo, component: "/" },
          {
            name: "Monitor Air Schedule",
            image: Logo,
            component: "/",
          },
          { name: "Estimation", image: MilitaryLogo, component: "/" },
        ],
      },
      { name: "Electronics", image: Logo, component: "/" },
    ],
  },
  Mail: {
    image: Logo,
    items: [],
    component: "/",
  },
  "Instant Message": {
    image: Logo,
    items: [],
    component: "/",
  },
};

const Home = () => {
  return (
    <div className="relative mx-auto p-2 w-full bg-violet-900">
      <div className="flex space-x-4 ">
        {Object.keys(menuData).map((menu, index) => (
          <MultiLevelDropdown
            key={index}
            title={menu}
            data={menuData[menu].items || menuData[menu]}
            topLevelIcon={menuData[menu].image}
            buttonClassName="border-0 hover:bg-violet-700 bg-violet-900 text-white"
            menuClassName="custom-menu-class"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
