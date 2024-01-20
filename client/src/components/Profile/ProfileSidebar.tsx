import React from 'react'
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineAdminPanelSettings, MdOutlinePassword, MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { TbAddressBook } from "react-icons/tb";
interface ProfileSidebarProps { active: number; setActive: (active: number) => void }
const ProfleSidebar = ({ active, setActive }: ProfileSidebarProps) => {
  const navigate = useNavigate();
  return (
    <div className='w-full rounded-md border-[1px] border-black'>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 1 ? "opacity-30" : ""}`}
        onClick={() => setActive(1)}
      >
        <RxPerson /><span>프로필</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 2 ? "opacity-30" : ""}`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag /><span>주문</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 3 ? "opacity-30" : ""}`}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund /><span>환불</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 4 ? "opacity-30" : ""}`}
        onClick={() => {setActive(4); navigate("/inobx")}}
      >
        <AiOutlineMessage /><span>문의</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 5 ? "opacity-30" : ""}`}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges /><span>주문조회</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 6 ? "opacity-30" : ""}`}
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard /><span>결제수단</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 7 ? "opacity-30" : ""}`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook /><span>배송정보</span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-xl p-3 ${active === 8 ? "opacity-30" : ""}`}
        onClick={() => setActive(8)}
      >
        <AiOutlineLogout /><span>로그아웃</span>
      </div>
    </div>
  )
}

export default ProfleSidebar