import React from 'react'
import './css/App.css'
import Header from './Header'
import Image from './Image'
import MainBody from './MainPage/MainBody'
import MainRecommend from './MainPage/MainRecommend'
import MainNotebook from './MainPage/MainNotebook'
import Footer from './Footer'
import FloatingBar from './MainPage/FloatingBar'

const Main = () => {
    return (
        <div>
            <Image />
            <Header />
            <MainBody />
            <FloatingBar />
            <MainRecommend />
            <MainNotebook />
            <Footer />
        </div>
    )
}

export default Main
