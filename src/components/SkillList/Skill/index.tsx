import React from "react";
import Image, { StaticImageData } from "next/image";

type SkillProps = {
  skillName: string;
  imgRawData: StaticImageData;
};

const Skill = ({ skillName, imgRawData }: SkillProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgRawData} alt="/" width="64" height="64" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
