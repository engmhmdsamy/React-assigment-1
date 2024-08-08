// import { useState } from "react";
import Style from "./LayOut.module.css";
// import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";

function LayOut() {
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   console.log("Mounting LayOut");
  // }, []);
  return (
    <>
      <Navbar />
      <div className=" ">
        <Outlet />
      </div>
      <Social />
      <Footer />
    </>
  );
}
export default LayOut;
