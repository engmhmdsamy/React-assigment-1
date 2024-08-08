import { useState } from "react";
import Style from "./About.module.css";
import { useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function About() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting About");
  }, []);
  return (
    <div className="bg-sky-500  p-12 h-lvh py-72">
      <h2 className="text-4xl text-center font-bold mb-4 text-white "> ABOUT COMPONENT </h2>
      <div className="flex justify-center mb-4 mt-2">
      <TfiLayoutLineSolid  className="text-4xl text-white" /> <TfiLayoutLineSolid  className="text-4xl text-white" /> 
        <TiStarFullOutline  className="text-4xl text-white" />
       <TfiLayoutLineSolid  className="text-4xl text-white" /> <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      </div>
     <div className="flex justify-center gap-5 text-white"> <p>
        Freelancer is a free bootstrap theme created by Route. The download
        includes <br /> the complete source files including HTML, CSS, and JavaScript
        as well as <br /> optional SASS stylesheets for easy customization.
      </p>
      <p>
        Freelancer is a free bootstrap theme created by Route. The download
        includes <br /> the complete source files including HTML, CSS, and JavaScript
        as well as <br /> optional SASS stylesheets for easy customization.
      </p></div>
    </div>
  );
}
export default About;
