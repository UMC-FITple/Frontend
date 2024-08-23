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
`;

export const ComparePopUpInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const ComparePopUpMainText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #0276FE;
    font-size: 24px;
    font-weight: 700;
    margin-top: 50px;
`;

export const CompareIMGUploadContainer = styled.div`
    background: #D9D9D9;
    margin-top: 63px;
    height: 248px;
    width: 248px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background 0.5s;
    &:hover {
        background: #838383;
    }
    cursor: pointer;
`;

export const CompareIMGUploadCameraLogo = styled.img`
    height: 74px;
    width: 74px;
    margin-top: 57px;
`;

export const CompareIMGUploadText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    margin-top: 6px;
    line-height: 30px;
    text-align: center;
    text-decoration: underline;
`;

export const CompareIMGOrText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #838383;
    font-size: 16px;
    font-weight: 500;
    margin-top: 14px;
    text-align: center;
`;

export const CompareInputUploadText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    margin-top: 14px;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
`;

export const CloseBtn = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 50px;
    right: 38px;
`;