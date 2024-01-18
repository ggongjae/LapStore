import { useState } from 'react'
import React from 'react'
import './Join.css'
function Join() {
    const [user, setUser] = useState({
        id: '',
        password: '',
        name: '',
        phone: '',
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
                <input
                    className="id"
                    type="email"
                    name="id"
                    value={user.id}
                    onChange={handleChange}
                    placeholder="아이디"
                />
                <br />
                <input
                    className="phone"
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="휴대전화"
                />
                <input
                    className="name"
                    type="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="이름"
                />
                <br />
                <input
                    className="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호 입력"
                />
                <br />
                <input
                    className="password"
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    placeholder="비밀번호 재입력"
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

export default Join
