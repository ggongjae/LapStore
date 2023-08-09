import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Image = () =>{
    const images = ["./Rectangle 5.png", "./Lg.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    };

    return(
        <div>
            <img className="image" src={images[currentImageIndex]} alt="Main Image" />
            <button className="icon-container-right" onClick={handleNextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button className="icon-container-left">
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
    );
};

export default Image;