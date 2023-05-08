import Link from "next/link";
import { memo } from "react";
import { useStateContext } from "../../context/contextProvider";

const NavMenuSm = () => {
  const navLinks = [{ name: "Sobre", link: "/sobre" }];

  const { categories, open, setOpen } = useStateContext();

  return (
    <div
      className={`smooth-transition fixed h-full top-20 z-10  w-[300px]  bg-gradient-to-t from-black/50 to-orange-500 backdrop-blur-2xl
         p-5   ${open ? "right-0" : "-right-full"} pt-6`}
    >
      <div className="flex flex-col gap-2 ">
        {navLinks.map((link, index) => (
          <Link
            key={link.name + index}
            onClick={() => setOpen(false)}
            href={link.link}
            className={`font-bold font-mono text-white hover:text-black duration-300 pl-[33%] pb-3   `}
          >
            {link.name}
          </Link>
        ))}
        {categories.map((category, index) => (
          <Link
            onClick={() => setOpen(false)}
            key={category.name + index}
            href={`/category/${category.slug}`}
            className={`mt-2 pl-[33%] pb-3  `}
          >
            <span className=" font-semibold font-mono text-white hover:text-black duration-300  ">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(NavMenuSm);
