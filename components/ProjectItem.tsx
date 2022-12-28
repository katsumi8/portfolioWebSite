import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  mainTech: string;
};

function ProjectItem({ title, backgroundImg, projectUrl, mainTech }: Props) {
  return (
    <div className="relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{mainTech}</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
