import React from 'react'
import './MainBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const MainBody = () => {
    return (
        <div>
            <div className="main-body">
                <div className="manufacturer">
                    <a
                        href="https://www.samsungsmall.com/goods/goods_list.php?cateCd=012006"
                        className="Samsung"
                    >
                        <img src="./Samsung.png" alt="Samsung" />
                    </a>
                    <a
                        href="https://www.lge.co.kr/notebook?lineupId=CD00000341&utm_medium=cpc&utm_source=google&utm_campaign=20230809_notebook_gram_sa_bc&utm_term=lg%EB%85%B8%ED%8A%B8%EB%B6%81&utm_content=%ED%83%90%EC%83%89&gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9e6-tuha7f0DFZ1pb7r8uGRYjegZ7gNjutm5C9A_THzw90Q48Q7AlDhoCAT0QAvD_BwE"
                        className="Lg"
                    >
                        <img src="./Lg.png" alt="Lg" />
                    </a>
                    <a
                        href="https://www.apple.com/kr/mac/?afid=p238%7CsRsW2eeOa-dc_mtid_18707vxu38484_pcrid_684734164933_pgrid_124600489586_pntwk_g_pchan__pexid__&cid=aos-kr-kwgo-mac--slid---product-"
                        className="Apple"
                    >
                        <img src="./Apple.png" alt="Apple" />
                    </a>
                    <a
                        href="https://www.lenovo.com/kr/ko/d/deals/special-offers/?cid=kr:sem:4qbc8f&matchtype=e&gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exdPezojI0XxzkfPE5inli6NZRx9GwBkFmNJR-COpEf0J7KINJbC8RoC7_EQAvD_BwE"
                        className="Renova"
                    >
                        <img src="./Renova.png" alt="Renova" />
                    </a>
                    <a
                        href="https://www.asus.com/kr/laptops/for-gaming/all-series/"
                        className="Asus"
                    >
                        <img src="./Asus.png" alt="Asus" />
                    </a>
                </div>

                <div className="main-body-notebook">
                    <div>
                        <button className="entire-notebook">
                            <p className="entire-notebook-1">내게 맞는노트북</p>
                            <p className="entire-notebook-2">
                                나의 용도에 맞는 노트북을{' '}
                                <p> 빠르게 확인해보세요</p>
                            </p>
                            <a href="">전체 상품 보기</a>
                        </button>
                    </div>
                    <div className="notebook">
                        <div className="notebook_1">
                            <button className="student-notebook">
                                학생﹒사무용 노트북 <p></p>
                                <a href="" className="student-notebook-need">
                                    간단한 문서 작업이 필요합니다{' '}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </button>

                            <button className="design-notebook">
                                디자인 노트북<p></p>
                                <a href="" className="design-notebook-need">
                                    <Link to="/Result">
                                        그래픽 작업이 필요합니다{' '}
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </Link>
                                </a>
                            </button>

                            <button className="video-notebook">
                                3D,영상 노트북<p></p>
                                <a href="" className="video-notebook-need">
                                    렌더링 작업이 필요합니다{' '}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </button>
                        </div>

                        <div className="notebook_2">
                            <button className="gaming-notebook">
                                게이밍 노트북<p></p>
                                <a href="" className="gaming-notebook-need">
                                    고성능 게임을 실행합니다{' '}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </button>

                            <button className="develop-notebook">
                                개발자 노트북 <p></p>
                                <a href="" className="develop-notebook-need">
                                    코딩 작업이 필요합니다{' '}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img className="belt-banner" src="/띠 배너.png"></img>
        </div>
    )
}

export default MainBody
