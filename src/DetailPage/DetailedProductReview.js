import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';  // 별점 컴포넌트
import './DetailProductReview.css';

const DetailedProductReview = () => {
    const [reviews, setReviews] = useState([
        { userId: 'user1', date: '2023-01-01', text: '좋아요!', rating: 5, image: 'https://via.placeholder.com/150' },
        { userId: 'user2', date: '2023-01-02', text: '별로에요...', rating: 2, image: 'https://via.placeholder.com/150' },
        { userId: 'user3', date: '2023-01-03', text: '괜찮아요', rating: 3, image: 'https://via.placeholder.com/150' },
        { userId: 'user4', date: '2023-01-04', text: '아주 좋아요!', rating: 5, image: 'https://via.placeholder.com/150' },
        { userId: 'user5', date: '2023-01-05', text: '그저 그래요', rating: 3 },
        { userId: 'user6', date: '2023-01-06', text: '나쁘지 않아요', rating: 4 },
        { userId: 'user7', date: '2023-01-07', text: '완벽해요!', rating: 5, image: 'https://via.placeholder.com/150' },
    ]);

    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    const ratingCounts = Array(5).fill(0);
    reviews.forEach(review => ratingCounts[review.rating - 1]++);

    const totalReviews = reviews.length;
    const ratingPercentages = ratingCounts.map(count => (count / totalReviews * 100).toFixed(1));

    const photoReviews = reviews.filter(review => review.image).slice(0, 12);

    return (
        <div className="review-container">
            <p>사용자 별점</p>
            <p>{averageRating.toFixed(1)} / 5</p>
            <StarRatings rating={averageRating} numberOfStars={5} starRatedColor="yellow" starDimension="40px" name='rating' />
        
            <div className="rating-counts">
                {ratingPercentages.map((percentage, index) => (
                    <div key={index} className="rating-bar-container">
                        <div className="rating-bar-background">
                            <div className="rating-bar" style={{ width: `${percentage}%` }}></div>
                        </div>
                        <p className="rating-label">{index+1} 점: </p>
                        <p>{percentage}%</p>
                    </div>
                ))}
            </div>
            <div className="photo-reviews">
                <p>포토리뷰</p>
                {photoReviews.map((review, index) => (
                    <img key={index} src={review.image} alt="review" />
                ))}
            </div>
            <div className="reviews-list">
                <p>전체리뷰</p>
                {reviews.map((review, index) => (
                    <div key={index} className="review-item">
                        <StarRatings rating={review.rating} numberOfStars={5} starRatedColor="yellow" starDimension="20px" name='rating' />
                        <p>{review.userId}, {review.date}</p>
                        <p>{review.text}</p>
                        {review.image && <img src={review.image} alt="review" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailedProductReview;
