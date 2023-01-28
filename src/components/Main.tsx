import React from "react";
import IconItems from "./ConnectWithMe/IconItems";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Katsumi</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a fullstack web developer specializing in building digital
            contents for Problem Solving with a great experience as a Business
            Analyst. I'm focused on building fullstack web application.
          </p>
          <IconItems style={"MAIN"} />
        </div>
      </div>
    </div>
  );
}

export default Main;
