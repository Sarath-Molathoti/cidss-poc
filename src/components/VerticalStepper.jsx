"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
const VerticalStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="max-w-md mx-auto ">
      {steps.map((step, index) => (
        <div key={step.label} className="mb-8">
          <div className="flex items-center">
            <div
              className={`h-10 w-10 flex items-center justify-center rounded-full text-violet-900 font-extrabold text-xl ${
                activeStep > index
                  ? "bg-white"
                  : activeStep === index
                  ? "bg-violet-600 ring-4 ring-violet-300"
                  : "bg-gray-300"
              }`}
            >
              {activeStep > index ? (
                <FaCheck />
              ) : activeStep === index ? (
                <div className="h-2.5 w-2.5 bg-white rounded-full"></div>
              ) : (
                index + 1
              )}
            </div>
            <div className="ml-4">
              <h3
                className={`font-extrabold text-xl ${
                  activeStep === index ? "text-white" : "text-white"
                }`}
              >
                {step.label}
              </h3>
              {activeStep === index && (
                <p className="mt-2 text-gray-200">{step.description}</p>
              )}
            </div>
          </div>
          {activeStep === index && (
            <div className="ml-14 mt-2">
              <button
                className="bg-violet-600 text-white px-4 py-2 rounded mr-2 border-2 border-white"
                onClick={handleNext}
              >
                {index === steps.length - 1 ? "Finish" : "Continue"}
              </button>
              <button
                className="bg-white text-violet-900 px-4 py-2 rounded border-2 border-white"
                onClick={handleBack}
                disabled={index === 0}
              >
                Back
              </button>
            </div>
          )}
        </div>
      ))}
      {activeStep === steps.length && (
        <div className="p-4 text-center">
          <p className="text-gray-100">All steps completed - you're finished</p>
          <button
            className="bg-violet-600 text-white px-4 py-2 rounded mt-2 border-2 border-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalStepper;
