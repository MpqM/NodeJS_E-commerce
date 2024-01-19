import React, { useState } from 'react'
import { CartData } from '../../helpers/interface'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';

interface WishListItemProps { cartData: CartData }
const WishListItem = ({ cartData }: WishListItemProps) => {
  const [value, setValue] = useState(1);
  const totalPrice = cartData.price * value
  return (
    <div className='border-y p-1 flex space-x-1'>
      <div className='flex items-center'>
        <IoBagHandleOutline size={25} className='w-[25px] h-[25px] cursor-pointer' />
      </div>
      <img src="https://shopping-phinf.pstatic.net/main_3902233/39022339335.1.jpg?type=f300" className='flex w-[80px] h-[80px]' />
      <div className='flex flex-col space-y-1 overflow-auto'>
        <p className='text-sm md:text-base'>{cartData.name}</p>
        <p className='text-sm md:text-base'>{cartData.price}원</p>
      </div>
      <div className='flex items-center justify-center'>
        <RxCross1 size={15} className='cursor-pointer items-center mr-1' />
      </div>
    </div>
  )
}

export default WishListItem