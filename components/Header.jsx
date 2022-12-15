import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";
import Theme from "./Theme";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className=" bg-orange-500 rounded-b-xl container mx-auto px-10 mb-8 ">
      <div className=" w-full inline-block py-2 pt-3 md:py-7">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white ">
              Cripto Area
            </span>
          </Link>
        </div>
        <div className="float-right block cursor-pointer mx-6">
          <Theme />
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
