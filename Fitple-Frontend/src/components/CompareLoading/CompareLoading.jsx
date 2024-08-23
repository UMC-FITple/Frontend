import { BackgroundContainer, ComparePopUpContainer, ComparePopUpBackground, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, BackArrowBtn, ComparePopUpMainText, CloseBtn, FITpleLogo, CompareLoadingText, CompareLoadingSubText, CompareLoadingBar, CompareLoadingInnerBar,  } from "./CompareLoading.style"
import { useEffect } from "react";

function CompareLoading({ popupClose, compareSearchPopUpOpen, cleanCompareData, compareResultOpen }) {
  useEffect(() => {
    // 1초 후에 cleanCompareData 함수 호출
    const timer = setTimeout(() => {
      compareResultOpen();
    }, 1200);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [cleanCompareData]);

  return (
    <>
      <BackgroundContainer>
        <ComparePopUpContainer>
          <ComparePopUpBackground>
            <ComparePopUpInnerContainer>
              <ComparePopUpInnerMainContainer>
                <BackArrowBtn src="../assets/_.svg" onClick={compareSearchPopUpOpen} />
                <ComparePopUpMainText>사이즈 비교</ComparePopUpMainText>
                <CloseBtn src="../assets/X(Compare).svg" onClick={()=>{popupClose(); cleanCompareData();}} />
              </ComparePopUpInnerMainContainer>
              <FITpleLogo src="../assets/핏플 로고.svg" />
              <CompareLoadingText>내 옷과 사이즈 비교 중이에요!</CompareLoadingText>
              <CompareLoadingSubText>조금만 기다려주세요.</CompareLoadingSubText>
              <CompareLoadingBar>
                <CompareLoadingInnerBar />
              </CompareLoadingBar>
            </ComparePopUpInnerContainer>
          </ComparePopUpBackground>
        </ComparePopUpContainer>
      </BackgroundContainer>

    </>
  )
}

export default CompareLoading