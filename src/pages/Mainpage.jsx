import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Image from '../components/MainPage/Image'
import MainBody from '../components/MainPage/MainBody'
import MainRecommend from '../components/MainPage/MainRecommend'
import MainNotebook from '../components/MainPage/MainNotebook'
import Footer from '../components/Footer'
import FloatingBar from '../components/MainPage/FloatingBar'

const Mainpage = () => {
    return (
        <div>
            <Header />
            <Image />
            <MainBody />
            <FloatingBar />
            <MainRecommend />
            <MainNotebook />
            <Footer />
        </div>
    )
}

export default Mainpage
