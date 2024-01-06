import React from 'react';
import './DetailedInformation.css';

const DetailedInformation = ({ product }) => {
    return (
        <div>
        <h2>상세정보</h2>
    
        <table className="product-detailed-info">
            {/* 기본 사항 */}
            <thead>
                <tr>
                    <th colSpan="4">기본 사항</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">운영체제</td>
                    <td className="data">{product.Os}</td>
                    <td className="label">추천 영역</td>
                    <td className="data">{product.recommendedArea}</td>
                </tr>
            </tbody>

            {/* 기본 사양 */}
            <thead>
                <tr>
                    <th colSpan="4">기본 사양</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">화면 크기</td>
                    <td className="data">{product.screenSize}</td>
                    <td className="label">해상도</td>
                    <td className="data">{product.resolution}</td>
                </tr>
                <tr>
                    <td className="label">화면 비율</td>
                    <td className="data">{product.aspectRatio}</td>
                    <td className="label">밝기</td>
                    <td className="data">{product.brightness}</td>
                </tr>
                <tr>
                    <td className="label">특징</td>
                    <td className="data">{product.feature}</td>
                    <td className="label">패널 코팅</td>
                    <td className="data">{product.panelCoating}</td>
                </tr>
                <tr>
                    <td className="label">주사율</td>
                    <td className="data">{product.refreshRate}</td>
                </tr>
            </tbody>

            {/* CPU */}
            <thead>
                <tr>
                    <th colSpan="4">CPU</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">제조사</td>
                    <td className="data">{product.cpuManufacturer}</td>
                    <td className="label">종류</td>
                    <td className="data">{product.cpuType}</td>
                </tr>
                <tr>
                    <td className="label">코드명</td>
                    <td className="data">{product.cpuCodeName}</td>
                    <td className="label">모델명</td>
                    <td className="data">{product.cpuModelName}</td>
                </tr>
                <tr>
                    <td className="label">코어 종류</td>
                    <td className="data">{product.coreType}</td>
                    <td className="label">속도</td>
                    <td className="data">{product.speed}</td>
                </tr>
                <tr>
                    <td className="label">터보 부스트</td>
                    <td className="data">{product.turboBoost}</td>
                </tr>
            </tbody>

            {/* 메모리 */}
            <thead>
                <tr>
                    <th colSpan="2">메모리</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">램</td>
                    <td className="data">{product.ram}</td>
                </tr>
                <tr>
                    <td className="label">저장장치</td>
                    <td className="data">{product.storage}</td>
                </tr>
            </tbody>

            {/* 그래픽 */}
            <thead>
                <tr>
                    <th colSpan="4">그래픽</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">내장그래픽</td>
                    <td className="data">{product.builtInGraphics}</td>
                    <td className="label">TGP</td>
                    <td className="data">{product.tgp}</td>
                </tr>
                <tr>
                    <td className="label">그래픽 메모리</td>
                    <td className="data">{product.graphicsMemory}</td>
                </tr>
            </tbody>

            {/* 네트워크 */}
            <thead>
                <tr>
                    <th colSpan="4">네트워크</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">무선랜</td>
                    <td className="data">{product.wirelessLan}</td>
                    <td className="label">유선랜</td>
                    <td className="data">{product.wiredLan}</td>
                </tr>
                <tr>
                    <td className="label">블루투스</td>
                    <td className="data">{product.bluetooth}</td>
                </tr>
            </tbody>

            {/* 영상입출력 */}
            <thead>
                <tr>
                    <th colSpan="4">영상입출력</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">영상출력</td>
                    <td className="data">{product.videoOutput}</td>
                    <td className="label">웹캠</td>
                    <td className="data">{product.webcam}</td>
                </tr>
            </tbody>

            {/* 단자 */}
            <thead>
                <tr>
                    <th colSpan="4">단자</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">단자</td>
                    <td className="data">{product.ports}</td>
                </tr>
            </tbody>

            {/* 부가기능 */}
            <thead>
                <tr>
                    <th colSpan="4">부가기능</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">보안기능</td>
                    <td className="data">{product.securityFeatures}</td>
                    <td className="label">부가기능</td>
                    <td className="data">{product.additionalFeatures}</td>
                </tr>
            </tbody>

            {/* 입력장치 */}
            <thead>
                <tr>
                    <th colSpan="4">입력장치</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">입력장치</td>
                    <td className="data">{product.inputDevice}</td>
                    <td className="label">방향키</td>
                    <td className="data">{product.directionKeys}</td>
                </tr>
                <tr>
                    <td className="label">부가기능</td>
                    <td className="data">{product.inputAdditionalFeatures}</td>
                </tr>
            </tbody>

            {/* 전원 */}
            <thead>
                <tr>
                    <th colSpan="4">전원</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">배터리</td>
                    <td className="data">{product.battery}</td>
                    <td className="label">충전단자</td>
                    <td className="data">{product.chargingPort}</td>
                </tr>
            </tbody>

            {/* 규격 */}
            <thead>
                <tr>
                    <th colSpan="3">규격</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">색상</td>
                    <td className="data">{product.color}</td>
                    <td className="label">두께</td>
                    <td className="data">{product.thickness}</td>
                </tr>
                <tr>
                    <td className="label">무게</td>
                    <td className="data">{product.weight}</td>
                </tr>
            </tbody>

            {/* 인증정보 */}
            <thead>
                <tr>
                    <th colSpan="2">인증정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="label">안전인증</td>
                    <td className="data">{product.safetyCertification}</td>
                    <td className="label">적합성평가인증</td>
                    <td className="data">{product.complianceCertification}</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default DetailedInformation;
