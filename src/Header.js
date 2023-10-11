import "./css/Header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="main-header">
      <img src = "/로고.png" className="main-header_logo"></img>
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
          <Link to = "/Login"><button span className="user1">로그인</button></Link>
          <Link to = "/Join"><button span className="user2">회원가입</button></Link>
          <button span className="user3">관심상품</button>
          <Link to = "/MyPage"><button span className="user4">마이페이지</button></Link>
        </div>
      </div>

    
    </div>
  );
};

export default Header;
