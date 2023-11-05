import story1 from "../../assets/story1.svg"
import story2 from "../../assets/story2.svg"
import slide1 from "../../assets/slide1.svg"
import slide2 from "../../assets/slide2.svg"
import slide3 from "../../assets/slide3.svg"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



import "./Story.css"
const Story = () => {
  return (
    <div className="dark:text-white dark:bg-gray-800">
      <div className=" lg:flex gap-[40px] pt-[100px]"> 
        <div className="lg:w-[35%] sm:text-center lg:text-left sm:pb-[40px] lg:ml-[70px] sm:ml-[5%] sm:pr-[5%] lg:pr-[0]">
            <p className="text-[24px] text-[#056088] font-bold mb-[20px]">Villa De Borusdz</p>
            <p className="mb-[20px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="text-[#056088] text-[24px] font-bold">Budget : $90.000 <span className="ml-[30px]">Time : 3 months</span></p>
        </div>

        <div>
          <img src={story1} className="sm:w-[95%] lg:w-[100%] sm:m-auto" alt="" />
        </div>
      </div>

      <div className="mb-[-100px] pt-[100px] flex justify-center">
        <img src={story2} className="sm:w-[95%] lg:w-[80%]" alt="" />
      </div>

      <div className="storyHero w-[100%] h-[470px] ">
        <div className="text-center text-[30px] font-bold text-white" >
          <p className="pt-[250px]">Gallery</p>
        </div>
      </div>

      <div >
      <div className="ml-[70px] pr-[70px] mt-[-100px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} className="sm:w-[100%] lg:w-[100%]" alt="" /> </SwiperSlide>
        <SwiperSlide><img src={slide2} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} className="sm:w-[100%] lg:w-[100%]" alt="" /></SwiperSlide>
      </Swiper>
    </div>

      </div>
    </div>
  )
}

export default Story