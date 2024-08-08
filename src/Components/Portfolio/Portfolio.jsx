import { useState } from "react";
import Style from "./Portfolio.module.css";
import { useEffect } from "react";
import bet from "../../assets/imgs/bet.png";
import kake from "../../assets/imgs/kake.png";
import shamsia from "../../assets/imgs/shamsia.png";
import { TiStarFullOutline } from "react-icons/ti";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Portfolio() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Portfolio");
  }, []);
  return (
 <>
    <h1 className="text-center mt-8 font-bold text-5xl text-cyan-950">
    PORTFOLIO SECTION
      </h1>
      <div className="flex justify-center mt-4 ">
      <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
        <TiStarFullOutline  className="text-4xl text-cyan-950" />
       <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
      </div>
 
<div className="grid grid-cols-3 m-64 gap-14 mt-10 ">
 <div className="">
    <img className="h-auto max-w-full rounded-lg  " src={bet} alt />
  </div> 
  <div>
    <img className="h-auto max-w-full rounded-lg" src={kake} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={shamsia} alt />
  </div>
    <div>
    <img className="h-auto max-w-full rounded-lg" src={bet} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={kake} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={shamsia} alt />
  </div>

  
</div>

</>
  );
}
export default Portfolio;
