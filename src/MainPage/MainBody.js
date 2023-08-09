import React from "react";
import "./MainBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const MainBody = () => {
    return(
      <div className="main-body">
        
          <div className="manufacturer">
            <a href="" className="Samsung"><img src="./Samsung.png" alt="Samsung"/></a>
            <a href="" className="Lg"><img src="./Lg.png" alt="Lg"/></a>
            <a href="" className="Apple"><img src="./Apple.png" alt="Apple"/></a>
            <a href="" className="Renova"><img src="./Renova.png" alt="Renova"/></a>
            <a href="" className="Asus"><img src="./Asus.png" alt="Asus"/></a>
          </div>
            
          <div className="main-body-notebook">
            <div>
              <button className="entire-notebook">
                <p className="entire-notebook-1">내게 맞는노트북</p>
                <p className="entire-notebook-2">나의 용도에 맞는 노트북을 <p> 빠르게 확인해보세요</p></p>
                <a href="">전체 상품 보기</a>
              </button>
            </div>
            <div className="notebook">
              <div className="notebook_1">
              <button className="student-notebook">
                학생﹒사무용 노트북 <p></p>
              <a href="" className="student-notebook-need">
                간단한 문서 작업이 필요합니다  <FontAwesomeIcon icon={faChevronRight} />
              </a>
              </button>
  
              <button className="design-notebook">
                디자인 노트북<p></p>
              <a href="" className="design-notebook-need">
              <Link to='/Result'>그래픽 작업이 필요합니다  <FontAwesomeIcon icon={faChevronRight} /></Link>
              </a>
              </button>
  
              <button className="video-notebook">
                3D,영상 노트북<p></p>
              <a href="" className="video-notebook-need">
                렌더링 작업이 필요합니다  <FontAwesomeIcon icon={faChevronRight} />
              </a>
              </button>
              </div>
          
              <div className="notebook_2">
              <button className="gaming-notebook">
                게이밍 노트북<p></p>
              <a href="" className="gaming-notebook-need">
                고성능 게임을 실행합니다  <FontAwesomeIcon icon={faChevronRight} />
              </a>
              </button>
  
            <button className="develop-notebook">
              개발자 노트북 <p></p>
            <a href =""className="develop-notebook-need">
              코딩 작업이 필요합니다  <FontAwesomeIcon icon={faChevronRight} />
            </a>
            </button>
              </div>
  
            </div>
            
          </div>      
        </div>
    )
  }

export default MainBody;
  