import { useState } from 'react'
import React from 'react'
import './Agree.css'

function Agree() {
    const [isChecked, setIsChecked] = useState(false)
    const [isChecked1, setIsChecked1] = useState(false)

    const toggleCheck = () => {
        setIsChecked(!isChecked)
    }

    const handleAllAgree = () => {
        // 여기에 모든 동의 항목을 처리하는 로직을 추가하세요.
        setIsChecked(true)
    }

    return (
        <div className="agree-container">
            <div className="agree-header">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheck}
                />
                <p>모두 확인하였으며 동의합니다.</p>
            </div>
            <div className="agree-content">
                <p>
                    전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어
                    있으며, 개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에
                    대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
                </p>
            </div>
            <div className="agree-checkbox">
                <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={toggleCheck}
                />
                <label onClick={toggleCheck}>만 14세 이상입니다</label>
            </div>
        </div>
    )
}

export default Agree
