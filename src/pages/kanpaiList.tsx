import Image from "next/image";
import React from "react";
import kanpaiListImg from "../../public/assets/projects/kanpaiList.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function kanpaiList() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
        <Image
          className="z-1 absolute object-cover"
          fill={true}
          src={kanpaiListImg}
          alt="/"
        />
        <div className="absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h2 className="py-2">Sold Out List</h2>
          <h3>React JS / Tailwind / Typescript / Express JS</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
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
            className="mt-4 mr-8 px-8 py-2"
            onClick={() => window.open("https://kanpai-list-frontend.web.app/")}
          >
            Demo
          </button>
          <button
            className="mt-4F px-8 py-2"
            onClick={() =>
              window.open("https://github.com/katsumi8/sold-out-list-frontend")
            }
          >
            Code
          </button>
        </div>
        <div className="col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className="p-2">
            <p className="pb-2 text-center font-bold">Technologies</p>
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
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default kanpaiList;
