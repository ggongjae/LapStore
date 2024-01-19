import React, { useState, PureComponent } from 'react'
import StarRatings from 'react-star-ratings' // 별점 컴포넌트
import './DetailProductReview.css'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
const DetailedProductReview = () => {
    const [reviews, setReviews] = useState([
        {
            userId: 'user1',
            date: '2023-01-01',
            text: '좋아요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user2',
            date: '2023-01-02',
            text: '별로에요...',
            rating: 2,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user3',
            date: '2023-01-03',
            text: '괜찮아요',
            rating: 3,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user4',
            date: '2023-01-04',
            text: '아주 좋아요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        { userId: 'user5', date: '2023-01-05', text: '그저 그래요', rating: 3 },
        {
            userId: 'user6',
            date: '2023-01-06',
            text: '나쁘지 않아요',
            rating: 4,
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },

        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
        {
            userId: 'user7',
            date: '2023-01-07',
            text: '완벽해요!',
            rating: 5,
            image: 'https://via.placeholder.com/150',
        },
    ])

    const averageRating =
        reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

    const ratingCounts = Array(5).fill(0)
    reviews.forEach(review => ratingCounts[review.rating - 1]++)

    const graphData = ratingCounts.map((count, index) => ({
        name: `${index + 1}점`,
        count,
    }))
    const totalReviews = reviews.length

    const ratingPercentages = ratingCounts.map(count =>
        ((count / totalReviews) * 100).toFixed(1)
    )
    const photoReviews = reviews.filter(review => review.image).slice(0, 12)

    // 포토 리뷰 상태
    const [showAllPhotos, setShowAllPhotos] = useState(false)

    // 최대 표시 가능한 포토 리뷰 수
    const maxPhotoDisplay = 10

    // 포토 리뷰를 최대 개수까지만 표시하기 위한 상태
    const displayPhotoReviews = showAllPhotos
        ? photoReviews
        : photoReviews.slice(0, maxPhotoDisplay)
    const extraPhotoCount = photoReviews.length - maxPhotoDisplay

    // 나머지 포토 리뷰 개수를 표시하는 요소
    const renderExtraPhotosIndicator = () => {
        if (extraPhotoCount > 0 && !showAllPhotos) {
            return (
                <div
                    className="extra-photos-indicator"
                    onClick={() => setShowAllPhotos(true)}
                >
                    +{extraPhotoCount}
                </div>
            )
        }
    }
    // 페이지네이션과 필터링을 위한 상태
    const [currentPage, setCurrentPage] = useState(1)
    const [filterRating, setFilterRating] = useState(0) // 필터링을 위한 상태

    const reviewsPerPage = 5 // 한 페이지에 표시할 리뷰 수

    // 선택된 별점에 따라 리뷰를 필터링하는 로직
    const filteredReviews = filterRating
        ? reviews.filter(review => review.rating === filterRating)
        : reviews

    // 현재 페이지에 맞는 필터링된 리뷰를 계산하는 로직
    const indexOfLastReview = currentPage * reviewsPerPage
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage
    const currentFilteredReviews = filteredReviews.slice(
        indexOfFirstReview,
        indexOfLastReview
    )

    // 페이지 번호를 렌더링하는 로직
    const pageNumbers = []
    for (
        let i = 1;
        i <= Math.ceil(filteredReviews.length / reviewsPerPage);
        i++
    ) {
        pageNumbers.push(i)
    }

    // 별점 필터 버튼을 클릭했을 때 실행되는 함수
    const handleFilterClick = rating => {
        setFilterRating(rating)
        setCurrentPage(1) // 필터링 후 첫 페이지로 리셋
    }

    // 페이지 번호 버튼을 렌더링하는 함수
    const renderPageNumbers = pageNumbers.map(number => (
        <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`page-number ${currentPage === number ? 'active' : ''}`}
        >
            {number}
        </button>
    ))
    // 첫 페이지로 이동하는 버튼
    const goToFirstPage = () => {
        setCurrentPage(1)
    }

    // 마지막 페이지로 이동하는 버튼
    const goToLastPage = () => {
        setCurrentPage(pageNumbers.length)
    }

    // 다음 페이지로 이동하는 버튼
    const goToNextPage = () => {
        setCurrentPage(prev => (prev < pageNumbers.length ? prev + 1 : prev))
    }

    // 이전 페이지로 이동하는 버튼
    const goToPreviousPage = () => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))
    }

    return (
        <div className="review-container">
            <div>
                <h2 className="review-heading">상품 리뷰</h2>
                <div className="rating-chart">
                    <div className="average-rating-section">
                        <p className="rating-text">사용자 별점</p>
                        <div className="rating-value">
                            <p className="rating-value1">
                                {averageRating.toFixed(1)}{' '}
                            </p>{' '}
                            <p className="rating-value2">/ 5</p>
                        </div>
                        <StarRatings
                            rating={averageRating}
                            numberOfStars={5}
                            starRatedColor="yellow"
                            starDimension="40px"
                            name="rating"
                        />
                    </div>
                    <div className="chart-section">
                        <ResponsiveContainer width={600} height={100}>
                            <BarChart data={graphData}>
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Bar dataKey="count" fill="rgb(23, 110, 255)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="photo-reviews">
                <div className="photo-container">
                    {displayPhotoReviews.map((review, index) => (
                        <img
                            key={index}
                            src={review.image}
                            alt={`review-${index}`}
                        />
                    ))}
                    {renderExtraPhotosIndicator()}
                </div>
            </div>
            <p>전체리뷰 ({totalReviews})</p>
            <div className="filter-buttons">
                <button
                    onClick={() => handleFilterClick(0)}
                    className={`filter-button ${
                        filterRating === 0 ? 'active' : ''
                    }`}
                >
                    전체 보기({totalReviews})
                </button>
                {[5, 4, 3, 2, 1].map(star => (
                    <button
                        key={star}
                        onClick={() => handleFilterClick(star)}
                        className={`filter-button ${
                            filterRating === star ? 'active' : ''
                        }`}
                    >
                        {star} 점 (
                        {
                            reviews.filter(review => review.rating === star)
                                .length
                        }
                        )
                    </button>
                ))}
            </div>
            <div className="reviews-list">
                {currentFilteredReviews.map((review, index) => (
                    <div key={index} className="review-item">
                        <StarRatings
                            rating={review.rating}
                            numberOfStars={5}
                            starRatedColor="yellow"
                            starDimension="20px"
                            name="rating"
                        />
                        <p>
                            {review.userId}, {review.date}
                        </p>
                        <p>{review.text}</p>
                        {review.image && (
                            <img src={review.image} alt="review" />
                        )}
                    </div>
                ))}
                <div className="page-navigation">
                    {currentPage > 1 && (
                        <>
                            <button
                                onClick={goToFirstPage}
                                className="first-page"
                            >
                                «
                            </button>
                            <button
                                onClick={goToPreviousPage}
                                className="previous-page"
                            >
                                ‹
                            </button>
                        </>
                    )}
                    {renderPageNumbers}
                    {currentPage < pageNumbers.length && (
                        <>
                            <button
                                onClick={goToNextPage}
                                className="next-page"
                            >
                                ›
                            </button>
                            <button
                                onClick={goToLastPage}
                                className="last-page"
                            >
                                »
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailedProductReview
