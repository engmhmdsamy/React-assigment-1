import { useState } from "react";
import Style from "./Home.module.css";
import { useEffect } from "react";
import pic from "../../assets/imgs/pic.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Home");
  }, []);
  return (
    <div className="bg-sky-400 text-center text-white w-full max-w-screen h-lvh py-56  ">
     <div className="">
     <img src={pic} className="w-64 m-auto  " alt="" />
      <h2 className="text-4xl font-bold text-center mt-5 "> START FRAMEWORK </h2>
      <div className="flex justify-center mt-2">
      <TfiLayoutLineSolid  className="text-4xl text-white" /> <TfiLayoutLineSolid  className="text-4xl text-white" /> 
        <TiStarFullOutline  className="text-4xl text-white" />
       <TfiLayoutLineSolid  className="text-4xl text-white" /> <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
     </div>
    </div>
  );
}
export default Home;
