import { useState } from "react";
import { useEffect } from "react";
function App() {
  const initialColor = localStorage.getItem("selectedColor") || "olive";

  const [color, setColor] = useState(initialColor);

  localStorage.setItem("selectedColor", color);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2 "
      >
        <div
          className="flex flex-wrap justyfy-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
