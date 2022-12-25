import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../context/contextProvider";
import { NavLinks, NavMenuSm, Theme } from "./";
import { GrClose } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
import logo from "../public/Logo.svg";

const Header = () => {
  const { open, setOpen } = useStateContext();

  return (
    <div className="mb-8 ">
      <div className=" bg-orange-500 shadow-lg  w-full  px-4 md:px-8 lg:px-16  ">
        <div className="flex items-center justify-between py-5 md:py-7 ">
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointer md:hidden"
            >
              <span>{open ? <GrClose size={30} /> : <BiMenu size={30} />}</span>
            </button>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center">
                <span>
                  <Image
                    src={logo}
                    alt="logo do cripto area"
                    className="rounded-full md:w-16 md:h-16  w-12 h-12"
                  />
                </span>
                <span className=" pl-2 cursor-pointer font-bold font-mono text-xl md:text-4xl text-white hover:text-black transition duration-500 ease">
                  Cripto Area
                </span>
              </div>
            </Link>
          </div>
          <NavLinks />
          <div>
            <div className="cursor-pointer ">
              <Theme />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">{open ? <NavMenuSm /> : null}</div>
    </div>
  );
};

export default Header;
