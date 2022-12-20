import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";
import { useStateContext } from "../context/contextProvider";

const Categories = () => {
  const { setCategories, categories } = useStateContext();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white  dark:bg-secondary-dark-bg shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 dark:text-white">
        Categorias
      </h3>
      {categories.map((category, index) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3 text-orange-500 font-semibold`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
