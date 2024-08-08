import { useState } from "react";
import Style from "./Footer.module.css";
import { useEffect } from "react";

function Footer() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Footer");
  }, []);
  return (
  
      

<footer class="  dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-2 md:py-6  bottom-0 ">
        <span class="block text-base text-white sm:text-center">Copyright © Your Website 2024</span>
    </div>
</footer>


  );
}
export default Footer;
