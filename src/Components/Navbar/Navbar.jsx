import { useState } from "react";
import Style from "./Navbar.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Navbar");
  }, []);
  return (
    <nav className=" border-gray-200 bg-teal-900 py-4 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-bold  whitespace-nowrap dark:text-white">
            START FRAMEWORK
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
            <li>
              <Link
                to={"about"}
                className="   block font-bold py-2 px-3 text-gray-900 rounded  focus:bg-emerald-500 focus:p-2 focus:rounded-md md:border-0  md:p-0 dark:text-white  "
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to={"portfolio"}
                className="block font-bold py-2 px-3 text-gray-900 rounded focus:bg-emerald-500 focus:p-2 focus:rounded-md md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                portfolio
              </Link>
            </li>
            <li>
              <Link
                to={"contact"}
                className="block font-bold py-2 px-3 text-gray-900 rounded focus:bg-emerald-500 focus:p-2 focus:rounded-md md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
