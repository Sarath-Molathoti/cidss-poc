"use client";
import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
// Dynamically import the IndiaMap component to prevent SSR issues
const IndiaMap = dynamic(() => import("../../../components/IndiaMap"), {
  ssr: false,
});
const Content = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("loggedIn"));
    if (storedUserDetails && storedUserDetails === "true") {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div className="w-full h-full flex-grow">{loggedIn && <IndiaMap />}</div>
  );
};

export default Content;
