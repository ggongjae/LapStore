import { useState, useEffect } from 'react'
import React from 'react'
import './Agree.css'

function Agree({ onAgreeChange }) {
    // 각 체크박스의 상태를 배열로 관리합니다.
    const [checks, setChecks] = useState({
        allCheck: false,
        ageCheck: false,
        termsCheck: false,
        privacyCheck: false,
        marketingCheck: false,
        thirdPartyCheck: false,
        advertisementCheck: false,
    })

    // 체크박스의 상태를 토글하는 함수입니다.
    const handleCheck = name => {
        setChecks({ ...checks, [name]: !checks[name] })
    }

    const handleAllAgree = () => {
        // 현재 모든 체크박스가 체크되어 있는지 확인
        const isAllChecked = Object.values(checks).every(checked => checked)

        // 만약 모든 체크박스가 체크되어 있다면 모두 해제, 그렇지 않으면 모두 체크
        setChecks({
            allCheck: !isAllChecked,
            ageCheck: !isAllChecked,
            termsCheck: !isAllChecked,
            privacyCheck: !isAllChecked,
            marketingCheck: !isAllChecked,
            thirdPartyCheck: !isAllChecked,
            advertisementCheck: !isAllChecked,
        })
    }
    useEffect(() => {
        onAgreeChange(checks)
    }, [checks, onAgreeChange])

    return (
        <div className="agree-container">
            <div className="agree-header">
                <label>
                    <input
                        type="checkbox"
                        checked={checks.allCheck}
                        onChange={() => handleAllAgree()}
                    />
                    모두 확인하였으며 동의합니다.
                </label>
            </div>
            <div className="agree-content">
                <p>
                    전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어
                    있으며,개별적으로 <br />
                    동의를 선택하실 수 있습니다. 선택 항목에 대한 동의를
                    거부하시는 경우에도
                    <br />
                    서비스 이용이 가능합니다.
                </p>
            </div>
            <div className="agree-checkboxes">
                {/* 각 체크박스를 렌더링합니다. */}
                <label>
                    <input
                        type="checkbox"
                        checked={checks.ageCheck}
                        onChange={() => handleCheck('ageCheck')}
                    />
                    [필수] 만 14세 이상입니다
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checks.termsCheck}
                        onChange={() => handleCheck('termsCheck')}
                    />
                    [필수] 랩스토어 이용약관 동의
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checks.privacyCheck}
                        onChange={() => handleCheck('privacyCheck')}
                    />
                    [필수] 개인정보 수집 및 이용 동의
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checks.marketingCheck}
                        onChange={() => handleCheck('marketingCheck')}
                    />
                    [필수] 개인정보 제3자 제공 동의
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checks.thirdPartyCheck}
                        onChange={() => handleCheck('thirdPartyCheck')}
                    />
                    [선택] 마켓팅 목적의 개인정보 수집 및 이용 동의
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checks.advertisementCheck}
                        onChange={() => handleCheck('advertisenentCheck')}
                    />
                    [선택] 광고성 정보 수신 동의
                </label>
            </div>
        </div>
    )
}

export default Agree
