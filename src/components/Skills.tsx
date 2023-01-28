import React from "react";
import SkillList from "./SkillList";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="tracking-widest text-xl uppercase text-[#5651e5]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <SkillList />
      </div>
    </div>
  );
}

export default Skills;
