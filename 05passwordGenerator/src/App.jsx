import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassowrd] = useState("");

  //useRef hook doesnt cause any re-rendering as of useState
  // in case of useState , the value of the variable wont be changed immedietly
  // it will only be changed in the next render
  // burt in case of useRef it is not like that
  const passwordRef = useRef(null);

  // One reason to use useCallback is to prevent a component from
  //  re-rendering unless its components have changed

  // we can do the following function without using useCallback also
  //but it is used fot the purpose of optimization
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "{}[]!@#$%^&*_+-=<>.,/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassowrd(pass);
  }, [length, numberAllowed, charAllowed, setPassowrd]); // here setPassword is used for optimization  purpose , it will work nicely even if setPassword is not there

  //in the following case
  //When any of these dependencies change, the useEffect will trigger
  //and call the passwordGenerator function to generate a new password
  // based on the updated conditions.

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select(); // here in the case of current?
    // ? ise used to ensure tha passwordRef is not empty
    // then only the elements will be selected
  });
  //here in case of the above function if we need we can give password as the dependency

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 "
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
          className="flex shadow rounded-lg overflow-hidden
        mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            {/* here shrink-0 is used to ensure that the button wont shrink than the initial size */}
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(g) => {
                setLength(g.target.value);
              }}
            />

            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
                // the above code is a shortcut for the following

                // const toggleNumberAllowed = (prev) => {
                //   const newStateValue = !prev;
                //   return newStateValue;
                // };
              }}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
