import React, { useEffect, useState } from 'react'
import { productDatas } from '../../static/productData';
import { ProductData } from '../../helpers/interface';
import ProductCardMd from "../Product/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCardDetail from '../Product/ProductDetailCard';
import { customRenderBullet } from '../../helpers/customSwiper';

const Top100 = () => {
    const [open, setOpen] = useState<{ flag: boolean, productData: ProductData | null }>()
    const [productsData, setProductsData] = useState<ProductData[]>();
    
    useEffect(() => {
        const totalSellProduct = productDatas && productDatas.sort((a, b) => b.total_sell - a.total_sell)
        const top100 = totalSellProduct?.slice(0, 99);
        setProductsData(top100);
    }, [])

    return (
        <div>
            <h1 className='w-11/12 mx-auto border-[1px] border-black font-medium rounded-md text-[20px] mb-3 text-center'>TOP10</h1>
            <Swiper
                breakpoints={{ 200: { slidesPerView: 2, spaceBetween: 3, }, 768: { slidesPerView: 5, spaceBetween: 3, }, }}
                pagination={{ clickable: true, renderBullet: customRenderBullet, }}
                modules={[Pagination]}
                className='w-11/12 mx-auto mb-3 border-[1px] border-black rounded-md cursor-pointer relative'
            >
                {productsData && productsData.map((i, index) => (<SwiperSlide key={i.id}> <ProductCardMd productData={i} setOpen={(flag, productData) => setOpen({ flag, productData })} /> </SwiperSlide>))}
            </Swiper>
            {open?.flag === true ? (<ProductCardDetail productData={open.productData} setOpen={(flag, productData) => setOpen({ flag, productData })} />) : null}
        </div>
    )
}

export default Top100