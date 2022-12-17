import React from "react";
import Link from "next/link";
import { useStateContext } from "../context/contextProvider";
import { NavLinks, NavMenuSm, Theme } from "./";
import { GrClose } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const { open, setOpen } = useStateContext();

  return (
    <div className="mb-8 ">
      <div className=" bg-orange-500 shadow-lg w-full  mx-auto   px-10 lg:px-16 ">
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
              <span className="cursor-pointer font-bold md:text-4xl text-2xl dark:text-white dark:hover:text-black duration-250 hover:text-white duration-250 ">
                Cripto Area
              </span>
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
