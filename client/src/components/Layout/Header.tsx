import { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiMenuBurger } from "react-icons/ci"
import { Link } from 'react-router-dom'
import { ProductData } from '../../helpers/interface'
import { categoryData } from '../../static/categoryData'
import { productDatas } from '../../static/productData'
import DropDown from './DropDown'
import Navbar from './Navbar'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import styles from '../../styles/styles'


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState<ProductData[] | null>();
    const [activeSearchData, setActiveSearchData] = useState(false);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setActiveSearchData(true);
        setSearchTerm(term);
        const filteredProducts: ProductData[] = productDatas && productDatas.filter((productData) => {
            return productData.name.toLowerCase().includes(term.toLowerCase());
        })
        setSearchData(filteredProducts);
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) { setActive(true) }
        else { setActive(false) }
    })

    return (
        <>
            <div className={`${styles.n_section}`}>
                {/* 상위 헤더 */}
                <div className={`${styles.top_header_section}`}>
                    {/* 제목, 홈페이지 링크 */}
                    <div><Link to="/" className={`${styles.top_header_logo}`}>E-COMMERCE</Link></div>

                    {/* 상품 검색 */}
                    <div className='w-full xl:w-[50%] relative'>
                        <input
                            type="text" placeholder="검색" value={searchTerm} onChange={handleSearchChange}
                            className={`${styles.top_header_search_input}`}
                        />
                        <AiOutlineSearch size={20} className='absolute right-3 top-3 cursor-pointer' />
                        {activeSearchData && searchData && searchData.length !== 0 ? (
                            <div
                                onMouseLeave={() => { setActiveSearchData(false) }}
                                className="absolute top-11 w-full bg-white shadow z-[9] p-3 border-[1px] border-black rounded-md">
                                { searchData && searchData.map((i: ProductData, idx: any) => {
                                    return (
                                        <Link key={i.id} to={`/product/${i.id}`}>
                                            <div className="w-full flex items-start p-1 hover:opacity-50">
                                                <img src={`${i.image_Url[0]?.url}`} className="w-[30px] h-[30px]" />
                                                <p className='text-sm xl:text-xl ml-1'>{i.name}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                </div>
                {/* 하위 헤더 */}
                <div className={`${active === true ? "shadow fixed top-0 left-0 z-10 rounded-none border-none" : null} transition hidden xl:flex items-center justify-between w-full bg-white border-[1px] border-black h-[50px] rounded-md`}>
                    {/* 카테고리 드롭다운 */}
                    <div className='w-11/12 mx-auto relative flex items-center justify-between'>
                        <button
                            onClick={() => setDropDown(!dropDown)} onMouseLeave={() => setDropDown(false)}
                            className='relative bg-white h-[50px] w-[200px] block border-[1px] border-black'
                        >
                            <span className='hover:opacity-50'><CiMenuBurger className='absolute top-4 left-5' />카테고리</span>
                            {dropDown ? (<DropDown size={200} categoryData={categoryData} setDropDown={setDropDown} />) : null}
                        </button>
                        <div className='flex items-center'>
                            <Navbar />
                        </div>
                    </div>
                </div>
                {/* 하위헤더 모바일용 */}
                <div className='flex xl:hidden mx-auto mb-3 '>
                    <button
                        onClick={() => setDropDown(!dropDown)}
                        onMouseLeave={() => setDropDown(false)}
                        className='relative bg-white h-[50px] w-full block border-[1px] border-black rounded-md'
                    >
                        <span className='hover:opacity-50'>카테고리</span>
                        {dropDown ? (<DropDown size={130} categoryData={categoryData} setDropDown={setDropDown} />) : null}
                    </button>
                </div>
                <div className='flex w-auto xl:hidden mx-auto overflow-x-scroll whitespace-nowrap p-1 pb-3 border-[1px] border-black'>
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header