import React, { FormEvent, useState } from 'react'
import { server } from '../../helpers/server'
import { AiOutlineCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AllOrders from './AllOrder';
import AllRefundOrders from './AllRefundOrder';
import TrackOrder from './TrackOrder';
import PaymentMethod from './PaymentMethod';
import Address from './Address';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface ProfileContenProps { active: number }
const ProfileContent = ({ active }: ProfileContenProps) => {
  const { isAuthenticated, userData } = useSelector((state: RootState) => state.auth);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const navigate = useNavigate();
  // const [zipCode, setZipCode] = useState("")
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }


  return (
    <div className='w-full overflow-auto rounded-md border-[1px] border-black p-3'>
      {/* 프로필  페이지 */}
      {active === 1 && (
        <>
          <div className='flex justify-center w-auto mb-3'>
            <div className="relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_account_icon.svg/640px-Google_account_icon.svg.png" alt="" className='w-[150px] h-[150px] rounded-full object-cover border-[1px] border-black' />
              <div className='w-[30px] z-40 h-[30px] border-[1px] bg-white border-black hover:bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer absolute right-1 bottom-1 '>
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} aria-required={true}>
            <div className='w-full block xl:flex xl:space-x-3'>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 이름 </label>
                <input
                  value={userData?.name}
                  onChange={(e) => setName(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 이메일 </label>
                <input
                  value={userData?.email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
            </div>
            <div className='w-full block xl:flex xl:space-x-3 '>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 전화번호 </label>
                <input
                  value={userData?.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 우편번호 </label>
                <input
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
            </div>
            <div className='w-full block xl:flex xl:space-x-3'>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 주소1 </label>
                <input
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
              <div className='w-full xl:w-[50%] space-y-1 mb-3'>
                <label> 주소2 </label>
                <input
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  type="text" required
                  className='appearance-none block w-full p-3 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
              </div>
            </div>
            <button type="submit" className='w-full h-[40px] flex justify-center items-center p-2 rounded-md border-[1px] border-black hover:opacity-30'>수정 </button>
          </form>
          <form>
          </form>
        </>
      )}
      {/* 주문 페이지 */}
      {active === 2 && (
        <div> <AllOrders /></div>
      )}
      {active === 3 && (
        <div> <AllRefundOrders /> </div>
      )}
      {active === 5 && (
        <div> <TrackOrder /> </div>
      )}
      {active === 6 && (
        <div> <PaymentMethod /> </div>
      )}
      {active === 7 && (
        <div> <Address /> </div>
      )}
    </div>
  )
}

export default ProfileContent