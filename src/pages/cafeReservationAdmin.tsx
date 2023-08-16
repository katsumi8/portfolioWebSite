import Image from "next/image";
import React from "react";
import cafeReservationAdminImg from "../../public/assets/projects/cafeReservationAdmin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function cafeReservationAdmin() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
        <Image
          className="z-1 absolute object-cover"
          fill={true}
          src={cafeReservationAdminImg}
          alt="/"
        />
        <div className="absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h2 className="py-2">Property finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
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
          <div className="mt-4 flex space-x-4">
            <button
              className="px-8 py-2"
              onClick={() =>
                window.open("https://reservation-frontend-admin.vercel.app/")
              }
            >
              Demo
            </button>
            <button
              className="p-2"
              onClick={() =>
                window.open(
                  "https://github.com/katsumi8/reservation-frontend-admin",
                )
              }
            >
              Code(Frontend)
            </button>
            <button
              className="p-2"
              onClick={() =>
                window.open("https://github.com/katsumi8/reservation-backend")
              }
            >
              Code(Backend)
            </button>
          </div>
        </div>
        <div className="col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className="p-2">
            <p className="pb-2 text-center font-bold">Technologies</p>
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
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default cafeReservationAdmin;
