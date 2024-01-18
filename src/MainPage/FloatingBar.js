// FloatingBar.js
import React from 'react'
import './FloatingBar.css' // FloatingBar 컴포넌트의 스타일시트
import { Link } from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // 부드러운 스크롤 효과를 위해
    })
}

const FloatingBar = () => {
    return (
        <div className="floating-bar">
            <div className="floating-item" onClick={scrollToTop}>
                <img src="/맨 위로.png" alt="Top" />
            </div>
            <div className="floating-item">
                <Link to="/Mypage">
                    <img src="/내 정보.png" alt="Profile" />
                </Link>
            </div>
            <div className="floating-item">
                <img src="/관심상품.png" alt="Favorites" />
            </div>
            <div className="floating-ite">
                <img src="/추천받기.png" alt="Recommendations" />
            </div>
        </div>
    )
}

export default FloatingBar
