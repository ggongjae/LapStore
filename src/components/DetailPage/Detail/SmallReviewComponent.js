import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings'
import './SmallReviewComponent.css' // CSS 파일은 별도로 생성하여 스타일을 정의해야 합니다.

const SmallReviewComponent = ({ reviews }) => {
    return (
        <div className="small-review-container">
            {reviews.map((review, index) => (
                <div key={index} className="small-review-item">
                    {review.image && (
                        <img
                            src={review.image}
                            alt={`Review by ${review.userId}`}
                            className="small-review-image"
                        />
                    )}
                    <div className="small-review-footer">
                        <div className="small-review-text">{review.text}</div>
                        <StarRatings
                            rating={review.rating}
                            numberOfStars={5}
                            starDimension="10px"
                            starSpacing="2px"
                            starRatedColor="gold"
                        />
                        <div className="small-review-user">
                            <span className="small-review-date">
                                {review.date}
                            </span>
                            <span className="small-review-user">
                                {review.userId}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SmallReviewComponent
