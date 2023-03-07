import { useState, useEffect } from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/css/navigation";

import { FeaturedPostCard, Loader } from "../components";
import { getFeaturedPosts } from "../services";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");

  const fetchFeaturedPosts = async () => {
    setLoading(true);
    try {
      const response = await getFeaturedPosts();
      setFeaturedPosts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  return (
    <div className=" mb-8">
      {loading ? (
        <Loader />
      ) : (
        <Swiper
          slidesPerView={isAboveMediumScreens ? 3 : 1}
          spaceBetween={50}
          freeMode
          navigation
          modules={[FreeMode, Navigation]}
        >
          {featuredPosts.map((post) => (
            <SwiperSlide
              key={post.slug}
              style={{ width: "25%", height: "auto" }}
            >
              <FeaturedPostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedPosts;
