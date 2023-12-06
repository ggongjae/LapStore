import React from 'react';


const ProductComparison = () => {
    // 상품 정보 데이터
    const productData = [
        {image: 'product1.png', name: '상품1', price: 10000, feature: '특징1'},
        {image: 'product2.png', name: '상품2', price: 20000, feature: '특징2'},
        {image: 'product3.png', name: '상품3', price: 15000, feature: '특징3'},
        {image: 'product4.png', name: '상품4', price: 18000, feature: '특징4'},
        {image: 'product5.png', name: '상품5', price: 12000, feature: '특징5'},
    ];

    return (
        <div className="product-comparison-container">
            {productData.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}원</p>
                    <p>{product.feature}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductComparison;
