import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { grpahCMSImageLoader } from "../../util";
import { getRecentPosts, getSimilarPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white  dark:bg-secondary-dark-bg shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 text-orange-500 font-mono">
        {slug ? "Posts Relacionados" : "Posts Recentes"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full "
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
