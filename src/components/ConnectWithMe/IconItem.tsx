import React from "react";

type Props = {
  url?: string;
  children: React.ReactNode;
  newTab: boolean;
};

function IconItem({ url, children, newTab }: Props) {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : ""}
      rel={newTab ? "noopener noreferrer" : ""}
      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
    >
      {children}
    </a>
  );
}

export default IconItem;
