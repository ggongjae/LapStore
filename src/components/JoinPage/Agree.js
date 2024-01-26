import { useState } from 'react'
import React from 'react'
import './Agree.css'
function Agree() {
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

    const handleChange = event => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleJoin = () => {}

    return (
        <div className="join-box">
            <div className="join-title-box">
                <h1 className="join-title">회원가입</h1>
            </div>
            <div className="join-input-box">
                <div>
                    <p>아이디</p>
                    <input
                        className="id"
                        type="email"
                        name="id"
                        value={user.id}
                        onChange={handleChange}
                        placeholder="아이디"
                    />
                </div>
                <p>비밀번호</p>
                <input
                    className="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호 입력"
                />
                <p>비밀번호 재확인</p>
                <input
                    className="password"
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    placeholder="비밀번호 재입력"
                />
                <p>이름</p>
                <input
                    className="name"
                    type="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="이름"
                />
                <p>휴대폰 번호</p>
                <input
                    className="phone"
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="휴대전화"
                />
                <p>인증번호</p>
                <input
                    className="verification-code"
                    type="text"
                    name="verificationCode"
                    value={user.verificationCode}
                    onChange={handleChange}
                    placeholder="인증번호"
                />
                <p>E-mail</p>
                <input
                    className="email"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="이메일주소 입력"
                />
            </div>
            <div>
                <button className="join-submit-btn" onClick={handleJoin}>
                    가입
                </button>
            </div>
        </div>
    )
}

export default Agree
