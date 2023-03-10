import Image from "next/image";
import React from "react";
import cafeReservationAdminImg from "../../public/assets/projects/cafeReservationAdmin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function cafeReservationAdmin() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute object-cover z-1"
          fill={true}
          src={cafeReservationAdminImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This app was built using Next and is hosted on Vercel. For the
            backend, this app is built using GraphQL and prisma and Typescript
            and is hosted XXX. Users are able to reserve a table and also select
            which table they want to have.
          </p>
          <h4>【Problem】</h4>
          <p>
            Customers cannot choose a seat. Sometimes even customers reserve a
            seat but when they came, there is only tables outside available. And
            they were not happy.
          </p>
          <h5>【Effect】</h5>
          <p>
            Users now can choose which table they want to sit before coming so
            that there is no gap about where to sit.
          </p>
          <button
            className="px-8 py-2 mt-4 mr-8"
            onClick={() => window.open("https://reservation-frontend-admin.vercel.app/")}
          >
            Demo
          </button>
          <button
            className="px-8 py-2 mt-4F"
            onClick={() =>
              window.open(
                "https://github.com/katsumi8/reservation-frontend-admin"
              )
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
                Next JS
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
                Graph QL
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                PostgreSQL
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

export default cafeReservationAdmin;
