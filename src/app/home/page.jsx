import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the IndiaMap component to prevent SSR issues
const IndiaMap = dynamic(() => import("../../components/IndiaMap"), {
  ssr: false,
});

const Content = () => {
  return (
    <div className="h-full w-full bg-gray-100">
      {/* <div>
        <IndiaMap />
      </div> */}
    </div>
  );
};

export default Content;
