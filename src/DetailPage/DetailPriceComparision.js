import React from 'react';


const PriceComparison = () => {
    // 가격 정보 데이터
    const priceData = [
        {image: 'image1.png', price: 10000},
        {image: 'image2.png', price: 20000},
        {image: 'image3.png', price: 15000},
        {image: 'image4.png', price: 18000},
        // ... 나머지 가격 정보
    ];

    return (
        <div className="price-comparison-container">
            {priceData.map((data, index) => (
                <div key={index} className="price-item">
                    <img src={data.image} alt="product" />
                    <p>{data.price}원</p>
                </div>
            ))}
        </div>
    );
};

export default PriceComparison;
