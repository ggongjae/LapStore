import React, { useState } from 'react'
import './MainRecommend.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const MainRecommend = () => {
    // 가짜 상품 데이터 (실제 데이터를 가져와야 함)
    const [fakeRecommendations, setFakeRecommendations] = useState([
        {
            id: 1,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 2,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 3,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 4,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 5,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 6,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 7,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 8,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
        {
            id: 9,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            Os: 'Window 10',
            저장장치: 'SSD M.2(NVMe)',
            CPU: 'i7-13650HX (2.6GHz)',
            VGA: 'GeForce RTX 4060',
            RAM: 'DDR5 8GB*2',
            해쉬태크: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
        },
    ])

    // 개별 상품의 하트 클릭 상태를 변경하는 함수
    const handleHeartClick = productId => {
        setFakeRecommendations(prevRecommendations =>
            prevRecommendations.map(product =>
                product.id === productId
                    ? { ...product, heartClicked: !product.heartClicked }
                    : product
            )
        )
    }

    return (
        <div className="main-recommend">
            <h3 className="main-recommend-title">추천상품보기</h3>
            <div className="recommendation-list">
                {fakeRecommendations.map(product => (
                    <div key={product.id} className="recommendation-item">
                        <Link
                            to={`/product/${product.id}`}
                            className="product-link"
                        ></Link>
                        <div className="product-image">
                            <button
                                className="heart-button"
                                onClick={() => handleHeartClick(product.id)}
                            >
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    color={
                                        product.heartClicked ? 'red' : 'gray'
                                    }
                                />
                            </button>
                        </div>
                        <div className="product-details">
                            <Link
                                to={`/product/${product.id}`}
                                className="product-link"
                            >
                                <p className="product-name">{product.name}</p>
                            </Link>

                            <div className="product-specs">
                                <div className="spec-group1">
                                    <p>Os: {product.Os}</p>
                                    <p>저장장치: {product.저장장치}</p>
                                    <p>CPU: {product.CPU}</p>
                                    <p>VGA: {product.VGA}</p>
                                    <p>RAM: {product.RAM}</p>
                                </div>
                                <div className="spec-group2">
                                    <p>{product.해쉬태크}</p>
                                    <p>최저가 {product.최저가}</p>
                                </div>
                            </div>

                            <p className="price">{product.가격}</p>
                        </div>
                        <div className="product-action"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainRecommend
