import React from "react";
import "./css/App.css"
import Header from "./Header";
import Image from "./Image";
import MainBody from "./MainPage/MainBody";
import MainRecommend from "./MainPage/MainRecommend";
import MainNotebook from "./MainPage/MainNotebook";
import Footer from "./Footer";


const Main = () => {
  return (
    <div>
        <Image/>
        <Header/>
        <MainBody/>
        <MainRecommend/>
        <MainNotebook/>
        <Footer/>
    </div>
  );
}

export default Main;
