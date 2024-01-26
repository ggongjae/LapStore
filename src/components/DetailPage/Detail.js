import './Detail.css'
import Header from '../Header'
import PrintImage from '../../img/프린트.png'
import SaveImage from '../../img/Save.png'
import DownloadImage from '../../img/Group 140.png'
import DecalarationImage from '../../img/Group 139.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailedInformation from './DetailedInformation'
import DetailPriceComparision from './DetailPriceComparision'
import DetailedProductComparision from './DetailProductComparision'
import DetailedProductReview from './Review/DetailedProductReview'
import { Link, Element } from 'react-scroll'
import SmallReviewComponent from './Detail/SmallReviewComponent'
import LowPriceGraph from './Detail/LowPriceGraph'

const Detail = ({ fakeRecommendations }) => {
    const { productId } = useParams()
    const product = fakeRecommendations.find(p => p.id === parseInt(productId))

    const [isSticky, setSticky] = useState(false)

    const checkScrollTop = () => {
        // 스크롤 위치가 600 이상이면 고정
        setSticky(window.pageYOffset > 900)
    }
    const [reviews, setReviews] = useState([
        {
            userId: 'user1',
            date: '2023-01-01',
            text: 'ASUS ROG  Strix G18은 매력적인 게이밍 노트북입니다. 이 제품은 ASUS의 유명한 Republic of Gamer(RoG) 라인업에 속하며, 게이머들의 요구에 부응 하기 위해 고성능과 스타일을 결합한 디자인을 자랑합니다. 첫 인상부터 ASUS ROG Strix G18은 강력한 게임 성능을 위해 최신 기술을 탑재하고 있습니.!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user2',
            date: '2023-01-02',
            text: '별로에요...',
            rating: 2,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user3',
            date: '2023-01-03',
            text: '괜찮아요',
            rating: 3,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user4',
            date: '2023-01-04',
            text: '아주 좋아요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        { userId: 'user5', date: '2023-01-05', text: '그저 그래요', rating: 3 },
        {
            userId: 'user6',
            date: '2023-01-06',
            text: '나쁘지 않아요',
            rating: 4,
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },

        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
    ])
    // 상품평이 좋은 리뷰 상위 3개만 추출
    const topReviews = reviews
        .sort((a, b) => b.rating - a.rating) // 평점에 따라 내림차순 정렬
        .slice(0, 3) // 상위 3개만 선택
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, [])
    const reviewCount = reviews.length
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
    const averageRating = reviewCount > 0 ? totalRating / reviewCount : 0

    const malls = [
        { name: '옥션', price: '1,980,000원', deliveryFee: '무료' },
        { name: 'G마켓', price: '1,990,000원', deliveryFee: '2,500원' },
        { name: '11번가', price: '2,000,000원', deliveryFee: '무료' },
        { name: '쿠팡', price: '1,950,000원', deliveryFee: '무료' },
        { name: '인터파크', price: '1,970,000원', deliveryFee: '3,000원' },
        { name: '11번가', price: '2,000,000원', deliveryFee: '무료' },
        { name: '쿠팡', price: '1,950,000원', deliveryFee: '무료' },
        { name: '인터파크', price: '1,970,000원', deliveryFee: '3,000원' },
    ]
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
                            <div className="product-detail-image-specs">
                                <div className="product-detail-image"></div>

                                <div className="product-detail-specs">
                                    <div className="product-detail-specs">
                                        <p>{product.hashtag}</p>
                                        <p className="spec-item">
                                            <span className="spec-title">
                                                OS:
                                            </span>
                                            <span className="spec-value">
                                                {product.Os}
                                            </span>
                                        </p>
                                        <p className="spec-item">
                                            <span className="spec-title">
                                                저장장치:
                                            </span>
                                            <span className="spec-value">
                                                {product.저장장치}
                                            </span>
                                        </p>
                                        <p className="spec-item">
                                            <span className="spec-title">
                                                CPU:
                                            </span>
                                            <span className="spec-value">
                                                {product.CPU}
                                            </span>
                                        </p>
                                        <p className="spec-item">
                                            <span className="spec-title">
                                                VGA:
                                            </span>
                                            <span className="spec-value">
                                                {product.VGA}
                                            </span>
                                        </p>
                                        <p className="spec-item">
                                            <span className="spec-title">
                                                RAM:
                                            </span>
                                            <span className="spec-value">
                                                {product.RAM}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                        최저가 구매하기
                                    </button>
                                </div>
                                <div className="price-info-container">
                                    <div className="price-info-header">
                                        <p className="price-info-mall">
                                            쇼핑몰
                                        </p>
                                        <p className="price-info-price">
                                            판매가
                                        </p>
                                        <p className="price-info-delivery">
                                            배송비
                                        </p>
                                    </div>
                                    <div className="price-info-list">
                                        {malls.map((mall, index) => (
                                            <div
                                                key={index}
                                                className="price-info-item"
                                            >
                                                <p className="mall-name">
                                                    {mall.name}
                                                </p>
                                                <p className="mall-price">
                                                    <span className="mall-low">
                                                        최저가
                                                    </span>{' '}
                                                    {mall.price}
                                                </p>
                                                <p className="mall-delivery">
                                                    {mall.deliveryFee}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="product-reviews">
                                <p className="product-reviews-count">
                                    상품평({reviewCount}건)
                                </p>
                                <img
                                    src="/Vector.png"
                                    className="product-reviews-star"
                                ></img>
                                <span className="product-reviews-rating">
                                    {averageRating.toFixed(1)}
                                </span>
                                <SmallReviewComponent reviews={topReviews} />
                                <LowPriceGraph />
                            </div>
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
            </div>
        </div>
    )
}

export default Detail
