import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { heroData } from '../../static/heroData';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => setCurrentIndex((curr) => (curr === 0 ? heroData.length - 1 : curr - 1))
    const next = () => setCurrentIndex((curr) => (curr === heroData.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        const slideInterval = setInterval(next, 5000)
        return () => clearInterval(slideInterval)
    }, [])
    
    return (
        <div className='w-11/12 mx-auto h-[400px] mb-3 relative group rounded-md border-[1px] border-black'>
            {/* Hero 이미지 */}
            <div style={{ backgroundImage: `url(${heroData[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-500 rounded-md'>
            </div>

            {/* 왼쪽 넘기기 */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-3 border-[1px] border-black bg-white  cursor-pointer'>
                <BsChevronCompactLeft size={25} onClick={prev}  />
            </div>

            {/* 오른쪽 넘기기 */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-3 border-[1px] border-black bg-white cursor-pointer'>
                <BsChevronCompactRight size={25} onClick={next}  />
            </div>
            
            {/* 슬라이드 인덱스 표시기 */}
            <div className="absolute bottom-5 right-0 left-0 flex items-center justify-center gap-2">
                {heroData.map((i, slideIndex) => (< div  key={i.id} className={`transition-all w-3 h-3 bg-black rounded-full ${currentIndex === slideIndex ? "p-2" : "bg-opacity-25"}`} />))}
            </div>
        </div>
    )
}

export default Hero