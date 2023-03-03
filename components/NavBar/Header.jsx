import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useStateContext } from "../../context/contextProvider";
import { NavLinks, NavMenuSm, Theme } from "..";
import { GrClose } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
import logo from "../../public/Logo.svg";

const Header = () => {
  const { open, setOpen } = useStateContext();

  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <div className="fixed w-screen z-10 top-0 ">
      <div className=" bg-orange-500 shadow-lg   px-4 md:px-8 lg:px-16   ">
        <div className="flex items-center justify-between py-5 ">
          {/* MOBILE MENU BUTTON (close, open) */}
          {isMobile ? (
            <div>
              <button
                onClick={() => setOpen((prevOpen) => !prevOpen)}
                className="text-3xl cursor-pointer "
              >
                <span>
                  {open ? <GrClose size={30} /> : <BiMenu size={30} />}
                </span>
              </button>
            </div>
          ) : null}
          {/* NAV LOGO AND NAME */}

          <Link href="/">
            <div className="flex items-center">
              <span>
                <Image
                  src={logo}
                  alt="logo do cripto area"
                  className="rounded-full md:w-16 md:h-16  w-12 h-12"
                />
              </span>
              <span className=" pl-2 cursor-pointer font-bold font-mono text-xl md:text-4xl text-white  ">
                Cripto Area
              </span>
            </div>
          </Link>

          {/*min-medium devices  CATEGORIES NAVLINKS */}
          {!isMobile ? <NavLinks /> : null}

          {/* THEME SELECT */}

          <div className="cursor-pointer ">
            <Theme />
          </div>
        </div>
      </div>
      {/* MOBILE SIDEBAR MENU */}
      {isMobile ? (
        <div>
          <NavMenuSm />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
