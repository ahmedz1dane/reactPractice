import { useState } from "react";

// useState is a hook , that means ,in react if we need to change the state
// of a vatiable in UI we can use this hook

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  let addVal = (cnt) => {
    cnt = cnt + 1;
    if (cnt < 21) {
      setCounter(cnt);
    }
  };

  let removeVal = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Ahmed Zidane </h1>
      <h2>counter val : {counter}</h2>
      <button onClick={() => addVal(counter)}>Add val</button>
      {/* when calling function with parameters in react  we should 
      do it as above and it should
      be be enclosed in a {} , since it is passed as reference */}

      <button onClick={removeVal}>Remove val</button>
      {/* if arguments are not passed to the function we can call it 
      as mentioned above */}
    </>
  );
}

export default App;
