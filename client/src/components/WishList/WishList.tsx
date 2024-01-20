import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { IoBagHandleOutline } from 'react-icons/io5'
import { cartData } from '../../static/cartData'
import { Link } from 'react-router-dom'
import WishListItem from './WishListItem'
import { AiOutlineHeart } from 'react-icons/ai'

interface WishListProps { setOpenWishList: (openWishList: boolean) => void }
const WishList = ({ setOpenWishList }: WishListProps) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-black/5 h-screen z-10'>
      <div className='fixed md:top-3 md:right-3 min-h-full w-[99%] md:w-[25%] bg-white flex flex-col rounded-md'>
        <div className='flex w-full justify-between text-xl p-3'>
          <div className='flex items-center space-x-1'><AiOutlineHeart /> <h1 >{cartData.length}</h1></div>
          <RxCross1 onClick={() => setOpenWishList(false)} className="cursor-pointer" />
        </div>
        {cartData && cartData.map((i, index) => (<WishListItem key={index} cartData={i} />))}
      </div>
    </div>
  )
}

export default WishList