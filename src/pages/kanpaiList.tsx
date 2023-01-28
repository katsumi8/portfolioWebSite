import Image from "next/image";
import React from "react";
import kanpaiListImg from "../../public/assets/projects/kanpaiList.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function kanpaiList() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute object-cover z-1"
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
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                ExpressJS
              </p>
              <p className="flex items-center py-2 text-gray-600">
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

export default kanpaiList;
