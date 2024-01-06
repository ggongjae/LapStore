// App.js
import "./css/App.css"
import React, { useState } from "react";
import Detail from "./DetailPage/Detail"
import Main from "./Main";
import { BrowserRouter as Router, Route, Link, Routes, Switch } from 'react-router-dom';
import Result from "./Result";
import Login from "./LoginPage/Login";
import Join from "./LoginPage/Join";
import MyPage from "./Mypage/Mypage";
import ProductComparison from "./DetailPage/DetailProductComparision";
import PriceComparison from "./DetailPage/DetailPriceComparision";
function App() {
  // 가짜 상품 데이터 (실제 데이터를 가져와야 함)
  const [fakeRecommendations, setFakeRecommendations] = useState([
    {
      id: 1,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      저장장치: "SSD M.2(NVMe)",
      CPU: "i7-13650HX (2.6GHz)",
      VGA: "GeForce RTX 4060",
      RAM: "DDR5 8GB2",
      해쉬태크: "#큰화면 #그래픽 작업 #고사양 게임",
      최저가: "해밀컴(현금)",
      가격: "1,980,000원"
      },
      {
        id: 2,
        name: "ASUS ROG STRIX G18 G814JV-N500",
        Os: "Window 10",
        저장장치: "SSD M.2(NVMe)",
        CPU: "i7-13650HX (2.6GHz)",
        VGA: "GeForce RTX 4060",
        RAM: "DDR5 8GB2",
        해쉬태크: "#큰화면 #그래픽 작업 #고사양 게임",
        최저가: "해밀컴(현금)",
        가격: "1,980,000원"
        },
        {
          id: 3,
          name: "ASUS ROG STRIX G18 G814JV-N500",
          Os: "Window 10",
          저장장치: "SSD M.2(NVMe)",
          CPU: "i7-13650HX (2.6GHz)",
          VGA: "GeForce RTX 4060",
          RAM: "DDR5 8GB2",
          해쉬태크: "#큰화면 #그래픽 작업 #고사양 게임",
          최저가: "해밀컴(현금)",
          가격: "1,980,000원"
          },
          {
            id: 4,
            name: "ASUS ROG STRIX G18 G814JV-N500",
            Os: "Window 10",
            저장장치: "SSD M.2(NVMe)",
            CPU: "i7-13650HX (2.6GHz)",
            VGA: "GeForce RTX 4060",
            RAM: "DDR5 8GB2",
            해쉬태크: "#큰화면 #그래픽 작업 #고사양 게임",
            최저가: "해밀컴(현금)",
            가격: "1,980,000원"
            },
            {
              id: 5,
              name: "ASUS ROG STRIX G18 G814JV-N500",
              Os: "Window 10",
              저장장치: "SSD M.2(NVMe)",
              CPU: "i7-13650HX (2.6GHz)",
              VGA: "GeForce RTX 4060",
              RAM: "DDR5 8GB2",
              해쉬태크: "#큰화면 #그래픽 작업 #고사양 게임",
              최저가: "해밀컴(현금)",
              가격: "1,980,000원"
              },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route 
          path="/product/:productId" 
          element={<Detail fakeRecommendations={fakeRecommendations} />} 
        />
        <Route path="/price-comparison" element={<PriceComparison products={fakeRecommendations} />} />
        <Route path="/Result" element={<Result/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Join" element={<Join/>}/>
        <Route path="/Mypage" element = {<MyPage/>}/>
  
    
      </Routes>
      
    </Router>
  );
}

export default App; 
