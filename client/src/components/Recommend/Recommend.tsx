import React from 'react'
import ProductCardSimple from './RecommendCard'

const Recommend = () => {
  return (
    <div>
      <h1 className='w-11/12 mx-auto mb-3 border-[1px] border-black font-medium rounded-md text-[20px] text-center'>당신을 위한 추천</h1>
      <div className='w-11/12 mx-auto mb-3 border-[1px] border-black rounded-md cursor-pointer relative'>
        <div>
          인기 상품
        </div>
      <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-2 xl:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {/* <ProductCardSimple></ProductCardSimple> */}
      </div>
      </div>

    </div>

  )
}

export default Recommend