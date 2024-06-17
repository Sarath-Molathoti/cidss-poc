"use client";

import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const MultiLevelDropdown = ({ data, title, topLevelIcon }) => {
  const [activeMenus, setActiveMenus] = useState({});

  const handleToggle = (level, item) => {
    setActiveMenus((prev) => ({
      ...prev,
      [`${level}-${item}`]: !prev[`${level}-${item}`],
    }));
  };

  const handleMouseEnter = (level, item) => {
    setActiveMenus((prev) => ({
      ...prev,
      [`${level}-${item}`]: true,
    }));
  };

  const handleMouseLeave = (level, item) => {
    setActiveMenus((prev) => ({
      ...prev,
      [`${level}-${item}`]: false,
    }));
  };

  const renderMenuItems = (items = [], level = 0, parent = "") => {
    return (
      <ul
        className={`pl-${level * 4} bg-white border rounded-md shadow-lg ${
          level === 0 || activeMenus[`${level - 1}-${parent}`]
            ? "block"
            : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="relative">
            {typeof item === "string" ? (
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log(`Clicked on ${item}`);
                }}
                onMouseEnter={() => handleMouseEnter(level, item)}
                onMouseLeave={() => handleMouseLeave(level, item)}
              >
                <div className="flex items-center align-middle">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-8 w-8 mr-2 rounded-full"
                    width={8}
                    height={8}
                  />
                  {item.name}
                </div>
              </a>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(level, item.name)}
                onMouseLeave={() => handleMouseLeave(level, item.name)}
              >
                <div
                  className="flex items-center justify-start cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleToggle(level, item.name)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-8 w-8 mr-2 rounded-full"
                    width={8}
                    height={8}
                  />
                  {item.name}
                  {item.subItems && item.subItems.length > 0 && (
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  )}
                </div>
                {activeMenus[`${level}-${item.name}`] && (
                  <div className="absolute left-full top-0 ml-2 mt-0 w-48 z-20">
                    {renderMenuItems(item.subItems, level + 1, item.name)}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => handleMouseEnter(0, title)}
      onMouseLeave={() => handleMouseLeave(0, title)}
    >
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={() => handleToggle(0, title)}
      >
        <div className="flex items-center">
          {topLevelIcon && (
            <Image
              src={topLevelIcon}
              alt={`${title} icon`}
              className="h-8 w-8 mr-2 rounded-full"
              width={8}
              height={8}
            />
          )}
          {title}
        </div>
        <ChevronDownIcon
          className={`ml-2 -mr-1 h-5 w-5 mt-2 ${
            activeMenus[`0-${title}`] ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {activeMenus[`0-${title}`] && renderMenuItems(data, 0, title)}
    </div>
  );
};

export default MultiLevelDropdown;
