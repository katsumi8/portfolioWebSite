import React from "react";
import Image from "next/image";
import ContactImg from "../../public/assets/contact.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import IconItems from "./ConnectWithMe/IconItems";
import Form from "./Form";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left side */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Katsumi Ishihara</h2>
                <p className="py-4">
                  I am available for freelance or full time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With me</p>
                <IconItems style={"CONTACT"} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <Form />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
