import styled, { keyframes } from "styled-components";

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

export const FITpleLogo = styled.img`
    height: 97px;
    width: 62px;
    margin-top: 100px;
`;

export const CompareLoadingText = styled.div`
    color: black;
    font-size: 20px;
    font-weight: 700;
    margin-top: 12px;
`;

export const CompareLoadingSubText = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
`;

export const CompareLoadingBar = styled.div`
    height: 15px;
    width: 288px;
    border-radius: 50px;
    margin-top: 24px;
    background-color: #EFEFEF;
`;

const fillBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const CompareLoadingInnerBar = styled.div`
    height: 15px;
    width: 0; /* 애니메이션 시작 시 폭 0 */
    border-radius: 50px;
    background-color: #0276FE;
    animation: ${fillBar} 1s forwards; /* 애니메이션 적용 */
`;