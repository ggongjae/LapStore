import React from "react";
import './Detail.css';
import Header from "../Header";
import Footer from "../Footer";
import PrintImage from "../사진/프린트.png"
import SaveImage from "../사진/Save.png"
import DownloadImage from "../사진/Group 140.png"
import DecalarationImage from "../사진/Group 139.png"
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
                    <div className="product-detail-border"></div>
                    <div className="action-buttons">
                        <img src= {SaveImage}></img><button>찜하기</button>
                        <img src= {DecalarationImage}></img><button>신고하기</button>
                        <img src= {DownloadImage}></img><button>공유하기</button>
                        <img src= {PrintImage}></img><button>출력하기</button>
                    </div>
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
