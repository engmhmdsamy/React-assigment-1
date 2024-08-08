import { useState } from "react";
import Style from "./NotFound.module.css";
import { useEffect } from "react";

function NotFound() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting NotFound");
  }, []);
  return (
    <div>
      <h2> NotFound </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        aliquid porro, numquam, culpa dolor accusamus et sapiente praesentium
        sequi est inventore necessitatibus atque similique, enim autem debitis
        quo aspernatur amet?
      </p>
    </div>
  );
}
export default NotFound;
