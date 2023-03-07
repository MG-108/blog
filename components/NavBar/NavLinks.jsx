import Link from "next/link";
import { useStateContext } from "../../context/contextProvider";

const NavLinks = () => {
  const { categories } = useStateContext();

  return (
    <div className="hidden md:block lg:flex font-mono ">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className=" px-1 lg:px-3 text-lg font-semibold text-white hover:text-black  transition duration-300 ease">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
