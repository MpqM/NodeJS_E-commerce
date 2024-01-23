import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryData } from '../../helpers/interface';
import { categoryData } from '../../static/categoryData';
import styles, { customRenderDot } from '../../styles/styles';

const Category = () => {
  const navigate = useNavigate();
  const handleSubmit = (i: CategoryData) => { navigate(`/product?category=${i.title}`) }

  return (
    <div className={`${styles.n_section}`}>
      <h1 className={`${styles.n_section_title}`}>카테고리</h1>
      {/* 카테고리 슬라이드 */}
      <Swiper
        breakpoints={{
          200: { slidesPerView: 5, spaceBetween: 3 },
          640: { slidesPerView: 8, spaceBetween: 3, },
          1280: { slidesPerView: 10, spaceBetween: 3, },
        }}
        pagination={{ clickable: true, renderBullet: customRenderDot, }}
        modules={[Pagination]}
        className={`${styles.swiper}`}
      >
        {categoryData.map((i) => (
          <SwiperSlide key={i.id}>
            <div onClick={() => handleSubmit(i)} className={`${styles.swiper_item}`}>
              <img src={i.image_Url} />
              <h1 >{i.title} </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category