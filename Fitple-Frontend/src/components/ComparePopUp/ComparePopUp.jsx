import { BackgroundContainer, CloseBtn, CompareIMGOrText, CompareIMGUploadCameraLogo, CompareIMGUploadContainer, CompareIMGUploadText, CompareInputUploadText, ComparePopUpBackground, ComparePopUpContainer, ComparePopUpInnerContainer, ComparePopUpMainText } from "./ComparePopUp.style";

function ComparePopUp({popupClose, compareInputPopUpOpen}) {

    return (
      <>
        <BackgroundContainer>
            <ComparePopUpContainer>
              <ComparePopUpBackground>
                <ComparePopUpInnerContainer>
                  <ComparePopUpMainText>
                    사이즈 비교
                  </ComparePopUpMainText>
                  <CloseBtn src="../assets/X(Compare).svg" onClick={popupClose} />
                  <CompareIMGUploadContainer>
                    <CompareIMGUploadCameraLogo src="../assets/카메라 아이콘.svg" />
                    <CompareIMGUploadText>사이즈 정보<br/>이미지 업로드하기</CompareIMGUploadText>
                  </CompareIMGUploadContainer>
                  <CompareIMGOrText>혹은</CompareIMGOrText>
                  <CompareInputUploadText onClick={compareInputPopUpOpen}>수기로 사이즈 등록하기</CompareInputUploadText>
                </ComparePopUpInnerContainer>
              </ComparePopUpBackground>
            </ComparePopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default ComparePopUp