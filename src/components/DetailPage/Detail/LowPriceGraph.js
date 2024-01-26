import React, { useState } from 'react'
import './LowPriceGraph.css'

function LowPriceGraph() {
    // 시간 범위 상태를 관리하는 state
    const [timeRange, setTimeRange] = useState('0')

    // 라디오 버튼이 변경될 때 호출되는 함수
    const handleTimeRangeChange = event => {
        const newTimeRange = event.target.value
        setTimeRange(newTimeRange)
        // 여기에서 그래프를 업데이트하는 로직을 추가합니다.
        updateChart(newTimeRange)
    }

    // 그래프를 업데이트하는 함수
    const updateChart = weeks => {
        // TODO: 여기에 그래프를 업데이트하는 코드를 작성하세요.
        console.log(`그래프를 최근 ${weeks}주 데이터로 업데이트합니다.`)
    }

    return (
        <div className="low-price-graph">
            <div className="title">
                <p>최저가 추이</p>
            </div>
            <div className="time-range-selector">
                <form>
                    <label className="time-range-label">
                        <input
                            type="radio"
                            name="timeRange"
                            value="1"
                            checked={timeRange === '1'}
                            onChange={handleTimeRangeChange}
                        />{' '}
                        1개월
                    </label>
                    <label className="time-range-label">
                        <input
                            type="radio"
                            name="timeRange"
                            value="3"
                            checked={timeRange === '3'}
                            onChange={handleTimeRangeChange}
                        />{' '}
                        3개월
                    </label>
                    <label className="time-range-label">
                        <input
                            type="radio"
                            name="timeRange"
                            value="6"
                            checked={timeRange === '6'}
                            onChange={handleTimeRangeChange}
                        />{' '}
                        6개월
                    </label>
                </form>
            </div>
            <div className="chart">
                {/* 여기에 그래프 컴포넌트를 추가하세요 */}
            </div>
        </div>
    )
}

export default LowPriceGraph
