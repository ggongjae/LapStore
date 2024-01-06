import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Image = () =>{
    const images = ["./배너1.png","./배너2.png","./배너3.png","./배너4.png" ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    };
    const handleBeforeImage = () => {
        const beforeIndex = (currentImageIndex - 1) % images.length;
        setCurrentImageIndex(beforeIndex);
        };
    return(
        <div>
            <img className="image" src={images[currentImageIndex]} alt="Main Image" />
            <button className="icon-container-right" onClick={handleNextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button className="icon-container-left" onClick={handleBeforeImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
    );
};

export default Image;