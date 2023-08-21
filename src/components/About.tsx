import React from "react";
import Image from "next/image";
import AboutImg from "../../public/assets/about.jpg";

function About() {
  return (
    <div id="about" className="flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#990000]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I build full stack applications. I'm passionate about learning new
            technologies and understand there is more than one way to accomplish
            a Problem Solving. I have experience in working as a full-stack
            developer, I build full stack applications using NextJS, ExpressJS,
            Prisma and I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not only coding,
            but also understanding a core issue for the Problem Solving.
          </p>
          <p className="py-2 text-gray-600">
            I started my career as consultant in 2017 implementing SAP, managing
            product localization, improving IT operation and business
            development. I have experience working directly with clients and
            managing issue trees to tackle the critical problem. In my spare
            time I learn coding, reading books related business field.
          </p>
          <p className="cursor-pointer py-2 text-gray-600 underline">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
