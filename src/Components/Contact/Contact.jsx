import { useState } from "react";
import Style from "./Contact.module.css";
import { useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Contact() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Contact");
  }, []);
  return (
    <div>
      <h1 className="text-center mt-8 font-bold text-5xl text-cyan-950">
        CONTACT SECTION
      </h1>
      <div className="flex justify-center mt-4">
      <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
        <TiStarFullOutline  className="text-4xl text-cyan-950" />
       <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
      </div>

      <form className="max-w-4xl mx-auto mt-28">
        <div className="relative z-0 w-full mb-10 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-3.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  dark:border-zinc-400 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bborder-black-600 peer-focus:dark:text-bborder-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userName :
          </label>
        </div>
        <div className="relative z-0 w-full mb-10 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-3.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  dark:border-zinc-400 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bborder-black-600 peer-focus:dark:text-bborder-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userAge :
          </label>
        </div>
        <div className="relative z-0 w-full mb-10 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-3.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  dark:border-zinc-400 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bborder-black-600 peer-focus:dark:text-bborder-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userEmail :
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-3.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  dark:border-zinc-400 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bborder-black-600 peer-focus:dark:text-bborder-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userPassword :
          </label>
        </div>

        <button
          type="submit"
          className="mb-44 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
