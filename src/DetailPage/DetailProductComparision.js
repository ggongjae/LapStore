import React, { useState } from 'react'
import './DetailProductComparison.css' // CSS 파일 불러오기

const products = [
    {
        id: 1,
        details: {
            image: 'image-path-1.jpg', // 이미지 경로
            dimensions: '45.7cm x 19.5kg',
            rating: 4.5,
            name: 'ASUS ROG STRIX G18 JV-N500',
            hashtags: [
                '#Gaming',
                '#ASUS',
                '#ROGSTRIX',
                '#Performance',
                '#Innovation',
            ],
        },
        price: '1,569,490원',
        releaseDate: '2021.04',
        cpu: '인텔 i7 11세대',
        screenSize: '17인치 45.7cm',
        os: '윈도우 10',
        gpu: 'GTX 1650 Ti',
        ssd: '500GB',
    },
    {
        id: 2,
        details: {
            image: 'image-path-2.jpg',
            dimensions: '40.8cm x 18kg',
            rating: 4.7,
            name: 'Dell XPS 15',
            hashtags: [
                '#Workstation',
                '#Dell',
                '#XPSSeries',
                '#HighEnd',
                '#Professional',
            ],
        },
        price: '2,250,000원',
        releaseDate: '2022.05',
        cpu: '인텔 i9 12세대',
        screenSize: '15인치 40.8cm',
        os: '윈도우 11',
        gpu: 'RTX 3050 Ti',
        ssd: '1TB',
    },
    {
        id: 3,
        details: {
            image: 'image-path-3.jpg',
            dimensions: '42cm x 20kg',
            rating: 4.6,
            name: 'HP Omen 17',
            hashtags: ['#Gaming', '#HP', '#Omen', '#4K', '#VRReady'],
        },
        price: '2,100,000원',
        releaseDate: '2021.11',
        cpu: 'AMD Ryzen 9',
        screenSize: '17인치 42cm',
        os: '윈도우 10',
        gpu: 'RX 6600M',
        ssd: '1TB',
    },
    {
        id: 4,
        details: {
            image: 'image-path-4.jpg',
            dimensions: '38cm x 17kg',
            rating: 4.8,
            name: 'MacBook Pro',
            hashtags: [
                '#Professional',
                '#Apple',
                '#MacBook',
                '#TouchBar',
                '#M1Chip',
            ],
        },
        price: '3,050,000원',
        releaseDate: '2022.01',
        cpu: 'Apple M1 Pro',
        screenSize: '16인치 38cm',
        os: 'macOS',
        gpu: 'Integrated 16-core GPU',
        ssd: '512GB',
    },
    {
        id: 5,
        details: {
            image: 'image-path-5.jpg',
            dimensions: '34cm x 15.5kg',
            rating: 4.3,
            name: 'Acer Predator Helios 300',
            hashtags: ['#Gaming', '#Acer', '#Predator', '#144Hz', '#Overclock'],
        },
        price: '1,899,000원',
        releaseDate: '2021.07',
        cpu: '인텔 i7 10세대',
        screenSize: '15.6인치 34cm',
        os: '윈도우 10',
        gpu: 'GTX 1660 Ti',
        ssd: '512GB',
    },
]

const DetailProductComparision = () => {
    const [filters, setFilters] = useState({
        popular: false,
        similarPrice: false,
        newProduct: false,
        interested: false,
    })

    const handleChange = event => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked,
        })
    }

    return (
        <div>
            <div className="product-comparison">
                <h2 className="comparison-title">상품비교</h2>
                <hr className="comparison-divider" />
                <form className="comparison-form">
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="popular"
                                checked={filters.popular}
                                onChange={handleChange}
                                className="hidden-checkbox"
                            />
                            <span className="custom-checkbox">
                                {filters.popular ? '✔' : ''}
                            </span>
                            인기상품
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="similarPrice"
                                checked={filters.similarPrice}
                                onChange={handleChange}
                                className="hidden-checkbox"
                            />
                            <span className="custom-checkbox">
                                {filters.similarPrice ? '✔' : ''}
                            </span>
                            비슷한 가격대
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="newProduct"
                                checked={filters.newProduct}
                                onChange={handleChange}
                                className="hidden-checkbox"
                            />
                            <span className="custom-checkbox">
                                {filters.newProduct ? '✔' : ''}
                            </span>
                            신상품
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="interested"
                                checked={filters.interested}
                                onChange={handleChange}
                                className="hidden-checkbox"
                            />
                            <span className="custom-checkbox">
                                {filters.interested ? '✔' : ''}
                            </span>
                            관심상품
                        </label>
                    </div>
                </form>
            </div>
            <div className="dpc-product-comparison-container">
                <table className="dpc-table">
                    <tbody>
                        <tr>
                            <th>상품정보</th>
                            {products.map(product => (
                                <td key={product.id}>
                                    <img
                                        src={product.details.image}
                                        alt={product.details.name}
                                    />
                                    <div>{product.details.dimensions}</div>
                                    {product.details.hashtags.map(
                                        (tag, index) => (
                                            <div key={index}>{tag}</div>
                                        )
                                    )}
                                    <div>{`★ ${product.details.rating}`}</div>
                                    <div>{product.details.name}</div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th>최저가</th>
                            {products.map(product => (
                                <td key={product.id}>{product.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>출시일</th>
                            {products.map(product => (
                                <td key={product.id}>{product.releaseDate}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>CPU 종류</th>
                            {products.map(product => (
                                <td key={product.id}>{product.cpu}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>화면 크기</th>
                            {products.map(product => (
                                <td key={product.id}>{product.screenSize}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>운영체제</th>
                            {products.map(product => (
                                <td key={product.id}>{product.os}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>GPU 칩셋</th>
                            {products.map(product => (
                                <td key={product.id}>{product.gpu}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>SSD 용량</th>
                            {products.map(product => (
                                <td key={product.id}>{product.ssd}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DetailProductComparision
