"use client";

import React, { useState } from "react";

import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
const MultiLevelDropdown = ({
  data,
  title,
  topLevelIcon,
  buttonClassName,
  menuClassName,
}) => {
  const [activeMenus, setActiveMenus] = useState({});
  const router = useRouter();

  const handleToggle = (level, item) => {
    setActiveMenus((prev) => ({
      ...prev,
      [`${level}-${item.name}`]: !prev[`${level}-${item.name}`],
    }));
    router.push(item.component);
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
    return items.length > 0 ? (
      <ul
        className={`pl-${
          level * 4
        } bg-white border rounded-md shadow-lg absolute ${
          level === 0 || activeMenus[`${level - 1}-${parent}`]
            ? "block"
            : "hidden"
        } ${menuClassName} min-w-max`}
        // style={{ minWidth: "7rem" }}
        style={{ zIndex: 100 }}
      >
        {items.map((item, index) => (
          <li key={index} className="relative">
            <div
              onMouseEnter={() => handleMouseEnter(level, item.name)}
              onMouseLeave={() => handleMouseLeave(level, item.name)}
            >
              <div
                className="flex items-center justify-start cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap overflow-hidden"
                onClick={() => handleToggle(level, item)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-8 w-8 mr-2 rounded-full"
                  width={8}
                  height={8}
                />
                <div className="flex-1 truncate">{item.name}</div>
                {item.subItems && item.subItems.length > 0 && (
                  <FaCaretRight className="w-4 h-4 ml-2" />
                )}
              </div>
              {activeMenus[`${level}-${item.name}`] && (
                <div className="absolute left-full top-0 ml-2 mt-0 w-48 z-20">
                  {renderMenuItems(item.subItems, level + 1, item.name)}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => handleMouseEnter(0, title)}
      onMouseLeave={() => handleMouseLeave(0, title)}
    >
      <button
        className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ${buttonClassName} `}
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
        {data.length >= 1 && (
          <FaCaretDown
            className={`ml-1 -mr-1 h-5 w-5 mt-1 ${
              activeMenus[`0-${title}`] ? "transform rotate-180" : ""
            }`}
          />
        )}
      </button>

      {activeMenus[`0-${title}`] && renderMenuItems(data, 0, title)}
    </div>
  );
};

export default MultiLevelDropdown;
