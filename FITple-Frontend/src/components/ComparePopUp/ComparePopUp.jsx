import { BackgroundContainer, CompareIMGOrText, CompareIMGUploadCameraLogo, CompareIMGUploadContainer, CompareIMGUploadText, CompareInputUploadText, ComparePopUpBackground, ComparePopUpContainer, ComparePopUpInnerContainer, ComparePopUpMainText } from "./ComparePopUp.style"

function ComparePopUp() {

    return (
      <>
        <BackgroundContainer>
            <ComparePopUpContainer>
              <ComparePopUpBackground>
                <ComparePopUpInnerContainer>
                  <ComparePopUpMainText>
                    사이즈 비교
                  </ComparePopUpMainText>
                  <CompareIMGUploadContainer>
                    <CompareIMGUploadCameraLogo src="../assets/카메라 아이콘.svg" />
                    <CompareIMGUploadText>사이즈 정보<br/>이미지 업로드하기</CompareIMGUploadText>
                  </CompareIMGUploadContainer>
                  <CompareIMGOrText>혹은</CompareIMGOrText>
                  <CompareInputUploadText>수기로 사이즈 등록하기</CompareInputUploadText>
                </ComparePopUpInnerContainer>
              </ComparePopUpBackground>
            </ComparePopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default ComparePopUp