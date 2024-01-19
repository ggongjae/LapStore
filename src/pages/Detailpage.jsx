import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Detail from '../components/DetailPage/Detail'
import DetailProductComparision from '../components/DetailPage/DetailProductComparision'
import DetailedInformation from '../components/DetailPage/DetailedInformation'
import DetailPriceComparision from '../components/DetailPage/DetailPriceComparision'
import DetailedProductReview from '../components/DetailPage/DetailedProductReview'
import Footer from '../components/Footer'

const Detailpage = ({ fakeRecommendations }) => {
    return (
        <div>
            <Header />
            <Detail />
            <DetailPriceComparision />
            <DetailedInformation />
            <DetailProductComparision />
            <DetailedProductReview />
            <Footer />
        </div>
    )
}

export default Detailpage
