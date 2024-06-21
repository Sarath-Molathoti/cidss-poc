"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Login from "./home/login/page";
import Header from "./home/header/page";
import NavBar from "./home/navbar/page";
import Content from "./home/content/page";
import { revalidatePath } from "next/cache";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("loggedIn"));
    if (storedUserDetails && storedUserDetails === "true") {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      router.replace("/");
    }
  }, [loggedIn, router]);

  return <div>{loggedIn ? "" : <Login setLoggedIn={setLoggedIn} />}</div>;
};

export default Home;
