import React from 'react'
import { Link } from 'react-router-dom'
import './Recommend.css'

const Recommend = () => {
    return (
        <div className="main-header_search">
            <p>원하는 가격대가 있나요?</p>

            <div className="search_price">
                <input
                    type="text"
                    className="text"
                    placeholder="금액 입력"
                    size={10}
                    maxLength={5}
                />
                <a> 만원에서 </a>
                <input
                    type="text"
                    className="text"
                    placeholder="금액 입력"
                    size={10}
                    maxLength={5}
                />
                <a> 만원까지가 적당해요</a>
            </div>
            <br></br>
            <br></br>

            <p>어떤 브랜드를 원하시나요?</p>

            <div>
                <button className="brand_name"> #삼성 </button>
                <button className="brand_name"> #LG </button>
                <button className="brand_name"> #애플 </button>
                <button className="brand_name"> #LENOVO </button>
                <button className="brand_name"> #ASUS </button>
            </div>

            <br></br>
            <br></br>
            <p>노트북으로 무엇을 할 것인가요?</p>

            <div>
                <button className="multipurpose"> #문서 정리·강의 시청 </button>
                <button className="multipurpose"> #그래픽 작업 </button>
                <button className="multipurpose"> #간단한 영상 작업 </button>
                <button className="multipurpose"> #3D 작업 </button>
                <button className="multipurpose"> #영상 작업 </button>
            </div>

            <br></br>
            <br></br>
            <p>
                실행할 게임, 프로그램을 모두 말해주세요 {'('}최대 5개{')'}
                <input
                    type="text"
                    className="contents"
                    placeholder=""
                    size={50}
                    maxLength={5}
                />
            </p>

            <button className="multipurpose"> 일러스트레이션 </button>
            <button className="multipurpose"> GTA </button>

            <div>
                <br></br> <br></br>
                <Link to="/result">
                    <button className="result"> 결과 확인하기 </button>
                </Link>
            </div>
        </div>
    )
}
export default Recommend
