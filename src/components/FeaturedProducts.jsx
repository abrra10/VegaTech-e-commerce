import React, { forwardRef } from "react"; // Import forwardRef
import EcommerceCard from "./Card";
import useFetch from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const FeaturedProducts = forwardRef(({ type }, ref) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <section ref={ref} className="my-24 mx-auto max-w-[90%] lg:max-w-[80%]">
      <div className="flex items-center justify-between mb-12 p-2">
        <h1 className="text-3xl sm:text-2xl xs:text-xl font-Primary capitalize border-b-4 border-black pb-2">
          {type}
        </h1>
      </div>

      {loading ? (
        <div className="text-gray-500">Chargement...</div>
      ) : error ? (
        <div className="text-red-500">Une erreur s'est produite !</div>
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Pass the layout prop as 'featured' */}
              <EcommerceCard item={item} layout="featured" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
});

export default FeaturedProducts;
