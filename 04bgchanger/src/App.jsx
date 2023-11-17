import { useState } from "react";
function App() {
  let initialval;

  // when we are using the local storage if we are storing
  // string , there is no need to use stringify and parse
  // but in this case we just used if for the purpose of study
  // Here first we took one item from the localstorage
  // and named it initialColor
  // the value of it will be null , so we change it into olive
  // then
  // whenever we press the button we add that value to localstorage
  //when we refresh the webpage we will check whether the value of
  //initialColor is null or not
  //id it is not null we will parse it and store it into initialval

  const initialColor = localStorage.getItem("selectedColor");
  if (initialColor === null) {
    initialval = "olive";
    localStorage.setItem("initialColor", JSON.stringify(initialval));
  } else {
    initialval = JSON.parse(initialColor);
  }
  const [color, setColor] = useState(initialval);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    localStorage.setItem("selectedColor", JSON.stringify(newColor));
  };

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
            onClick={() => handleColorChange("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => handleColorChange("blue")}
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
