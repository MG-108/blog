import Head from "next/head";
import { useEffect } from "react";

import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

import { useStateContext } from "../context/contextProvider";

function Home({ posts }) {
  const { setTheme } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeMode) {
      setTheme(currentThemeMode);
    }
  }, []);

  return (
    <section className=" container mx-auto px-10  ">
      <Head>
        <title>Cripto Area | Informações sobre Criptomoedas e Blockchain</title>
        <meta
          name="description"
          content="No Cripto Area, você encontra as últimas notícias e análises de criptomoedas, além de insights exclusivos sobre a blockchain. Mantenha-se atualizado sobre as tendências do mercado e aproveite o conteúdo de qualidade. Visite o Cripto Area agora mesmo e fique por dentro do mundo das criptomoedas."
        />
        <meta
          name="keywords"
          content=" Criptomoedas, Blockchain, Tecnologia, Bitcoin, Ethereum, Altcoin, Nft, Defi,  cripto wallet, hard wallet, dinheiro digital"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1 lg:pb-6  ">
          <div className="lg:sticky relative top-2">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
