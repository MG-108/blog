import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/css/navigation";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
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
        {dataLoaded &&
          featuredPosts.map((post) => (
            <SwiperSlide
              key={post.slug}
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
