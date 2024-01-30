import React, { useState } from 'react'
import './My.css'

function MyPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [profileImage, setProfileImage] = useState(null)

    const onNameChange = event => {
        setName(event.target.value)
    }

    const onEmailChange = event => {
        setEmail(event.target.value)
    }

    const onPhoneChange = event => {
        setPhone(event.target.value)
    }

    const onImageChange = event => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setProfileImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const onUpdate = () => {
        // 서버로 정보를 전송하는 로직을 여기에 추가하거나, 예시로 콘솔에 출력
        console.log('업데이트 정보:', { name, email, phone })
        alert('업데이트되었습니다!')
    }

    return (
        <div className="my-page-container">
            <h1 className="my-page-title">마이 페이지</h1>
            <div className="profile-section">
                {profileImage && (
                    <img
                        src={profileImage}
                        alt="프로필 사진"
                        className="profile-image"
                    />
                )}
                <input type="file" accept="image/*" onChange={onImageChange} />
            </div>
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
        </div>
    )
}

export default MyPage
