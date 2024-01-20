import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryData } from '../../helpers/interface';

interface DropDownProps { size: number, categoryData: CategoryData[], setDropDown: (dropDown: boolean) => void; }
interface ActiveSubCategory { isActive: boolean, categoryData: CategoryData | null; }

const DropDown = ({ size, categoryData, setDropDown }: DropDownProps) => {
    const navigate = useNavigate();
    const [activeSubCategory, setActiveSubCategory] = useState<ActiveSubCategory>();
    const [activeSSubCategory, setActiveSSubCategory] = useState<ActiveSubCategory>();
    const [categoryWidth, setCategoryWidth] = useState(size);
    const [firstParams, setFirstParmas] = useState('')
    const [secondParams, setSecondParmas] = useState('')

    const handleHover = (flag: number, isActive: boolean, width: number, categoryData: CategoryData | null) => {
        if (flag === 1) {
            if (secondParams) {
                setActiveSSubCategory({ isActive: false, categoryData: null });
                setActiveSubCategory({ isActive: true, categoryData: null })
            }
            setActiveSubCategory({ isActive, categoryData });
            if (categoryData) { setFirstParmas(categoryData.title) }
        } else if (flag === 2) {
            setActiveSSubCategory({ isActive, categoryData });
            if (categoryData) { setSecondParmas(categoryData.title) }
        }
        setCategoryWidth(width);
    }

    const submitHandle = (flag: number, categoryData: CategoryData) => {
        switch (flag) {
            case 1:
                navigate(`/product?category=${firstParams}`)
                break;
            case 2:
                navigate(`/product?category=${firstParams}/${secondParams}`)
                break;
            case 3:
                navigate(`/product?category=${firstParams}/${secondParams}/${categoryData.title}`)
                break;
            default:
                break;
        }
        setDropDown(false);
        window.location.reload();
    }

    return (
        <div style={{ width: categoryWidth }} className='mt-[13px] flex flex-row bg-white z-30 absolute border-[1px] border-black'>
            {/* 카테고리 첫번째 탭 */}
            <div className='flex flex-col'>
                {categoryData && categoryData.map((i: CategoryData, _) => (
                    <div
                        key={i.id}
                        onClick={() => submitHandle(1, i)}
                        onMouseEnter={() => handleHover(1, true, size * 2, i)}
                        className={`w-[${size + 'px'}] `}
                    >
                        <h1 className='m-1 p-3 cursor-pointer select-none text-sm md:text-base'>{i.title}</h1>
                    </div>
                ))}
            </div>

            {/* 카테고리 두번째 탭 */}
            <div className='flex flex-col'>
                {activeSubCategory?.isActive === true && activeSubCategory?.categoryData?.sub?.map((i: CategoryData, _) => (
                    <div
                        key={i.id}
                        onClick={() => { submitHandle(2, i) }}
                        onMouseEnter={() => handleHover(2, true, size * 3, i)}
                        className={`w-[${size + 'px'}]`}
                    >
                        <h1 className='m-1 p-3 cursor-pointer select-none text-sm md:text-base'>{i.title}</h1>
                    </div>
                ))}
            </div>

            {/* 카테고리 세번째 탭 */}
            <div className='flex flex-col'>
                {activeSSubCategory?.isActive === true && activeSSubCategory?.categoryData?.sub?.map((i: CategoryData, _) => (
                    <div
                        key={i.id}
                        onClick={() => { submitHandle(3, i) }}
                        className={`w-[${size + 'px'}]`}
                    >
                        <h1 className='m-1 p-3 cursor-pointer select-none text-sm md:text-base'>{i.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DropDown