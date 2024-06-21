// components/Modal.js
"use client";
import { useState } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus, FaCcApplePay } from "react-icons/fa6";

const Modal = ({
  title,
  children,
  onClose,
  actions,
  customWidth,
  customHeight,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none"
      style={{ marginTop: "16vh" }}
    >
      <Draggable handle=".modal-header">
        <div
          className={`flex flex-col bg-white rounded-lg shadow-lg transition-all duration-300 pointer-events-auto ${
            isMaximized
              ? "w-11/12 h-5/6"
              : `${customWidth || "w-1/2"} ${customHeight || "h-1/2"}`
          }`}
          style={
            isMaximized
              ? { marginTop: "7.5%", marginLeft: "2.5%", marginRight: "2.5%" }
              : {}
          }
        >
          <div className="modal-header flex justify-between items-center p-4 border-b border-gray-200 cursor-move">
            <div className="flex items-center space-x-2">
              <FaCcApplePay className="h-6 w-6 text-green-500" />
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <div className="flex space-x-2">
              <button onClick={handleMaximize} className="focus:outline-none">
                {isMaximized ? (
                  <FaMinus className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaPlus className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <button onClick={onClose} className="focus:outline-none">
                <IoMdClose className="h-6 w-6 ml-2 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-auto">{children}</div>
          {actions && (
            <div className="flex justify-end p-4 border-t border-gray-200 space-x-2">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`px-4 py-2 rounded ${action.className}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default Modal;
