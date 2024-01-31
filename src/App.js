import React from 'react'
import Detail from './pages/Detailpage'
import Main from './pages/Mainpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Result from './Result'
import Login from './pages/Loginpage'
import Join from './pages/Joinpage'
import MyPage from './pages/Mypage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/:productId" element={<Detail />} />
                <Route path="/Result" element={<Result />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Join" element={<Join />} />
                <Route path="/Mypage" element={<MyPage />} />
            </Routes>
        </Router>
    )
}

export default App
