import { useState, useEffect, memo } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { getFeaturedPosts } from "../services";

import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { FeaturedPostCard } from "../components";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");

  const fetchFeaturedPosts = async () => {
    try {
      const response = await getFeaturedPosts();
      setFeaturedPosts(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  return (
    <div className=" mb-8">
      <Swiper
        slidesPerView={isAboveMediumScreens ? 3 : 1}
        spaceBetween={50}
        freeMode
        navigation
        modules={[FreeMode, Navigation]}
      >
        {featuredPosts.map((post) => (
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
