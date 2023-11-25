import React from "react";
import './Detail.css';
import Header from "../Header";
import Footer from "../Footer";
import PrintImage from "../사진/프린트.png"
import SaveImage from "../사진/Save.png"
import DownloadImage from "../사진/Group 140.png"
import DecalarationImage from "../사진/Group 139.png"
import { useParams } from "react-router-dom";
import DetailedInformation from "./DetailedInformation";

const Detail = ({ fakeRecommendations }) => {
    const { productId } = useParams();
    const product = fakeRecommendations.find(product => product.id === parseInt(productId));

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
                        <div className="product-detail-top">
                            <div className="product-detail-image"></div>
                            <div className="product-detail-content">
                                <h2 className="product-detail-name">{product.name}</h2>
                                <div className="produc-detail-1">
                                    <p className="product-detail-manufacturer">제조사: {product.manufacturer}</p>
                                    <p className="product-detail-brand">브랜드: {product.brand}</p>
                                    <p className="product-detail-registeredDate">등록일:{product.registeredDate}</p>
                                </div>
                                <p className="product-detail-lowest">최저가 무료배송</p>
                                <div className="product-detail-price-action">
                                    <p className="product-detail-price">{product.가격}</p>
                                    <button className="product-detail-buy">최저가 구매</button>
                                </div>
                            </div>
                            <div className="product-other-prices">
                                
                            </div>
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
                
                <DetailedInformation product={product}/>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;
