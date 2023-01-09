import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../context/contextProvider";
import { getCategories } from "../services";

const NavMenuSm = () => {
  const navLinks = [{ name: "Sobre", link: "/sobre" }];

  const { setCategories, categories } = useStateContext();
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="  h-full w-[300px] bg-orange-500 shadow-2xl rounded-b-lg z-10 fixed ">
      <div className="flex flex-col ml-6">
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className="text-lg font-bold font-mono text-white hover:text-black duration-250 "
              >
                {link.name}
              </Link>
            </div>
          ))}
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="text-lg font-semibold font-mono text-white hover:text-black duration-250 ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenuSm;
