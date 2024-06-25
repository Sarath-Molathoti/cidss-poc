"use client";

import React, { useState, useEffect } from "react";
import MultiLevelDropdown from "../../../components/NestedDropdown.jsx";
import Logo from "../../../assets/images/flag.jpg";
import MilitaryLogo from "../../../assets/images/logo-one.jpg";
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/navigation";
import WpmMgt from "../../menu/wpn-mgt/page.jsx";
import LgsOverview from "../../menu/charts/page.jsx";
import Electronics from "../../menu/electronics/page.jsx";
import Mail from "../../menu/mail/page.jsx";
import UeMgt from "../../menu/ue-mgt/page.jsx";
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
        component: <LgsOverview />,
      },
      { name: "Wpn Mgt", image: Logo, component: <WpmMgt /> },
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
      { name: "UE Mgt", image: MilitaryLogo, component: <UeMgt /> },
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
      { name: "Electronics", image: Logo, component: <Electronics /> },
    ],
  },
  Mail: {
    image: Logo,
    items: [],
    component: <Mail />,
  },
  "Instant Message": {
    image: Logo,
    items: [],
    component: "/",
  },
};

const NavBar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("loggedIn"));
    if (storedUserDetails && storedUserDetails === "true") {
      setLoggedIn(true);
    }
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", JSON.stringify("true"));
    router.push("/");
  };

  function findComponent(input) {
    // Convert input to uppercase to match keys case insensitively
    const upperInput = input.toUpperCase();

    // Loop through each category in menuData
    for (const category in menuData) {
      // Check if the category matches the input
      if (category.toUpperCase() === upperInput) {
        console.log(menuData[category].component);
        return menuData[category].component;
      }

      // Check each item in the current category's items array
      for (const item of menuData[category].items) {
        // Check if item name matches the input
        if (item.name.toUpperCase() === upperInput) {
          console.log(item.component);
          return item.component;
        }

        // Check subItems if they exist
        if (item.subItems) {
          for (const subItem of item.subItems) {
            // Check if subItem name matches the input
            if (subItem.name.toUpperCase() === upperInput) {
              console.log(subItem.component);
              return subItem.component;
            }
          }
        }
      }
    }

    // If no match found
    console.log("Component not found.");
  }

  const handleMenuClick = (component) => {
    //if (component === "Wpn Mgt") {
    setSelectedComponent(findComponent(component));
    // } else {
    //   setSelectedComponent(<LgsOverview />);
    // }
    // console.log("selected the component" + findComponent(component));
  };
  return (
    <>
      {loggedIn ? (
        <div className="relative mx-auto p-2 w-full bg-violet-900 h-[6vh]">
          <div className="flex justify-between align-middle space-x-4 ">
            <div>
              {" "}
              {Object.keys(menuData).map((menu, index) => (
                <MultiLevelDropdown
                  key={index}
                  title={menu}
                  data={menuData[menu].items || menuData[menu]}
                  topLevelIcon={menuData[menu].image}
                  buttonClassName="border-0 hover:bg-violet-700 bg-violet-900 text-white"
                  menuClassName="custom-menu-class"
                  handleMenuClick={handleMenuClick}
                />
              ))}
            </div>
            <div onClick={(e) => handleLogout(e)}>
              <FaPowerOff className="text-white text-xl lg:text-2xl mt-2 cursor-pointer" />
            </div>
          </div>
        </div>
      ) : null}
      {selectedComponent && (
        <div className="main-content">{selectedComponent}</div>
      )}
    </>
  );
};

export default NavBar;
