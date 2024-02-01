import React, { useState } from 'react'
import './My.css'

function My() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [profileImage, setProfileImage] = useState(null)

    const onIdChange = event => {
        setId(event.target.value)
    }

    const onPasswordChange = event => {
        setPassword(event.target.value)
    }

    const onNameChange = event => {
        setName(event.target.value)
    }

    const onEmailChange = event => {
        setEmail(event.target.value)
    }

    const onPhoneChange = event => {
        setPhone(event.target.value)
    }

    return (
        <div className="my-page-container">
            <div className="info-section">
                <h2>회원정보</h2>
                <div>
                    <label htmlFor="id">아이디</label>
                    <input
                        id="id"
                        className="id-input"
                        type="text"
                        value={id}
                        onChange={onIdChange}
                        placeholder="아이디"
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        className="password-input"
                        type="password"
                        value={password}
                        onChange={onPasswordChange}
                        placeholder="비밀번호"
                    />
                </div>
            </div>

            <div className="input-box">
                <h2>개인정보</h2>
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        id="name"
                        className="name-input"
                        type="text"
                        value={name}
                        onChange={onNameChange}
                        placeholder="이름"
                    />
                </div>

                <div>
                    <label htmlFor="phone">전화번호</label>
                    <input
                        id="phone"
                        className="phone-input"
                        type="tel"
                        value={phone}
                        onChange={onPhoneChange}
                        placeholder="전화번호"
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className="email-input"
                        type="email"
                        value={email}
                        onChange={onEmailChange}
                        placeholder="이메일"
                    />
                </div>
            </div>
        </div>
    )
}

export default My
