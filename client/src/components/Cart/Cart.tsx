import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { IoBagHandleOutline } from 'react-icons/io5'
import { cartData } from '../../static/cartData'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

interface CartProps { setOpenCart: (openCart: boolean) => void }

const Cart = ({ setOpenCart }: CartProps) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-black/5 h-screen z-10'>
      <div className='fixed md:top-3 md:right-3 min-h-full w-[99%] md:w-[25%] bg-white flex flex-col rounded-md'>
        {/* 장바구니 탭 헤더 */}
        <div className='flex w-full justify-between text-xl p-3'>
          <div className='flex items-center space-x-1'><IoBagHandleOutline /><h1>{cartData.length}</h1></div>
          <RxCross1  onClick={() => setOpenCart(false)} className="cursor-pointer hover:opacity-30" />
        </div>

        {/* 장바구니 아이템 */}
        {cartData && cartData.map((i, index) => (<CartItem key={index} cartData={i} />))}

        {/* 결제 페이지 이동 버튼 */}
        <Link to="/checkout" className='mt-5 w-full h-[40px] flex justify-center items-center rounded-md hover:opacity-30 border-[1px] border-black'>xxxxxx원 결제</Link>
      </div>
    </div>
  )
}

export default Cart