import { BackgroundContainer, ComparePopUpContainer, ComparePopUpBackground, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, BackArrowBtn, ComparePopUpMainText, CloseBtn, FITpleLogo, CompareResultSpeechBubble, MeasureContainer, MeasureText, CompareTableContainer, CompareTableHeader, CompareTableHeaderText, CompareTableScrollContainer, CompareTableFirstRow, CompareTableFirstRowText, CompareTableFirstRowTextContainer, CompareTableCompareRowTextContainer, CompareTableCompareRowText, CompareTableCompareRowFitBackground } from "./CompareResult.style"


function CompareResult({popupClose, compareData, cleanCompareData, compareSearchPopUpOpen}) {

  const renderCompareRowText = (value) => {
    return value === "100" ? (
      <CompareTableCompareRowFitBackground>{value === "" ? "-" : value}</CompareTableCompareRowFitBackground>
    ) : (
      value === "" ? "-" : value
    );
  };

  return (
    <>
      <BackgroundContainer>
        <ComparePopUpContainer>
          <ComparePopUpBackground>
            <ComparePopUpInnerContainer>
              <ComparePopUpInnerMainContainer>
                <BackArrowBtn src="../assets/_.svg" onClick={compareSearchPopUpOpen}/>
                <ComparePopUpMainText>사이즈 비교</ComparePopUpMainText>
                <CloseBtn src="../assets/X(Compare).svg" onClick={()=>{popupClose(); cleanCompareData();}}/>
              </ComparePopUpInnerMainContainer>
              <FITpleLogo src="../assets/핏플 로고.svg" />
              <CompareResultSpeechBubble src="../assets/말풍선.svg" />
              <MeasureContainer>
                <MeasureText>단위: cm</MeasureText>
              </MeasureContainer>
              <CompareTableContainer>
                <CompareTableScrollContainer>
                  <CompareTableHeader>
                    <CompareTableHeaderText>사이즈</CompareTableHeaderText>
                    <CompareTableHeaderText>총장</CompareTableHeaderText>
                    <CompareTableHeaderText>어깨너비</CompareTableHeaderText>
                    <CompareTableHeaderText>가슴단면</CompareTableHeaderText>
                    <CompareTableHeaderText>소매길이</CompareTableHeaderText>
                    <CompareTableHeaderText>암홀단면</CompareTableHeaderText>
                    <CompareTableHeaderText>소매단면</CompareTableHeaderText>
                    <CompareTableHeaderText>밑단단면</CompareTableHeaderText>
                  </CompareTableHeader>
                  <CompareTableFirstRow>
                    <CompareTableFirstRowTextContainer>
                      <CompareTableFirstRowText>L</CompareTableFirstRowText>
                      <CompareTableFirstRowText>100</CompareTableFirstRowText>
                      <CompareTableFirstRowText>71</CompareTableFirstRowText>
                      <CompareTableFirstRowText>73</CompareTableFirstRowText>
                      <CompareTableFirstRowText>75</CompareTableFirstRowText>
                      <CompareTableFirstRowText>100</CompareTableFirstRowText>
                      <CompareTableFirstRowText>100</CompareTableFirstRowText>
                      <CompareTableFirstRowText>100</CompareTableFirstRowText>
                    </CompareTableFirstRowTextContainer>
                  </CompareTableFirstRow>
                  {compareData.map((item, index) => (
                    <CompareTableCompareRowTextContainer key={index}>
                    <CompareTableCompareRowText>{renderCompareRowText(item.size)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.totalLength)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.shoulderWidth)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.chestWidth)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.armholeWidth)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.sleeveWidth)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.sleeveLength)}</CompareTableCompareRowText>
                    <CompareTableCompareRowText>{renderCompareRowText(item.hemWidth)}</CompareTableCompareRowText>
                  </CompareTableCompareRowTextContainer>
                  ))}
                </CompareTableScrollContainer>
              </CompareTableContainer>
            </ComparePopUpInnerContainer>
          </ComparePopUpBackground>
        </ComparePopUpContainer>
      </BackgroundContainer>
    </>
  )
}

export default CompareResult