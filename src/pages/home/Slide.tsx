import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

// Import your images
import image1 from '../../assets/mario-pixel-art.gif'
import image2 from '../../assets/eng.gif';
import image3 from '../../assets/pixil-draw.gif';
// ... import other images

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ImageSlide() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" />
        </SwiperSlide>
        {/* Adicionar mais imagens */}
      </Swiper>
    </>
  );
}