import React from "react";
import './Detail.css';
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const Detail = ({ fakeRecommendations }) => {
    const { productId } = useParams();
    const product = fakeRecommendations.find(product => product.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Header />
            <div>
                <div className="bigbox">
                    <div className="product-detail">
                        <div className="product-detail-image">
                            <img src={product.imageURL} alt={product.name} />
                        </div>
                        <div className="product-detail-content">
                            <h2 className="product-detail-name">{product.name}</h2>
                            <p className="product-detail-description">{product.description}</p>
                            <p className="product-detail-price">{product.가격}</p>
                            <div className="product-detail-specs">
                                <p>Os: {product.Os}</p>
                                <p>저장장치: {product.저장장치}</p>
                                <p>CPU: {product.CPU}</p>
                                <p>VGA: {product.VGA}</p>
                                <p>RAM: {product.RAM}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;
