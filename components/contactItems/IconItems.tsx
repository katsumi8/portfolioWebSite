import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import IconItem from "./IconItem";
import Link from "next/link";

type IconItemsProps = {
  style: "CONTACT" | "MAIN";
};

function IconItems({ style }: IconItemsProps) {
  return (
    <div
      className={
        style === "CONTACT"
          ? "flex items-center justify-between py-4"
          : "flex items-center justify-between max-w-[330px] m-auto py-4"
      }
    >
      <IconItem
        url={"https://www.linkedin.com/in/katsumi-ishihara-99371b15a/"}
        newTab={true}
      >
        <FaLinkedinIn />
      </IconItem>
      <IconItem url={"https://github.com/katsumi8"} newTab={true}>
        <FaGithub />
      </IconItem>
      <IconItem url={"mailto:katsumi.ishihara08@gmail.com"} newTab={true}>
        <AiOutlineMail />
      </IconItem>
      <IconItem url="/#contact" newTab={false}>
        {/* <Link href="/#contact"> */}
        <BsFillPersonLinesFill />
      </IconItem>
    </div>
  );
}

export default IconItems;
