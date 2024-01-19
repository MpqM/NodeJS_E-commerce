import React, { useEffect, useState } from 'react'
import { ProductData } from '../../helpers/interface'
import { productDatas} from '../../static/productData'

interface ProductRelateProps { productData: ProductData | null }

const ProductRelate = ({ productData }: ProductRelateProps) => {
  const [products, setProducts] = useState<ProductData[]>();
  useEffect(() => {
    const d = productDatas && productDatas.filter((i) => i.category === productData?.category);
    setProducts(d)
  })
  return (
    <div>
      {productData ? () : null}
    </div>
  )
}

export default ProductRelate