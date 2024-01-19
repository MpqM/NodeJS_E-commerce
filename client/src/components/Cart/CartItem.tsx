import React, { useState } from 'react'
import { CartData } from '../../helpers/interface'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

interface CartItemProps { cartData: CartData }

const CartItem = ({ cartData }: CartItemProps) => {
  const [value, setValue] = useState(1);
  const totalPrice = cartData.price * value

  return (
    <div className='border-y p-1 flex space-x-1'>
      {/* 수량 선택 */}
      <div className='flex flex-col items-center justify-center'>
        <CiCirclePlus size={25} onClick={() => setValue(value + 1)} className='w-[25px] h-[25px] flex items-center cursor-pointer' />
        <span className='px-2'>{value}</span>
        <CiCircleMinus size={25} onClick={() => setValue(value === 1 ? 1 : value - 1)} className='w-[25px] h-[25px] flex items-center cursor-pointer' />
      </div>

      {/* 상품 이미지 */}
      <img src="https://shopping-phinf.pstatic.net/main_3902233/39022339335.1.jpg?type=f300" className='flex w-[80px] h-[80px]' />
      
      {/* 상품 이름, 가격, 가격 * 수량 */}
      <div className='flex flex-col space-y-1 overflow-auto'>
        <p className='text-sm md:text-base'>{cartData.name}</p>
        <p className='text-sm md:text-base'>{totalPrice}원 ({cartData.price}원 * {value})</p>
      </div>
      
      {/* 상품 삭제 */}
      <div className='flex items-center justify-center'>
        <RxCross1 size={15} className='cursor-pointer items-center mr-1' />
      </div>
    </div>
  )
}

export default CartItem