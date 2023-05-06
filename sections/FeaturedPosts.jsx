import useMediaQuery from "../hooks/useMediaQuery";
import { getFeaturedPosts } from "../services";
import { useQuery } from "@tanstack/react-query";

import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { FeaturedPostCard } from "../components";

const FeaturedPosts = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");

  const { data, isLoading, error } = useQuery({
    queryKey: ["swiperData"],
    queryFn: async () => {
      const response = await getFeaturedPosts();

      return response;
    },
  });

  if (isLoading) return <div></div>;

  return (
    <div className=" mb-8">
      <Swiper
        slidesPerView={isAboveMediumScreens ? 3 : 1}
        spaceBetween={50}
        freeMode
        navigation
        modules={[FreeMode, Navigation]}
      >
        {data.map((post) => (
          <SwiperSlide
            key={post.createdAt}
            style={{ width: "25%", height: "auto" }}
          >
            <FeaturedPostCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedPosts;
