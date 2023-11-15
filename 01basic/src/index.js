import React from "react"; // this object is typically needed for creating react components
import ReactDOM from "react-dom/client"; // this object provides methods for rendering react components
import App from "./App";

function Zidane() {
  return <h1>hai</h1>;
}

const anotherElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "clickme"
);

const Anchor = <a href="google.com">click</a>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(anotherElement);
