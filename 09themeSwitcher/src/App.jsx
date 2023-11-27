import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

// IMP NOTE :

// when we are toggling b/w dark and light we need to make some
// change in the tailwing configuration , So go and check there

// WORKING :

// in order to change the color mode of a webpage we need to
// change the class of that webpage  , we can see that we are doing
// it in the line 35

function App() {
  // we havent defined any body for themeMode so we are doing it here :
  const [themeMode, SetThemeMode] = useState("light");

  // we havent given any code for the following two
  // functions in the context so we are providing them
  // some body
  const lightTheme = () => {
    SetThemeMode("light");
  };

  const darkTheme = () => {
    SetThemeMode("dark");
  };

  // Actual Changing of the the is as follows

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
