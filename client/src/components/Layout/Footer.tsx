import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { footerLinktData } from '../../static/footerLinkData';

const Footer = () => {
  return (
    <div className='hidden md:block w-11/12 mx-auto border-[1px] border-black rounded-md text-[20px] text-center bg-white mb-10'>
      {/* 로고, 스폰서 이미지 */}
      <div className='mb-5 cursor-pointer flex flex-row w-full justify-center space-x-3'>
        <img src="" style={{ width: "150px", objectFit: "contain" }} alt="" />
      </div>

      {/* 구독, 관련 SNS */}
      <div className='mb-3 flex justify-center items-center space-x-'>
        <input type="text" required placeholder='구독해서 저희의 이벤트와 소식을 제공받아요.' className='p-1.5 w-[30%] border-[1px] appearance-none block border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black' />
        <button className='p-1.5 bg-black hover:opacity-50 rounded-md text-white w-auto'> 구독 </button>
        <AiFillFacebook size={50} className="cursor-pointer" />
        <AiOutlineTwitter size={50} className='cursor-pointer' />
        <AiFillInstagram size={50} className='cursor-pointer' />
        <AiFillYoutube size={50} className='cursor-pointer' />
      </div>

      {/* 관련 링크 */}
      <div className='mb-3 flex justify-center items-center space-x-3'>
        <h1>E-COMMERCE</h1>
        {footerLinktData && footerLinktData.map((i, index) => ( <Link key={index} to={i.link} className=" hover:opacity-50 text-sm cursor-pointer">{i.name}</Link>))}
      </div>

      {/* right */}
      <span className='mb-3 text-sm flex justify-center items-center space-x-3'>© 2023 MpqM. All rights reserved.</span>
    </div>
  )
}

export default Footer