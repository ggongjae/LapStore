import './Detail.css'
import Header from '../Header'
import Footer from '../Footer'
import PrintImage from '../../img/프린트.png'
import SaveImage from '../../img/Save.png'
import DownloadImage from '../../img/Group 140.png'
import DecalarationImage from '../../img/Group 139.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailedInformation from './DetailedInformation'
import DetailPriceComparision from './DetailPriceComparision'
import DetailedProductComparision from './DetailProductComparision'
import DetailedProductReview from './DetailedProductReview'
import { Link, Element } from 'react-scroll'

const Detail = ({ fakeRecommendations }) => {
    const { productId } = useParams()
    const product = fakeRecommendations.find(
        product => product.id === parseInt(productId)
    )

    const [isSticky, setSticky] = useState(false)

    const checkScrollTop = () => {
        // 스크롤 위치가 600 이상이면 고정
        setSticky(window.pageYOffset > 600)
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, [])
    return (
        <div>
            <Header />
            <div>
                <div className="bigbox">
                    <div className="product-detail-border"></div>
                    <div className="action-buttons">
                        <img src={SaveImage}></img>
                        <button>찜하기</button>
                        <img src={DecalarationImage}></img>
                        <button>신고하기</button>
                        <img src={DownloadImage}></img>
                        <button>공유하기</button>
                        <img src={PrintImage}></img>
                        <button>출력하기</button>
                    </div>
                    <div className="product-detail">
                        <div className="product-detail-top">
                            <div className="product-detail-image"></div>
                            <div className="product-detail-content">
                                <h2 className="product-detail-name">
                                    {product.name}
                                </h2>
                                <div className="produc-detail-1">
                                    <p className="product-detail-manufacturer">
                                        제조사: {product.manufacturer}
                                    </p>
                                    <p className="product-detail-brand">
                                        브랜드: {product.brand}
                                    </p>
                                    <p className="product-detail-registeredDate">
                                        등록일:{product.registeredDate}
                                    </p>
                                </div>
                                <p className="product-detail-lowest">
                                    최저가 무료배송
                                </p>
                                <div className="product-detail-price-action">
                                    <p className="product-detail-price">
                                        {product.가격}
                                    </p>
                                    <button className="product-detail-buy">
                                        최저가 구매
                                    </button>
                                </div>
                            </div>
                            <div className="product-other-prices"></div>
                        </div>
                        <div className="product-detail-specs">
                            <p>Os: {product.Os}</p>
                            <p>저장장치: {product.저장장치}</p>
                            <p>CPU: {product.CPU}</p>
                            <p>VGA: {product.VGA}</p>
                            <p>RAM: {product.RAM}</p>
                        </div>
                    </div>
                </div>
                <div className={`nav ${isSticky ? 'fixed-nav' : ''}`}>
                    <nav>
                        <ul>
                            <li>
                                {' '}
                                <Link
                                    to="price-comparison"
                                    smooth={true}
                                    duration={500}
                                >
                                    가격 비교
                                </Link>
                            </li>
                            <li>
                                {' '}
                                <Link to="detail" smooth={true} duration={500}>
                                    상세 정보
                                </Link>{' '}
                            </li>
                            <li>
                                {' '}
                                <Link
                                    to="product-comparison"
                                    smooth={true}
                                    duration={500}
                                >
                                    상품 비교
                                </Link>{' '}
                            </li>
                            <li>
                                {' '}
                                <Link
                                    to="product-review"
                                    smooth={true}
                                    duration={500}
                                >
                                    상품 리뷰
                                </Link>{' '}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="element">
                    <Element name="price-comparison">
                        <DetailPriceComparision product={product} />
                    </Element>
                    <Element name="detail">
                        <DetailedInformation product={product} />
                    </Element>
                    <Element name="product-comparison">
                        <DetailedProductComparision product={product} />
                    </Element>
                    <Element name="product-review">
                        <DetailedProductReview product={product} />
                    </Element>
                </div>
                <div></div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail
