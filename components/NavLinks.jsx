import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../context/contextProvider";
import { getCategories } from "../services";

const NavLinks = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/sobre" },
  ];

  const { setCategories, categories } = useStateContext();
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="hidden md:block lg:flex ">
      <div className="md:flex ">
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link
              href={link.link}
              className=" px-1 lg:px-3  text-lg font-semibold dark:text-white dark:hover:text-black duration-250 hover:text-white duration-250"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      {categories.map((category, index) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className=" px-1 lg:px-3 text-lg font-semibold dark:text-white dark:hover:text-black duration-250 hover:text-white duration-250">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
