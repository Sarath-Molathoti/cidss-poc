import React from "react";
import VerticalStepper from "../../../components/VerticalStepper.jsx";
import Carousel from "./Caurousel.jsx";
const Main = () => {
  const steps = [
    {
      label: "Add Product",
      description: `Provide product details to add it to the Inventory Management System
                  `,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
                  .`,
    },
  ];
  return (
    <div className="grid grid-cols-12 h-full ">
      <div className="col-span-3 bg-violet-600 h-full rounded-tl-md rounded-bl-md p-4 shadow-md">
        <VerticalStepper steps={steps} />
      </div>
      <div className="col-span-9 bg-white border border-gray-300  rounded-tr-md rounded-br-md shadow-md">
        <Carousel />
      </div>
    </div>
  );
};

export default Main;
