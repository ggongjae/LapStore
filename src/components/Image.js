import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const Image = () => {
    const images = ['./배너1.png', './배너2.png', './배너3.png', './배너4.png']
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000) // 3000ms = 3초

        // 컴포넌트가 언마운트되면 타이머를 정리합니다.
        return () => clearInterval(timer)
    }, [])

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    const handleBeforeImage = () => {
        setCurrentImageIndex(prevIndex => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1
        })
    }

    return (
        <div>
            <img
                className="image"
                src={images[currentImageIndex]}
                alt="Main Image"
            />
            <button className="icon-container-right" onClick={handleNextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button className="icon-container-left" onClick={handleBeforeImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="image-index">
                {currentImageIndex + 1} / {images.length}
            </div>
        </div>
    )
}

export default Image
