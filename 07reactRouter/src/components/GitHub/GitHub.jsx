import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ahmedz1dane")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //     console.log("haaai");
  //   }, []);

  // we can run the above code without useing useEffect
  // but the problem while using like that is ,
  // in the above code we aare using useState
  //  this useState will cause the re-rendering
  // so the code will starts executing from the start
  // this will cause this component to be executed infinitely
  // Because we are using useEffect with empty array
  // array as dependency  here , the code inside it
  // will onlybe executed once after the inital render
  // so when the code starts Executing after the initial
  // render it will coe across setData which updates the data
  // and cause re-render which will cause for the optimacy
  // of the code

  return (
    <div
      className="text-center  bg-gradient-to-r from-grey-100 to-grey-50
  text-black-300 p-4 text-3xl w-full max-w-screen-xl mx-auto"
    >
      Followers:{data.followers}{" "}
      <img className="rounded" src={data.avatar_url} width="200" alt="" />
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const respose = await fetch("https://api.github.com/users/ahmedz1dane");
  return respose.json();
};

// async will only be used when we are using doing
// asyncroonous task like fetching an api etc.
// thus we need to use await and json()
// but we can also do this without using async() await
