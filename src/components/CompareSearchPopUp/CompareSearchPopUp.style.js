import styled from "styled-components";

export const BackgroundContainer = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0,0,0,0.5);
    overflow-y: auto;  /* 추가: 스크롤 가능하도록 설정 */
`;

export const ComparePopUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ComparePopUpBackground = styled.div`
    margin-top: 92px;
    width: 400px;
    height: 560px;
    background: white;
    border-radius: 41px;
    border: 1px;
    border-color: #838383;
    position: relative;
`;

export const ComparePopUpInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ComparePopUpInnerMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
`;

export const ComparePopUpMainText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #0276FE;
    font-size: 24px;
    font-weight: 700;
`;

export const CloseBtn = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    margin-right: 38px;
`;

export const BackArrowBtn = styled.img`
    height: 40px;
    width: 20px;
    cursor: pointer;
    margin-left: 38px;
`;

export const CompareSearchContainer = styled.div`
    margin-top: 32px;
    width: 338px;
    height: 334px;
`;

export const CompareSearchEditBtn = styled.img`
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: -18px;
    right: 16px;
    cursor: pointer;
`;

export const CompareSearchBorderContainer = styled.div`
    border: 1px solid #838383;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 134px;
`;

export const CompareSearchCardScroll = styled.div`
    width: 323px;
    min-height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: block; /* block으로 변경하여 크기 제한 문제 해결 */
    overflow-x: auto; /* 가로 스크롤 추가 */
    overflow-y: hidden; /* 세로 스크롤 제거 */
    white-space: nowrap; /* 자식 요소가 줄 바꿈 없이 한 줄로 유지되도록 설정 */
`;

export const CompareSearchCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 686px;
    height: 55px;
    margin-bottom: 33px;
    margin-top: 27px;
`;

export const CompareSizeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CompareSizeText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #838383;
    font-size: 16px;
    font-weight: 500;
`;

export const CompareSizeContents = styled.div`
    margin-top: 5px;
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 24px;
    font-weight: 600;
`;

export const CompareStartBtn = styled.button`
    background-color: #0075FF;
    height: 43px;
    width: 220px;
    margin-top: 4px;
    font-family: 'SUIT Variable', sans-serif;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    position: absolute;
    bottom: 36px;
`;