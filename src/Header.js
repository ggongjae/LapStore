import "./css/Header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";
const Header = () => {
  return (
    <div className="main-header">
      <a href="" className="main-header_logo">로고</a>
      <div className="main-header_search">
        <div className="search-box">
          <input type="text" className="search-input"/>
          <div className="search-line"></div>
          <button className="search-button" style={{color:"gray"}}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div className="main-header_user">
        <div className="user">
          <button span className="user1">로그인</button>
          <button span className="user2">회원가입</button>
          <button span className="user3">관심상품</button>
        </div>
      </div>

    
    </div>
  );
};

export default Header;
