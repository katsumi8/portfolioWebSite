import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import NavLogoImg from "../../public/assets/navLogo.png";
import { BackGroundColor } from "@src/types/state";

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<BackGroundColor>("#ecf0f3");
  const [linkColor, setLinkColor] = useState<BackGroundColor>("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/cafeReservation" ||
      router.asPath === "/cafeReservationAdmin" ||
      router.asPath === "/kanpaiList"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed z-[100] h-20 w-full shadow-xl"
          : "fixed z-[100] h-20 w-full"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href={"/"}>
          <Image src={NavLogoImg} alt="/" width="125" height="50" />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/"}>
                <Image src={NavLogoImg} alt="/" width="87" height="35" />
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] py-4 md:w-[90%]">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#990000]">
                Let's connect
              </p>
              <div className="my-4 flex w-full items-center justify-between sm:w-[80%]">
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <FaGithub />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
