import React from "react";
import logo from "../img/2.jpg";

function Logoii({ width = "100px" }) {
  return (
    <div className="flex items-center flex-col">
      <div
        className="border-b-2 "
        style={{
          backgroundColor: "#7963fc",
          borderBlockColor: "#7963fc",
          width: "20px", // Adjust the width as needed
        }}
      ></div>
      <div className="text-black text-2xl">BLOG</div>
      <div
        className="text-black "
        style={{
          fontSize: "5px",
        }}
      >
        think creative
      </div>
    </div>
  );
}

export default Logoii;
