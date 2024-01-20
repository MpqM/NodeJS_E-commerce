import React, { useState } from 'react'
import { ProductData } from '../../helpers/interface'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai"
import ProductCardDetail from '../Product/ProductDetailCard'
interface ProductCardProps { product: ProductData; setOpen: (i:boolean, product:ProductData) => void; }

const RecommendProduct = ({ product, setOpen }: ProductCardProps) => {
    const [click, setClick] = useState(false);
    const product_name = product.name.replace(/\s+/g, "-")

    return (
        <div className='border-x-[1px] border-b-[1px] border-black p-1 mb-8'>
            <Link to={`/product/${product_name}`}><img src={product.image_Url[0].url} alt="" className='w-full h-[170px] object-contain border-b-[1px] border-black' /></Link>
            <Link to="/"><h1 className='font-medium'>{product.shop.name}</h1> </Link>
            <Link to={`/product/${product_name}`}><h1 className='font-sm'> {product.name.length > 40 ? product.name.slice(0, 40) + "..." : product.name} </h1></Link>
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
                    onClick={() => setOpen(true, product)}
                    className='ml-3 cursor-pointer'
                />
                <AiOutlineShoppingCart
                    size={25} color='#444' title='Add to cart'
                    onClick={() => setOpen(true, product)}
                    className='ml-3 cursor-pointer'
                />
            </div>
            <div className='py-2 flex items-center justify-between'>
                <div className='flex flexx-row font-bold text-[15px]'>
                    <h1 >{product.price === 0 ? product.price : product.discount_price} 원</h1>
                    <h1 className='text-[#ff0000] ml-1 line-through'>{product.price ? product.price + "원" : null}</h1>
                </div>
            </div>
            <div className='flex flex-row items-center'><AiFillStar /><span>{product.total_sell} 판매</span></div>
        </div>
    )
}

export default RecommendProduct