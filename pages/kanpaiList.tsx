import Image from "next/image";
import React from "react";
import kanpaiListImg from "../public/assets/projects/kanpaiList.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function property() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill={true}
          src={kanpaiListImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Sold Out List</h2>
          <h3>React JS / Tailwind / Typescript / Express JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This app was built using React and is hosted on Firebase. Users are
            able to add an item that is out of stock and retrieve the list.
          </p>
          <h4>【Problem】</h4>
          <p>
            Staff had sometimes communication error or Staff forgot what they
            don't have on menu that day.
          </p>
          <h5>【Effect】</h5>
          <p>
            App make it easy for staff to check what is out of stack from
            everywhere.
          </p>
          <button
            className="px-8 py-2 mt-4 mr-8"
            onClick={() => window.open("https://kanpai-list-frontend.web.app/")}
          >
            Demo
          </button>
          <button
            className="px-8 py-2 mt-4F"
            onClick={() =>
              window.open("https://github.com/katsumi8/sold-out-list-frontend")
            }
          >
            Code
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongo DB
              </p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default property;
