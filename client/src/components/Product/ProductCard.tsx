import { useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { ProductData } from '../../helpers/interface'

interface ProductCardProps { productData: ProductData; setOpen: (i: boolean, productData: ProductData | null) => void; }

const ProductCard = ({ productData, setOpen }: ProductCardProps) => {
    const [click, setClick] = useState(false);
    const productId = productData.id

    return (
        <div className='border-[1px] border-black p-1 mt-1 mb-8'>
            <Link to={`/product/${productId}`}><img src={productData.image_Url[0].url} alt="" className='w-full h-[170px] object-contain border-b-[1px] border-black' /></Link>
            <Link to="/"><h5>{productData.shop.name}</h5> </Link>
            <Link to={`/product/${productId}`}><h4 className='font-bold'> {productData.name.length > 40 ? productData.name.slice(0, 40) + "..." : productData.name} </h4></Link>
            
            <div className='py-2 flex text-15px items-center space-x-2'>
                <h5 >{productData.price === 0 ? productData.price : productData.discount_price} 원</h5>
                <h5 className='text-[#ff0000] line-through'>{productData.price ? productData.price + "원" : null}</h5>
                <span>{productData.total_sell} 판매</span>
            </div>
            
            <div className='flex flex-row mt-2'>
                {click ? (
                    <AiFillHeart
                        size={25} color={click ? "red" : "#333"} title='Remove from wishlist'
                        onClick={() => setClick(!click)}
                        className='cursor-pointer'
                    />
                ) : (
                    <AiOutlineHeart
                        size={25} color={click ? "red" : "#333"} title='Add to wishlist'
                        onClick={() => setClick(!click)}
                        className='cursor-pointer'
                    />
                )}
                <AiOutlineEye
                    size={25} color='#333' title='Quick view'
                    onClick={() => setOpen(true, productData)}
                    className='ml-3 cursor-pointer'
                />
                <AiOutlineShoppingCart
                    size={25} color='#444' title='Add to cart'
                    onClick={() => setOpen(true, productData)}
                    className='ml-3 cursor-pointer'
                />
            </div>
            
        </div>
    )
}

export default ProductCard