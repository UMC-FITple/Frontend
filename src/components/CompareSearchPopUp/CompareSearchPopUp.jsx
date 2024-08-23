import { BackgroundContainer, ComparePopUpBackground, ComparePopUpContainer, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, ComparePopUpMainText, BackArrowBtn, CloseBtn, CompareSearchContainer, CompareSearchBorderContainer, CompareSearchEditBtn, CompareSearchCard, CompareSizeText, CompareSizeContents, CompareSizeContainer, CompareSearchCardScroll, CompareStartBtn } from "./CompareSearchPopUp.style"

function CompareSearchPopUp({ compareData, compareInputPopUpOpen, popupClose, cleanCompareData, compareLoadingOpen }) {

    return (
        <>
            <BackgroundContainer>
                <ComparePopUpContainer>
                    <ComparePopUpBackground>
                        <ComparePopUpInnerContainer>
                            <ComparePopUpInnerMainContainer>
                                <BackArrowBtn src="../assets/_.svg" onClick={()=>{compareInputPopUpOpen(); cleanCompareData();}} />
                                <ComparePopUpMainText>사이즈 비교</ComparePopUpMainText>
                                <CloseBtn src="../assets/X(Compare).svg" onClick={()=>{popupClose(); cleanCompareData();}} />
                            </ComparePopUpInnerMainContainer>
                            <CompareSearchContainer>
                                <CompareSearchBorderContainer>
                                    <CompareSearchCardScroll>
                                        {compareData.map((item, index) => (
                                            <CompareSearchCard key={index}>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>사이즈</CompareSizeText>
                                                    <CompareSizeContents>{item.size == "" ? "-": item.size}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>총장</CompareSizeText>
                                                    <CompareSizeContents>{item.totalLength == "" ? "-": item.totalLength}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>어깨너비</CompareSizeText>
                                                    <CompareSizeContents>{item.shoulderWidth == "" ? "-": item.shoulderWidth}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>가슴단면</CompareSizeText>
                                                    <CompareSizeContents>{item.chestWidth == "" ? "-": item.chestWidth}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>암홀단면</CompareSizeText>
                                                    <CompareSizeContents>{item.armholeWidth == "" ? "-": item.armholeWidth}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>소매단면</CompareSizeText>
                                                    <CompareSizeContents>{item.sleeveWidth == "" ? "-": item.sleeveWidth}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>소매길이</CompareSizeText>
                                                    <CompareSizeContents>{item.sleeveLength == "" ? "-": item.sleeveLength}</CompareSizeContents>
                                                </CompareSizeContainer>
                                                <CompareSizeContainer>
                                                    <CompareSizeText>밑단단면</CompareSizeText>
                                                    <CompareSizeContents>{item.hemWidth == "" ? "-": item.hemWidth}</CompareSizeContents>
                                                </CompareSizeContainer>
                                            </CompareSearchCard>
                                        ))}
                                    </CompareSearchCardScroll>
                                    <CompareSearchEditBtn src="../assets/수정 버튼.svg" onClick={()=>{compareInputPopUpOpen(); cleanCompareData();}} />
                                </CompareSearchBorderContainer>
                            </CompareSearchContainer>
                            <CompareStartBtn onClick={compareLoadingOpen}>사이즈 비교하기</CompareStartBtn>
                        </ComparePopUpInnerContainer>
                    </ComparePopUpBackground>
                </ComparePopUpContainer>
            </BackgroundContainer>
        </>
    )
}

export default CompareSearchPopUp
