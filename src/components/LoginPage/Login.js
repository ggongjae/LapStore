import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const onIdHandler = event => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = event => {
        setPassword(event.currentTarget.value)
    }
    return (
        <div>
            <div className="box">
                <div className="box1">
                    <div className="login_h1_box">
                        <Link to="/">
                            <img src="/로고.png"></img>
                        </Link>
                    </div>
                    <div className="input_box">
                        <input
                            className="id"
                            type="email"
                            value={id}
                            onChange={onIdHandler}
                            placeholder="아이디"
                        ></input>{' '}
                        <br />
                        <input
                            className="password"
                            type="password"
                            value={password}
                            onChange={onPasswordHandler}
                            placeholder="비밀번호"
                        ></input>
                        <br />
                    </div>
                    <button className="login_btn"> 로그인 </button> <br />
                    <div className="a_box">
                        <Link to="/Join">
                            <a href="#" className="a_box_1">
                                {' '}
                                회원가입{' '}
                            </a>
                        </Link>{' '}
                        |
                        <a href="#" className="a_box_2">
                            {' '}
                            아이디/비밀번호 찾기{' '}
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
