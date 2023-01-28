import React from "react";
import Image from "next/image";
import AboutImg from "../../public/assets/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I build full stack applications. I'm passionate about learning new
            technologies and understand there is more than one way to accomplish
            a Problem Solving. Though I don't have experience in working as a
            developer, I build full stack applications using NextJS, ExpressJS,
            GraphQL, Prisma and I am a quick learner and can pick up new tech
            stacks as needed. I believe that being a great developer is not only
            coding, but also understanding a core issue for the Problem Solving.
          </p>
          <p className="py-2 text-gray-600">
            I started my career as consultant in 2017 implementing SAP, managing
            product localization, improving IT operation and business
            development. I have experience working directly with clients and
            managing issue trees to tackle the critical problem. In my spare
            time I learn coding, reading books related business field.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
