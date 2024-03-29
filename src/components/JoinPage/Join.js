import { useState } from 'react'
import React from 'react'
import './Join.css'
import Agree from './Agree'

function Join() {
    const [user, setUser] = useState({
        id: '',
        password: '',
        name: '',
        email: '',
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
    // ID 중복 검사와 비밀번호 확인을 위한 상태를 추가합니다.
    const [idDuplicated, setIdDuplicated] = useState(false)
    const [passwordMismatch, setPasswordMismatch] = useState(false)

    const [agree, setAgree] = useState(false) // 초기값을 false로 설정합니다.

    // 상태 추가
    const [isIdValid, setIsIdValid] = useState(true)

    // ID 중복 검사 함수
    const handleCheckId = async () => {
        // ID 중복 검사 로직 구현...
        // 결과에 따라 isIdValid 상태 업데이트
        setIsIdValid(false) // 예시로, 중복되지 않음을 나타냄
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleJoin = () => {
        if (!user.id || !user.password || !user.name || !user.email) {
            alert('모든 필드를 채워주세요.')
            return
        }

        // 이메일 형식 유효성 검사
        if (!isValidEmail(user.email)) {
            alert('유효하지 않은 이메일 주소입니다.')
            return
        }

        // 비밀번호 형식 유효성 검사
        if (!isValidPassword(user.password)) {
            alert('비밀번호는 최소 6자 이상이어야 합니다.')
            return
        }

        // 비밀번호 일치 여부 확인
        if (user.password !== user.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.')
            return
        }
        // 모든 약관에 동의했는지 확인
        if (!agree) {
            alert('모든 약관에 동의해야 회원가입이 가능합니다.')
            return
        }

        // 이 모든 검사를 통과했다면 서버로 데이터 전송 로직 구현
        console.log('회원가입 정보:', user)
        alert('회원가입이 완료되었습니다.')
    }
    // Agree 컴포넌트로부터의 상태를 업데이트하는 콜백 함수입니다.
    const handleAgreeChange = newChecks => {
        // 모든 동의 항목이 체크되었는지 검사합니다.
        const allAgreed = Object.values(newChecks).every(check => check)
        setAgree(allAgreed) // 상태를 업데이트합니다.
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
                    {idDuplicated && (
                        <span className="id-duplicated-warning">
                            아이디 중복
                        </span>
                    )}
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
                {passwordMismatch && (
                    <span className="password-mismatch-warning">
                        비밀번호가 일치하지 않습니다
                    </span>
                )}
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

                <Agree onAgreeChange={handleAgreeChange} />

                <div className="join-submit-box">
                    <button className="join-submit-btn" onClick={handleJoin}>
                        동의하고 가입하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Join
