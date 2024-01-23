import React from 'react'
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineAdminPanelSettings, MdOutlinePassword, MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { TbAddressBook } from "react-icons/tb";
import axios from 'axios';
import { server } from '../../helpers/server';
import { toast } from 'react-toastify';
interface ProfileSidebarProps { active: number; setActive: (active: number) => void }
const ProfleSidebar = ({ active, setActive }: ProfileSidebarProps) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${server}/auth/logout`, { withCredentials: true })
      toast.success(response.data.message)
      navigate("/login")
      window.location.reload();
    } catch (error:any) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='w-full rounded-md border-[1px] border-black'>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 1 ? "opacity-30" : ""}`}
        onClick={() => setActive(1)}
      >
        <RxPerson className='flex' /><span className='hidden xl:block'>프로필</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 2 ? "opacity-30" : ""}`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag className='flex' /><span className='hidden xl:block'>주문</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 3 ? "opacity-30" : ""}`}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund className='flex' /><span className='hidden xl:block'>환불</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 4 ? "opacity-30" : ""}`}
        onClick={() => { setActive(4); navigate("/inobx") }}
      >
        <AiOutlineMessage className='flex' /><span className='hidden xl:block'>문의</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 5 ? "opacity-30" : ""}`}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges className='flex' /><span className='hidden xl:block'>주문조회</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 6 ? "opacity-30" : ""}`}
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard className='flex' /><span className='hidden xl:block'>결제수단</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 7 ? "opacity-30" : ""}`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook className='flex' /><span className='hidden xl:block'>배송정보</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 8 ? "opacity-30" : ""}`}
        onClick={() => {setActive(8); handleLogout()}}
      >
        <AiOutlineLogout className='flex' /><span className='hidden xl:block'>로그아웃</span>
      </div>
    </div>
  )
}

export default ProfleSidebar