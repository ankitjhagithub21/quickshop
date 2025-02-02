import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]} // Add Autoplay module here
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     

      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
