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

export const CompareSubText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    margin-top: 27px;
`;

export const CompareInputContainer = styled.div`
    margin-top: 19px;
    width: 358px;
    height: 334px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

export const CompareInputCard = styled.div`
    margin-bottom: 12px;
    border-radius: 15px;
    border: 1px solid #838383;
    width: 338px;
    min-height: 200px;
    position: relative;
`;

export const CompareInputAndTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const CompareInputAndText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 22px;
`;

export const CompareInputText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #838383;
    font-size: 16px;
    font-weight: 500;
`;

export const CompareInput = styled.input`
    margin-top: 8px;
    border-radius: 10px;
    border: 1px solid #0276FE;
    width: 56px;
    height: 32px;
    text-align: center;
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
`;

export const CompareInputCardDelBtn = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    text-decoration: underline;
    cursor: pointer;
    position: absolute;
    right: 20px;
`;

export const AddInputCardBtn = styled.img`
    height: 36px;
    width: 36px;
    cursor: pointer;
    margin-top: 8px;
`;

export const CompareInputCardConfirmBtn = styled.button`
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
`;