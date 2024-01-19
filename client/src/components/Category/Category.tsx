import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryData } from '../../helpers/interface';
import { customRenderBullet } from '../../helpers/customSwiper';
import { categoryData } from '../../static/categoryData';

const Category = () => {
  const navigate = useNavigate();
  const handleSubmit = (i: CategoryData) => { navigate(`/product?category=${i.title}`) }

  return (
    <div>
      <h1 className='w-11/12 mx-auto mb-3 border-[1px] border-black rounded-md text-[20px] text-center'>카테고리</h1>
      {/* 카테고리 슬라이드 */}
      <Swiper
        breakpoints={{ 200: { slidesPerView: 3, spaceBetween: 3, }, 768: { slidesPerView: 8, spaceBetween: 3, }, }}
        pagination={{ clickable: true, renderBullet: customRenderBullet, }}
        modules={[Pagination]}
        className="w-11/12 mx-auto mb-3 border-[1px] border-black rounded-md cursor-pointer"
      >
        {categoryData.map((i) => (
          <SwiperSlide key={i.id}>
            <div onClick={() => handleSubmit(i)} className="border-x-[1px] border-b-[1px] border-black p-1 relative mb-8 hover:opacity-50">
              <img src={i.image_Url} />
              <h1 className="bg-white/50 text-center border-t-[1px] border-black text-black text-medium">{i.title} </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category