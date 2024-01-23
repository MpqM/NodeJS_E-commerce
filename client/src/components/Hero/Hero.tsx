import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { heroData } from '../../static/heroData';
import styles from '../../styles/styles';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => setCurrentIndex((curr) => (curr === 0 ? heroData.length - 1 : curr - 1))
    const next = () => setCurrentIndex((curr) => (curr === heroData.length - 1 ? 0 : curr + 1))

    // useEffect(() => {
    //     const slideInterval = setInterval(next, 5000)
    //     return () => clearInterval(slideInterval)
    // }, [])

    return (
        <div className={`${styles.slider}`}>
            {/* Hero 이미지 */}
            <div style={{ backgroundImage: `url(${heroData[currentIndex].url})` }} className={`${styles.slider_img}`}></div>

            {/* 왼쪽 넘기기 */}
            <div className={`${styles.slider_btn} left-5`}><BsChevronCompactLeft size={25} onClick={prev} /></div>

            {/* 오른쪽 넘기기 */}
            <div className={`${styles.slider_btn} right-5`}><BsChevronCompactRight size={25} onClick={next} /></div>

            {/* 슬라이드 인덱스 표시기 */}
            <div className={`${styles.slider_idx_view}`}>
                {heroData.map((i, slideIndex) => (<div key={i.id} className={ `${currentIndex === slideIndex ? "p-2" : "bg-opacity-25"} ${styles.slider_idx_dot}`} />))}
            </div>
        </div>
    )
}

export default Hero