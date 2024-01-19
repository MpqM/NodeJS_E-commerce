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
      <div className='fixed md:top-4 md:right-4 min-h-full w-[99%] md:w-[25%] bg-white flex flex-col rounded-md'>
        {/* 장바구니 탭 헤더 */}
        <div className='flex w-full justify-between p-3'>
          <div className='flex items-center'>
            <IoBagHandleOutline size={25} />
            <h5 className='pl-2 text-[25px]'>{cartData.length}</h5>
          </div>
          <RxCross1 size={25} className="cursor-pointer" onClick={() => setOpenCart(false)} />
        </div>

        {/* 장바구니 아이템 */}
        {cartData && cartData.map((i, index) => (<CartItem key={index} cartData={i} />))}
        
        {/* 결제 페이지 이동 버튼 */}
        <div className='px-1 my-3'>
          <Link to="/checkout">
            <div className='h-[45px] flex items-center justify-center w-full bg-black text-white rounded-md'>
              <h1 className='text-[18px]'>xxxxxx원 결제</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart