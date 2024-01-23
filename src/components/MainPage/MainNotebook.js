import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './MainNotebook.css'

const MainNotebook = () => {
    const [videos, setVideos] = useState([]) // 여러 개의 영상 정보를 저장

    useEffect(() => {
        const API_KEY = 'AIzaSyC5-I0htddriGWWmwBvy0022bn43xyWmas'
        const videoIds = [
            'VM9eGyOMkyc',
            'qcnXXhEiCVY',
            'U6SUnX1kt30',
            'q5nyKSJtCc8',
            'rWL-re30OKE',
            'bCwTqO5NfkA',
            'nGPYvLK2R-E',
            '1rtD8sXcXpI',
            'tZV_MeKoPis',
            'NGk3CW8jPvc',
            '1-7GmmSAljg',
            '0aRVMvlIyJg',
        ] // 실제 영상 ID로 대체하세요
        const maxResults = 6

        // 배열을 랜덤하게 섞는 함수
        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }

        Promise.all(
            shuffleArray(videoIds)
                .slice(0, maxResults)
                .map(videoId => {
                    return axios.get(
                        `https://www.googleapis.com/youtube/v3/videos`,
                        {
                            params: {
                                part: 'snippet,statistics',
                                id: videoId,
                                key: API_KEY,
                            },
                        }
                    )
                })
        )
            .then(responses => {
                const videoData = responses.map(res => ({
                    ...res.data.items[0],
                    formattedPublishedAt: formatPublishedAt(
                        res.data.items[0].snippet.publishedAt
                    ),
                }))
                setVideos(videoData)
            })
            .catch(error => {
                console.error('비디오 가져오기 에러:', error)
            })
    }, [])

    const formatPublishedAt = publishedAt => {
        const now = new Date()
        const publishedDate = new Date(publishedAt)

        const timeDiff = now - publishedDate

        if (timeDiff < 1000 * 60 * 60 * 24) {
            // 24시간 이내
            const hours = Math.floor(timeDiff / (1000 * 60 * 60))
            return `${hours}시간 전`
        } else if (timeDiff < 1000 * 60 * 60 * 24 * 30.44) {
            // 1개월 이내
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
            return `${days}일 전`
        } else if (timeDiff < 1000 * 60 * 60 * 24 * 365 * 2) {
            // 2년 이내
            const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44))
            return `${months}개월 전`
        } else {
            const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))
            return `${years}년 전`
        }
    }

    const formatViewCount = viewCount => {
        const parsedViewCount = parseFloat(viewCount)
        if (parsedViewCount >= 1000000) {
            return `${(parsedViewCount / 10000).toFixed(0)}만회`
        } else if (parsedViewCount >= 10000) {
            return `${(parsedViewCount / 10000).toFixed(1)}만회`
        }
        return `${parsedViewCount.toLocaleString()}회`
    }

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...'
        }
        return title
    }

    return (
        <div>
            <div className="notebook_information">
                <div className="notebook_information_content">
                    <p className="notebook_information_content_title">
                        노트북 정보 알아보기
                    </p>
                    <a href="" className="notebook_information_content_more">
                        더많은 영상 보기{' '}
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                    <div className="video-grid">
                        {videos.map(video => (
                            <div key={video.id} className="video-item">
                                <iframe
                                    width="360"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                >
                                    {truncateTitle(video.snippet.title, 60)}
                                </a>
                                <div className="video-item-title">
                                    <p>{video.snippet.channelTitle}</p>

                                    <p>{video.formattedPublishedAt}</p>
                                    <p>
                                        조회수:{' '}
                                        {formatViewCount(
                                            video.statistics.viewCount
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNotebook
