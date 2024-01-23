import React, { useState } from 'react'
import './DetailPriceComparison.css'

const PriceComparison = () => {
    const [visible, setVisible] = useState(12)
    const [showAll, setShowAll] = useState(false)

    const products = [
        {
            id: 1,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
            image: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            name: 'ASUS ROG STRIX G15 G513',
            해시태그: '#휴대용 #게임 #영상작업',
            최저가: '위드컴(카드)',
            가격: '1,780,000원',
            image: 'https://example.com/image2.jpg',
        },
        {
            id: 3,
            name: 'ASUS TUF F15 FX506',
            해시태그: '#영상편집 #게임 #휴대용',
            최저가: '더존컴(현금)',
            가격: '1,680,000원',
            image: 'https://example.com/image3.jpg',
        },
        {
            id: 4,
            name: 'ASUS Zephyrus G14 GA401',
            해시태그: '#휴대용 #경량 #게임',
            최저가: '해밀컴(카드)',
            가격: '1,580,000원',
            image: 'https://example.com/image4.jpg',
        },
        {
            id: 5,
            name: 'ASUS TUF Dash F15 FX516',
            해시태그: '#휴대용 #게임 #빠른 부팅',
            최저가: 'IT쇼핑몰(현금)',
            가격: '1,880,000원',
            image: 'https://example.com/image5.jpg',
        },
        {
            id: 6,
            name: 'ASUS ROG Zephyrus S17 GX701',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '디지털프라자(현금)',
            가격: '2,280,000원',
            image: 'https://example.com/image6.jpg',
        },
        {
            id: 7,
            name: 'ASUS ROG STRIX G18 G814',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(카드)',
            가격: '2,080,000원',
            image: 'https://example.com/image7.jpg',
        },
        {
            id: 8,
            name: 'ASUS TUF A15 FA506',
            해시태그: '#휴대용 #게임 #영상작업',
            최저가: '디지털프라자(카드)',
            가격: '1,480,000원',
            image: 'https://example.com/image8.jpg',
        },
        {
            id: 9,
            name: 'ASUS ROG STRIX G15 G513',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
            image: 'https://example.com/image9.jpg',
        },
        {
            id: 10,
            name: 'ASUS ROG STRIX G18 G814JV-N500',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
            image: 'https://example.com/image1.jpg',
        },
        {
            id: 11,
            name: 'ASUS ROG STRIX G15 G513',
            해시태그: '#휴대용 #게임 #영상작업',
            최저가: '위드컴(카드)',
            가격: '1,780,000원',
            image: 'https://example.com/image2.jpg',
        },
        {
            id: 12,
            name: 'ASUS TUF F15 FX506',
            해시태그: '#영상편집 #게임 #휴대용',
            최저가: '더존컴(현금)',
            가격: '1,680,000원',
            image: 'https://example.com/image3.jpg',
        },
        {
            id: 13,
            name: 'ASUS Zephyrus G14 GA401',
            해시태그: '#휴대용 #경량 #게임',
            최저가: '해밀컴(카드)',
            가격: '1,580,000원',
            image: 'https://example.com/image4.jpg',
        },
        {
            id: 14,
            name: 'ASUS TUF Dash F15 FX516',
            해시태그: '#휴대용 #게임 #빠른 부팅',
            최저가: 'IT쇼핑몰(현금)',
            가격: '1,880,000원',
            image: 'https://example.com/image5.jpg',
        },
        {
            id: 15,
            name: 'ASUS ROG Zephyrus S17 GX701',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '디지털프라자(현금)',
            가격: '2,280,000원',
            image: 'https://example.com/image6.jpg',
        },
        {
            id: 16,
            name: 'ASUS ROG STRIX G18 G814',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(카드)',
            가격: '2,080,000원',
            image: 'https://example.com/image7.jpg',
        },
        {
            id: 17,
            name: 'ASUS TUF A15 FA506',
            해시태그: '#휴대용 #게임 #영상작업',
            최저가: '디지털프라자(카드)',
            가격: '1,480,000원',
            image: 'https://example.com/image8.jpg',
        },
        {
            id: 18,
            name: 'ASUS ROG STRIX G15 G513',
            해시태그: '#큰화면 #그래픽 작업 #고사양 게임',
            최저가: '해밀컴(현금)',
            가격: '1,980,000원',
            image: 'https://example.com/image9.jpg',
        },
    ]

    const showMore = () => {
        setShowAll(!showAll)
    }

    // '더보기' 버튼 클릭 시 표시할 상품 수를 조절합니다.
    const displayedProducts = showAll ? products : products.slice(0, visible)

    return (
        <div className="product-comparison-container">
            <h2 className="product-comparison-heading">가격비교</h2>
            <div class="price-container">
                <span class="checkmark">✔</span>
                <span class="lowest-price">최저가격</span>
            </div>
            <div className="product-comparison-grid">
                {displayedProducts.map((product, index) => (
                    <div key={index} className="product-comparison-item">
                        <img
                            className="product-comparison-image"
                            src={product.image}
                        />
                        <h3 className="product-comparison-price">
                            {product.가격}
                        </h3>
                        <p className="product-comparison-free">(무료배송)</p>
                        <button className="product-comparison-low">
                            최저가
                        </button>
                        <p></p>
                    </div>
                ))}
            </div>
            {products.length > visible && (
                <button
                    onClick={showMore}
                    className="product-comparison-button"
                >
                    {showAll ? '적게 보기' : '더 보기 '}
                </button>
            )}
        </div>
    )
}

export default PriceComparison
