import Link from "next/link";
import { useStateContext } from "../../context/contextProvider";

const NavMenuSm = () => {
  const navLinks = [{ name: "Sobre", link: "/sobre" }];

  const { categories, open } = useStateContext();

  return (
    <div
      className={`smooth-transition fixed h-full top-20 z-10  w-2/3  bg-gradient-to-t from-black/50 to-orange-500 backdrop-blur-2xl
         p-5   ${open ? "left-0" : "-left-full"}`}
    >
      <div className="flex flex-col ml-6">
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className=" font-bold font-mono text-white hover:text-black duration-300 "
              >
                {link.name}
              </Link>
            </div>
          ))}
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="mt-2  "
            >
              <span className=" font-semibold font-mono text-white hover:text-black duration-300 ">
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
