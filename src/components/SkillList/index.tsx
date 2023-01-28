import React from "react";
import Skill from "./Skill";
import HtmlImg from "../../../public/assets/skills/html.png";
import CssImg from "../../../public/assets/skills/css.png";
import JSImg from "../../../public/assets/skills/javascript.png";
import TSImg from "../../../public/assets/skills/typescript.png";
import ReactImg from "../../../public/assets/skills/react.png";
import NextJSImg from "../../../public/assets/skills/nextjs.png";
import TailwindImg from "../../../public/assets/skills/tailwind.png";
import NodeImg from "../../../public/assets/skills/node.png";
import GraphQLImg from "../../../public/assets/skills/graphql.png";
import PrismaImg from "../../../public/assets/skills/prisma.png";
import PostgreSQLImg from "../../../public/assets/skills/postgresql.png";
import mongoImg from "../../../public/assets/skills/mongo.png";

const SkillList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Skill skillName={"HTML"} imgRawData={HtmlImg} />
      <Skill skillName={"CSS"} imgRawData={CssImg} />
      <Skill skillName={"JavaScript"} imgRawData={JSImg} />
      <Skill skillName={"Typescript"} imgRawData={TSImg} />
      <Skill skillName={"React"} imgRawData={ReactImg} />
      <Skill skillName={"NextJS"} imgRawData={NextJSImg} />
      <Skill skillName={"Tailwind"} imgRawData={TailwindImg} />
      <Skill skillName={"NodeJS"} imgRawData={NodeImg} />
      <Skill skillName={"GraphQL"} imgRawData={GraphQLImg} />
      <Skill skillName={"Prisma"} imgRawData={PrismaImg} />
      <Skill skillName={"PostgreSQL"} imgRawData={PostgreSQLImg} />
      <Skill skillName={"MongoDB"} imgRawData={mongoImg} />

    </div>
  );
};

export default SkillList;
