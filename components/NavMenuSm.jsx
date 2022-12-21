import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../context/contextProvider";
import { getCategories } from "../services";

const NavMenuSm = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/sobre" },
  ];

  const { setCategories, categories } = useStateContext();
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="w-2/3 h-48 bg-orange-500 shadow-2xl rounded-b-lg">
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
          {categories.map((category, index) => (
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
