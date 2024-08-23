import styled from "styled-components";

export const BackgroundContainer = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0,0,0,0.5);
`;

export const ComparePopUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ComparePopUpBackground = styled.div`
    margin-top: 92px;
    width: 400px;
    min-height: 560px;
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
    margin-top: 32px;
`;

export const CompareResultSpeechBubble = styled.img`
    height: 77px;
    width: 220px;
`;

export const CompareResultTable = styled.img`
    height: 316px;
    width: 393px;
    margin-top: 23px;
`;

export const MeasureContainer = styled.div`
    margin-top: 19px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`;

export const MeasureText = styled.div`
    color: #838383;
    font-size: 12px;
    font-weight: 700;
    margin-right: 41px;
`;

export const CompareTableContainer = styled.div`
    margin-top: 5px;
    width: 352px;
    overflow-x: scroll;
    overflow-y: hidden;
`;

export const CompareTableScrollContainer = styled.div`
    width: 574px;
`;

export const CompareTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CompareTableHeaderText = styled.div`
    width: 71.75px;
    text-align: center;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
`;

export const CompareTableFirstRow = styled.div`
    margin-top: 12px;
    background-color: #EFEFEF;
    
    width: 574px;
    height: 60px;
    display: flex;border-radius: 10px;
    flex-direction: column;
    align-items: center;

`;

export const CompareTableFirstRowTextContainer = styled.div`
    width: 574px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CompareTableFirstRowText = styled.div`
    width: 71.75px;
    text-align: center;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
`;

export const CompareTableCompareRowTextContainer = styled.div`
    width: 574px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CompareTableCompareRowText = styled.div`
    width: 71.75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
`;

export const CompareTableCompareRowFitBackground = styled.div`
    min-width: 49px;
    height: 28px;
    background-color: #0276FE;
    border-radius: 15px;
    text-align: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
`;