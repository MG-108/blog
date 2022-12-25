import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg shadow-xl rounded-lg mx-10 md:mx-16  p-3 md:p-6 lg:p-10  dark:text-white mb-80">
      <Head>
        <title>Entre em contato com o Cripto Area - My Site</title>
        <meta
          name="description"
          content="Entre em contato com o Cripto Area para esclarecer dúvidas ou obter mais informações sobre criptomoedas."
        />
        <meta
          name="keywords"
          content="contato, Cripto Area, criptomoedas, dúvidas, informações"
        />
        <link rel="canonical" href="https://www.example.com/contact" />
      </Head>
      <h1 className="text-2xl font-bold mt-4 mb-4 text-center lg:text-left">
        Entre em contato com o <b className="text-orange-500 ">Cripto Area</b>!
      </h1>
      <p className="mb-2">
        Obrigado por visitar o nosso site. Se você tiver alguma dúvida ou precisar de
        mais informações, entre em contato conosco pelo e-mail abaixo.
      </p>
      <p className="mb-2 text-xl font-bold">criptoarea3@gmail.com</p>
    </div>
  );
};

export default Contact;
