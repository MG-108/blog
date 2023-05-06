import Link from "next/link";

import { getCategories } from "../services";
import { useStateContext } from "../context/contextProvider";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  const { setCategories, categories } = useStateContext();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categoriesData"],
    queryFn: async () => {
      const response = await getCategories();

      setCategories(response);

      return response;
    },
  });

  if (isLoading) return <div></div>;

  return (
    <div className="bg-white  dark:bg-secondary-dark-bg  shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 text-orange-500 font-mono">
        Categorias
      </h3>
      {data.map((category, index) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3 text-black dark:text-white font-semibold`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
