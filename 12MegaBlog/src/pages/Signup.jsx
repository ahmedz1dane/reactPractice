import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div
      className="py-8"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/pUAM5hPaCRI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzh8fHJlbmRlciUyMGJsb2d8ZW58MHwwfHx8MTcwNDg5NzE1OXww&force=true&w=2400')`, // Replace this URL with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <SignupComponent />
    </div>
  );
}

export default Signup;
