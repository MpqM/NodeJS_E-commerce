import React, { useEffect, useState } from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import { useParams } from 'react-router-dom'
import { productDatas } from '../static/productData'
import { ProductData } from '../helpers/interface'
import ProductDetail from '../components/Product/ProductDetail'
import ProductRelate from '../components/Product/ProductRelate'

const ProductDetailPage = () => {
    const {productId} = useParams()
    const [productData, setProductData] = useState<ProductData>()
    useEffect(() => {
        const productData = productDatas.find((i) => i.id === Number(productId))
        setProductData(productData)
    })
  return (
    <div>
        <Header />
        <ProductDetail productData={productData!}/>
        <ProductRelate productData={productData!} />
    </div>
  )
}

export default ProductDetailPage