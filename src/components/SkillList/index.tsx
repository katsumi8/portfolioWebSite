import React from "react";
import Skill from "./Skill";
import TSImg from "../../../public/assets/skills/typescript.png";
import NextJSImg from "../../../public/assets/skills/nextjs.png";
import TailwindImg from "../../../public/assets/skills/tailwind.png";
import NodeImg from "../../../public/assets/skills/node.png";
import GraphQLImg from "../../../public/assets/skills/graphql.png";
import PrismaImg from "../../../public/assets/skills/prisma.png";
import PostgreSQLImg from "../../../public/assets/skills/postgresql.png";
import GolangImg from "../../../public/assets/skills/golang.png";
import RustImg from "../../../public/assets/skills/rust.png";

const SkillList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <Skill skillName={"Typescript"} imgRawData={TSImg} />
      <Skill skillName={"NextJS"} imgRawData={NextJSImg} />
      <Skill skillName={"Tailwind"} imgRawData={TailwindImg} />
      <Skill skillName={"Golang"} imgRawData={GolangImg} />
      <Skill skillName={"NodeJS"} imgRawData={NodeImg} />
      <Skill skillName={"Rust"} imgRawData={RustImg} />
      <Skill skillName={"PostgreSQL"} imgRawData={PostgreSQLImg} />
      <Skill skillName={"GraphQL"} imgRawData={GraphQLImg} />
      <Skill skillName={"Prisma"} imgRawData={PrismaImg} />
    </div>
  );
};

export default SkillList;
