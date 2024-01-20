import React from 'react'
import Header from '../components/Layout/Header'
import PromotionProductCard from '../components/Promotion/PromotionCard'
import { promotionData } from '../static/promotionData';
const PromotionPage = () => {
    return (
        <div>
            <Header />
            {promotionData && promotionData.map((i, index) => ( <PromotionProductCard promotionData={i} /> ))
            }
        </div>
    )
}

export default PromotionPage