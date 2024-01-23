import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { footerLinktData } from '../../static/footerLinkData';
import styles from '../../styles/styles';

const Footer = () => {
  return (
    <div className={`${styles.footer_section}`}>
      {/* 로고, 스폰서 이미지 */}
      <div className={`${styles.footer_sponsor}`}>
        <img src="" style={{ width: "150px", objectFit: "contain" }} alt="" />
      </div>

      {/* 구독, 관련 SNS */}
      <div className={`${styles.footer_container}`}>
        <input type="text" required placeholder='구독해서 저희의 이벤트와 소식을 제공받아요.' className={`${styles.footer_input}`} />
        <button className={`${styles.footer_btn}`}> 구독 </button>
        <AiFillFacebook size={30} className={`${styles.n_hover}`} />
        <AiOutlineTwitter size={30} className={`${styles.n_hover}`} />
        <AiFillInstagram size={30} className={`${styles.n_hover}`} />
        <AiFillYoutube size={30} className={`${styles.n_hover}`} />
      </div>

      {/* 관련 링크 */}
      <div className={`${styles.footer_container}`}>
        <h1>E-COMMERCE</h1>
        {footerLinktData && footerLinktData.map((i, index) => (<Link key={index} to={i.link} className={`${styles.n_hover}`}>{i.name}</Link>))}
      </div>

      {/* right */}
      <span className={`${styles.footer_container} text-sm`}>© 2023 MpqM. All rights reserved.</span>
    </div>
  )
}

export default Footer