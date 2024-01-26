import { useState } from 'react'
import React from 'react'
import './Join.css'
function Join() {
    const [user, setUser] = useState({
        id: '',
        password: '',
        name: '',
        phone: '',
        email: '',
        verificationCode: '', // 인증번호
        registrationDate: '',
        isAdmin: false,
    })

    const isValidEmail = email => {
        const re =
            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email.toLowerCase())
    }

    const isValidPhoneNumber = phone => {
        const re = /^\d{10,11}$/
        return re.test(phone)
    }

    const isValidPassword = password => {
        return password.length >= 6 // 예시로, 최소 6자 이상이어야 함
    }

    // 상태 추가
    const [isIdValid, setIsIdValid] = useState(true)
    const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    // ID 중복 검사 함수
    const handleCheckId = async () => {
        // ID 중복 검사 로직 구현...
        // 결과에 따라 isIdValid 상태 업데이트
        setIsIdValid(false) // 예시로, 중복되지 않음을 나타냄
    }

    // 인증번호 발송 함수
    const handleSendVerificationCode = async () => {
        // 인증번호 발송 로직 구현...
        setIsVerificationCodeSent(true) // 인증번호 발송 상태 업데이트
    }

    // 인증번호 확인 함수
    const handleVerifyCode = async () => {
        // 인증번호 확인 로직 구현...
        setIsVerified(true) // 예시로, 인증되었음을 나타냄
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleJoin = () => {
        // 모든 필드에 대한 유효성 검사
        if (!isValidEmail(user.email)) {
            alert('유효하지 않은 이메일 주소입니다.')
            return
        }
        if (!isValidPhoneNumber(user.phone)) {
            alert('유효하지 않은 전화번호입니다.')
            return
        }
        if (!isValidPassword(user.password)) {
            alert('비밀번호는 최소 6자 이상이어야 합니다.')
            return
        }
        if (user.password !== user.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.')
            return
        }

        // 서버로 데이터 전송 로직 구현
        // 예: axios.post('/api/register', user)
        console.log('회원가입 정보:', user)
        alert('회원가입이 완료되었습니다.')
    }
    return (
        <div className="join-box">
            <div className="join-title-box">
                <h1 className="join-title">회원가입</h1>
            </div>
            <div className="join-input-box">
                <div>
                    <label htmlFor="id">아이디</label>
                    <span>*</span>
                </div>
                <div>
                    <input
                        id="id"
                        className="join-input"
                        type="email"
                        name="id"
                        value={user.id}
                        onChange={handleChange}
                        placeholder="아이디"
                    />
                    <button
                        className="check-id-btn"
                        onClick={handleCheckId}
                        disabled={isIdValid}
                    >
                        중복확인
                    </button>
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <span>*</span>
                </div>
                <input
                    id="password"
                    className="join-input"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호 입력"
                />
                <div>
                    <label htmlFor="confirmPassword">비밀번호 재확인</label>
                    <span>*</span>
                </div>
                <input
                    id="confirmPassword"
                    className="join-input"
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    placeholder="비밀번호 재입력"
                />
                <div>
                    <label htmlFor="name">이름</label>
                    <span>*</span>
                </div>
                <input
                    id="name"
                    className="join-input"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="이름"
                />
                <div>
                    <label htmlFor="phone">휴대폰 번호</label>
                    <span>*</span>
                </div>
                <div>
                    <input
                        id="phone"
                        className="join-input"
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="휴대전화"
                    />
                    <button
                        className="send-code-btn"
                        onClick={handleSendVerificationCode}
                    >
                        인증번호
                    </button>
                </div>
                <div>
                    <label htmlFor="verificationCode">인증번호</label>
                    <span>*</span>
                </div>
                <div>
                    <input
                        id="verificationCode"
                        className="join-input"
                        type="text"
                        name="verificationCode"
                        value={user.verificationCode}
                        onChange={handleChange}
                        placeholder="인증번호"
                    />
                    <button
                        className="verify-code-btn"
                        onClick={handleVerifyCode}
                        disabled={isVerified}
                    >
                        확인
                    </button>
                </div>
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    className="join-input"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="이메일주소 입력"
                />
                <div className="join-submit-box">
                    <button className="join-submit-btn" onClick={handleJoin}>
                        가입
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Join
