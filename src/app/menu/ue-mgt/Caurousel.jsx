"use client";
import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import AddProduct from "./AddProduct.jsx";

const Form2 = () => (
  <form>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="address"
      >
        Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
        placeholder="Enter your address"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="city"
      >
        City
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="city"
        type="text"
        placeholder="Enter your city"
      />
    </div>
  </form>
);

const Form3 = () => (
  <form>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="confirm-password"
      >
        Confirm Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="confirm-password"
        type="password"
        placeholder="Confirm your password"
      />
    </div>
  </form>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleAddProductSubmit = () => {
    // Logic for handling AddProduct form submission
    console.log("AddProduct form submitted");
    nextForm(); // Move to the next form
  };
  const forms = [
    <AddProduct onSubmit={handleAddProductSubmit} />,
    <Form2 />,
    <Form3 />,
  ];

  const nextForm = () => {
    if (currentIndex < forms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevForm = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToForm = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg ">
      {forms[currentIndex]}
      <div className="flex justify-between mt-4">
        {currentIndex !== 0 ? (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={prevForm}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
        ) : (
          <div></div>
        )}
        <button
          className="bg-violet-600 text-white px-4 py-2 rounded"
          onClick={() => {
            if (currentIndex === 0) {
              // Trigger the submit of AddProduct form
              handleAddProductSubmit();
            } else {
              nextForm();
            }
          }}
          disabled={currentIndex === forms.length - 1}
        >
          {currentIndex === forms.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {forms.map((_, index) => (
          <button
            key={index}
            className={`mx-1 ${
              currentIndex === index ? "text-violet-600" : "text-gray-400"
            }`}
            onClick={() => goToForm(index)}
          >
            <FaRegCircle />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
