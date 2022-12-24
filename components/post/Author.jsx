import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute mx-5 -top-14">
        <Image
          loader={grpahCMSImageLoader}
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;