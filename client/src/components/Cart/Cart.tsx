import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { IoBagHandleOutline } from 'react-icons/io5'
import { cartData } from '../../static/cartData'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles'

interface CartProps { setOpenCart: (openCart: boolean) => void }

const Cart = ({ setOpenCart }: CartProps) => {
  return (
    <div className={`${styles.right_tab_bg}`}>
      <div className={`${styles.right_tab_container}`}>
        {/* 장바구니 탭 헤더 */}
        <div className={`${styles.right_tab_header}`}>
          <div className={`${styles.n_center_lr_align}`}>
            <IoBagHandleOutline />
            <h1>{cartData.length}</h1>
          </div>
          <RxCross1 onClick={() => setOpenCart(false)} className={`${styles.n_hover}`} />
        </div>

        {/* 장바구니 아이템 */}
        {cartData && cartData.map((i, index) => (<CartItem key={index} cartData={i} />))}

        {/* 결제 페이지 이동 버튼 */}
        <Link to="/checkout" className={`${styles.n_btn}`}>?????원 결제</Link>
      </div>
    </div>
  )
}

export default Cart