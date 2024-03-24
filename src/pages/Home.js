import React from "react";

function Home({ isLoggedIn }) {
  return (
    <div className="flex justify-center items-center text-cyan-50 text-3xl h-full">
      <div>
        <h2 className=" text-center align-middle w-screen h-screen bg-slate-950 flex flex-col text-cyan-50">
          Login to visit Dashboard
        </h2>
      </div>
    </div>
  );
}

export default Home;
