import React from "react";
import SkillList from "./SkillList";

function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <SkillList />
      </div>
    </div>
  );
}

export default Skills;
