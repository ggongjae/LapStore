// FloatingBar.js
import React, { useEffect, useState } from 'react'
import './FloatingBar.css' // FloatingBar 컴포넌트의 스타일시트
import { Link } from 'react-router-dom'

const FloatingBar = () => {
    const [isSticky, setIsSticky] = useState(false)
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        // 플로팅 바가 고정될 위치
        const stickyPosition = 800 // 예시 값, 실제 위치에 맞게 조정 필요
        // 스크롤 위치가 stickyPosition에 도달했는지 확인
        setIsSticky(window.scrollY >= stickyPosition)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`floating-bar ${isSticky ? 'sticky' : ''}`}>
            <div className="floating-item" onClick={useEffect}>
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
