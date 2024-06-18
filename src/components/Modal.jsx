"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title, logo, children, actions }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
      <div
        className={`relative bg-white rounded shadow-lg transform transition-all ${
          isMaximized ? "w-full h-full" : "w-11/12 md:w-1/2 lg:w-1/3"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center space-x-2">
            {logo && <img src={logo} alt="logo" className="h-8 w-8" />}
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="focus:outline-none"
            >
              {isMaximized ? <FaWindowMinimize /> : <FaWindowMaximize />}
            </button>
            <button onClick={onClose} className="focus:outline-none">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4 border-t border-gray-300 flex justify-end space-x-2">
          {actions}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
};

export default Modal;
