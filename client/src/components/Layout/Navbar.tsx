import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavigationData } from '../../helpers/interface'
import { RootState } from '../../redux/store'
import { navigationData } from '../../static/navigationData'
import { useState } from 'react'
import Cart from '../Cart/Cart'
import WishList from '../WishList/WishList'

interface NavBarProps { active: number }

const Navbar = ({ active }: NavBarProps) => {
  const { isAuthenticated, userData } = useSelector((state: RootState) => state.auth);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);

  return (
    <>
      {navigationData && navigationData.map((i: NavigationData, index: any) => (
        <Link key={i.id} to={i.url} className='flex w-[90px] bg-white h-[40px] p-3 items-center justify-center cursor-pointer ml-1 border-[1px] border-black'>
          <span className={`${active === 99 && active === index + 1 ? "text-[#17dd1f]" : "text-black"} cursor-pointer`}>{i.title}</span>
        </Link>
      ))}
      <Link to="/seller" className='flex w-[90px] bg-white h-[40px] items-center p-3 justify-center cursor-pointer border-[1px] border-black ml-1'>
        <span className='flex items-center'> 판매자</span>
      </Link>
      <div 
        onClick={() => setOpenCart(true)}
        className='flex w-[90px] bg-white h-[40px] items-center p-3 justify-center cursor-pointer border-[1px] border-black ml-1'>
        <span className='flex items-center'> 장바구니</span>
      </div>
      <div 
        onClick={() => setOpenWishList(true)}
        className='flex w-[90px] bg-white h-[40px] items-center p-3 justify-center cursor-pointer border-[1px] border-black ml-1'>
        <span className='flex items-center'> 관심</span>
      </div>
      {isAuthenticated ? (
        <Link to="/profile" className='flex w-[90px] bg-white h-[40px] items-center p-3 justify-center cursor-pointer border-[1px] border-black ml-1'>
          <span className='flex items-center text-black'>{userData?.name}</span>
        </Link>
      ) : (
        <Link to="/login" className='flex w-[90px] bg-white h-[40px] items-center p-3 justify-center cursor-pointer border-[1px] border-black ml-1'>
          <span className='flex items-center'> 로그인</span>
        </Link>
      )}
      { openCart ? ( <Cart setOpenCart={setOpenCart}/> ): null }
      { openWishList ? ( <WishList setOpenWishList={setOpenWishList}/> ): null }
    </>
  )
}

export default Navbar