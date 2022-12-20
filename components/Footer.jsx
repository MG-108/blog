import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineCopyright } from "react-icons/md";
import logo from "../public/Logo.svg";

const Footer = () => {
  const footerLinks = [
    { name: "Privacidade", link: "/politica-de-privacidade" },
    { name: "Termos de Uso", link: "/termos-de-uso" },
    { name: "Contato", link: "/contato" },
    { name: "Sobre", link: "/sobre" },
  ];
  return (
    <div className=" flex flex-col bg-orange-500 w-full mt-8 py-12 lg:py-10 ">
      <div className="flex justify-evenly items-center ">
        <div className="mx-6">
          <Link href="/">
            <div className="flex items-center">
              <span>
                <Image
                  src={logo}
                  alt="logo do cripto area"
                  className="rounded-full w-16 h-16"
                />
              </span>
              <span className=" pl-2 cursor-pointer font-bold text-2xl md:text-4xl text-white hover:text-black transition duration-500 ease">
                Cripto Area
              </span>
            </div>
          </Link>
        </div>

        <div className="mx-6 lg:flex lg:flex-row">
          {footerLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className="p-1 md:p-2 lg:px-3  text-sm font-semibold text-white hover:text-black  transition duration-500 ease"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className=" flex flex-row mt-4  text-sm font-semibold text-white ">
          <span className="px-2">
            <MdOutlineCopyright size={20} />
          </span>
          Cripto Area - Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;
