import React from "react";
import IconItems from "./ConnectWithMe/IconItems";

function Main() {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Katsumi</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Web Developer</h1>
          <p className="m-auto max-w-[70%] py-4 text-gray-600">
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
