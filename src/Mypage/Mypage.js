import React, { useState } from 'react'
import './Mypage.css'

function MyPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onNameChange = event => {
        setName(event.currentTarget.value)
    }

    const onEmailChange = event => {
        setEmail(event.currentTarget.value)
    }

    const onPhoneChange = event => {
        setPhone(event.currentTarget.value)
    }

    return (
        <div className="my-page-container">
            <h1 className="my-page-title">마이 페이지</h1>
            <div className="info-section">
                <p>이름: {name}</p>
                <p>이메일: {email}</p>
                <p>전화번호: {phone}</p>
            </div>
            <h2>Update Info</h2>
            <div className="input-box">
                <input
                    className="name-input"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="이름"
                />
                <input
                    className="email-input"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    placeholder="이메일"
                />
                <input
                    className="phone-input"
                    type="tel"
                    value={phone}
                    onChange={onPhoneChange}
                    placeholder="전화번호"
                />
            </div>
            {/* Update button */}
            <button onClick={() => alert('업데이트')}>업데이트</button>
        </div>
    )
}

export default MyPage
