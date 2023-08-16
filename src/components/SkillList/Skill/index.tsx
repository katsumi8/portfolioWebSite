import React from "react";
import Image, { StaticImageData } from "next/image";

type SkillProps = {
  skillName: string;
  imgRawData: StaticImageData;
};

const Skill = ({ skillName, imgRawData }: SkillProps) => {
  return (
    <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
      <div className="grid grid-cols-2 items-center justify-center gap-4">
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
