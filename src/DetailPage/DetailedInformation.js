import React from 'react';
import './DetailedInformation.css';
const DetailedInformation = ({ product }) => {
    return (
        <table className="product-detailed-info">
             <thead>
                <tr>
                    <th colSpan="4">기본 사항</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>운영체제</td>
                    <td>{product.Os}</td>
                    <td>추천 영역</td>
                    <td>{product.recommendedArea}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">기본 사양</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>화면 크기</td>
                    <td>{product.screenSize}</td>
                    <td>해상도</td>
                    <td>{product.resolution}</td>
                </tr>
                <tr>
                    <td>화면 비율</td>
                    <td>{product.aspectRatio}</td>
                    <td>밝기</td>
                    <td>{product.brightness}</td>
                </tr>
                <tr>
                    <td>특징</td>
                    <td>{product.feature}</td>
                    <td>패널 코팅</td>
                    <td>{product.panelCoating}</td>
                </tr>
                <tr>
                    <td>주사율</td>
                    <td>{product.refreshRate}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">CPU</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>제조사</td>
                    <td>{product.cpuManufacturer}</td>
                    <td>종류</td>
                    <td>{product.cpuType}</td>
                </tr>
                <tr>
                    <td>코드명</td>
                    <td>{product.cpuCodeName}</td>
                    <td>모델명</td>
                    <td>{product.cpuModelName}</td>
                </tr>
                <tr>
                    <td>코어 종류</td>
                    <td>{product.coreType}</td>
                    <td>속도</td>
                    <td>{product.speed}</td>
                </tr>
                <tr>
                    <td>터보 부스트</td>
                    <td>{product.turboBoost}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="2">메모리</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>램</td>
                    <td>{product.ram}</td>
                </tr>
            <thead>
                <tr>
                    <th colSpan="2">메모리</th>
                </tr>
            </thead>
                <tr>
                    <td>저장장치</td>
                    <td>{product.storage}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">그래픽</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>내장그래픽</td>
                    <td>{product.builtInGraphics}</td>
                    <td>TGP</td>
                    <td>{product.tgp}</td>
                </tr>
                <tr>
                    <td>그래픽 메모리</td>
                    <td>{product.graphicsMemory}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">네트워크</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>무선랜</td>
                    <td>{product.wirelessLan}</td>
                    <td>유선랜</td>
                    <td>{product.wiredLan}</td>
                </tr>
                <tr>
                    <td>블루투스</td>
                    <td>{product.bluetooth}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">영상입출력</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>영상출력</td>
                    <td>{product.videoOutput}</td>
                    <td>웹캠</td>
                    <td>{product.webcam}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">단자</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>단자</td>
                    <td>{product.ports}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">부가기능</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>보안기능</td>
                    <td>{product.securityFeatures}</td>
                    <td>부가기능</td>
                    <td>{product.additionalFeatures}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">입력장치</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>입력장치</td>
                    <td>{product.inputDevice}</td>
                    <td>방향키</td>
                    <td>{product.directionKeys}</td>
                </tr>
                <tr>
                    <td>부가기능</td>
                    <td>{product.inputAdditionalFeatures}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">전원</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>배터리</td>
                    <td>{product.battery}</td>
                    <td>충전단자</td>
                    <td>{product.chargingPort}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="3">규격</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>색상</td>
                    <td>{product.color}</td>
                    <td>두께</td>
                    <td>{product.thickness}</td>
                </tr>
                <tr>
                    <td>무게</td>
                    <td>{product.weight}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan="2">인증정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>안전인증</td>
                    <td>{product.safetyCertification}</td>
                    <td>적합성평가인증</td>
                    <td>{product.complianceCertification}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DetailedInformation;
