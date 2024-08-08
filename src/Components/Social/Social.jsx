import { useState } from "react";
import Style from "./Social.module.css";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

function Social() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Social");
  }, []);
  return (
    <footer className="bg-white dark:bg-cyan-900 text-white">
     
        <div className="grid grid-cols-3 justify-between mx-auto py-12">


          <div className="flex flex-col py-14 text-center gap-2 font-semibold">
            <h1 className="text-3xl">LOCATION</h1>
            <p className="mb-2 text-l">2215 John Daniel Drive</p>
            <p className=" text-l">Clark, MO 65243</p>
          </div>


          <div className="py-14 flex flex-col text-center">
            <h1 className="text-3xl font-semibold">AROUND THE WEB</h1>

            <div className="flex justify-center mt-3 gap-4  "> 
            <FaFacebook className="border p-2 rounded-full text-4xl" /> <FaTwitter className="border p-2 rounded-full text-4xl" /> <FaLinkedinIn className="border p-2 rounded-full text-4xl" /> <TfiWorld className="border p-2 rounded-full text-4xl" />
            </div>
          </div>


          <div className="flex flex-col py-14 text-center gap-2 font-semibold ">
            <h1 className="text-3xl">ABOUT FREELANCER</h1>
            <p className="mb-2 text-l">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>



      </div>
      
    </footer>
  );
}
export default Social;
