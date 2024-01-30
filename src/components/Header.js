import './Header.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const onSearchSubmit = event => {
        event.preventDefault()
        console.log('검색어:', searchTerm)
        // TODO: 검색 결과 페이지로 리다이렉트하거나 검색 결과를 표시하는 로직을 추가
    }

    return (
        <div className="main-header">
            <Link to="/">
                <img src="/로고.png" alt="로고" className="main-header_logo" />
            </Link>
            <div className="main-header_search">
                <form className="search-box" onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        onChange={onSearchChange}
                        value={searchTerm}
                    />
                    <div className="search-line"></div>
                    <button
                        type="submit"
                        className="search-button"
                        style={{ color: 'gray' }}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            <div className="main-header_user">
                <div className="user">
                    <Link to="/Login">
                        <button span className="user1">
                            로그인
                        </button>
                    </Link>
                    <Link to="/Join">
                        <button span className="user2">
                            회원가입
                        </button>
                    </Link>
                    <button span className="user3">
                        관심상품
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
