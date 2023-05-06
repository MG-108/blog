import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

import { grpahCMSImageLoader } from "../../util";
import { getRecentPosts, getSimilarPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
  const fetchPostWidget = async (categories, slug) => {
    let response;
    if (slug) {
      response = await getSimilarPosts(categories, slug);
    } else {
      response = await getRecentPosts();
    }
    return response;
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetchPostWidget(categories, slug);
  //       setRelatedPosts(response);
  //     } catch (error) {
  //       // Handle the error here
  //       console.error(error);
  //     }
  //   };
  //   getData();
  // }, [slug]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["relatedPostsData"],
    queryFn: async () => {
      const response = await fetchPostWidget(categories, slug);
      return response;
    },
  });

  if (isLoading) return <div>Carregando</div>;

  return (
    <div className="bg-white  dark:bg-secondary-dark-bg shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 text-orange-500 font-mono">
        {slug ? "Posts Relacionados" : "Posts Recentes"}
      </h3>
      {data.map((post) => (
        <div
          key={post.title + post.createdAt}
          className="flex items-center w-full mb-4"
        >
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-xl "
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 dark:text-white font-xs">
              {moment(post.createdAt).format("DD/MM/YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className=" dark:text-white font-semibold "
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
