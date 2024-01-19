import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-contain">
                    <div className="footer-links">
                        <p>렙스토어 소개 |</p>
                        <p>이용약관 |</p>
                        <p>
                            <strong>개인정보처리방법</strong>
                        </p>
                        <p>| 청소년보호방침 |</p>
                        <p>광고센터 |</p>
                        <p>입점문의 |</p>
                        <p>고객센터</p>
                    </div>
                    <br />
                    <p>
                        <strong>(주) 랩스토어</strong>
                    </p>
                    <div className="footer-company-info">
                        <p>대표이사: 유병진</p>
                        <p>경기도 용인시 처인구 명지로 116</p>
                        <p>사업자등록번호: 031-05-2023</p>
                        <p>통신판매신고: 2023-용인처인-1999호</p>
                    </div>
                    <div className="footer-contact-info">
                        <p>대표번호: 031) 1234 - 5678</p>
                        <p>팩스: 031) 8756 - 4321</p>
                        <p>문의: abc1234@mju.ac.kr</p>
                    </div>
                    <br />
                    <br />
                    <p>
                        (주) 랩스토어는 통신판매 정보제공자로서 통신판매의
                        거래대상자가 아니며, 상품의 주문/배송/환불에 대한 의무와
                        책임은 각 쇼핑몰(판매자)에게 있습니다.
                    </p>
                    <p>Copyright ⓒ Lapstore Inc. All rights reserved.</p>
                    <br />
                </div>
            </footer>
        </div>
    )
}

export default Footer
