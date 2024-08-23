import { useState } from "react";
import {
  AddInputCardBtn,
  BackArrowBtn,
  BackgroundContainer,
  CloseBtn,
  CompareInput,
  CompareInputAndText,
  CompareInputAndTextContainer,
  CompareInputCard,
  CompareInputCardConfirmBtn,
  CompareInputCardDelBtn,
  CompareInputContainer,
  CompareInputText,
  ComparePopUpBackground,
  ComparePopUpContainer,
  ComparePopUpInnerContainer,
  ComparePopUpInnerMainContainer,
  ComparePopUpMainText,
  CompareSubText,
} from "./CompareInputPopUp.style";

function CompareInputPopUp({ popupClose, comparePopUpOpen, onSave, compareSearchPopUpOpen,}) {
  const [inputValues, setInputValues] = useState([
    {
      size: "",
      totalLength: "",
      shoulderWidth: "",
      chestWidth: "",
      armholeWidth: "",
      sleeveWidth: "",
      sleeveLength: "",
      hemWidth: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index][field] = value;
    setInputValues(updatedInputValues);
  };

  const handleSaveClick = () => {
    onSave([...inputValues]);
  };

  // 새로운 Input 카드를 추가하는 함수
  const addInputCard = () => {
    setInputValues([
      ...inputValues,
      {
        size: "",
        totalLength: "",
        shoulderWidth: "",
        chestWidth: "",
        armholeWidth: "",
        sleeveWidth: "",
        sleeveLength: "",
        hemWidth: "",
      },
    ]);
  };

  // 특정 Input 카드를 삭제하는 함수
  const removeInputCard = (index) => {
    const updatedCards = inputValues.filter((_, i) => i !== index);
    setInputValues(updatedCards);
  };

  return (
    <>
      <BackgroundContainer>
        <ComparePopUpContainer>
          <ComparePopUpBackground>
            <ComparePopUpInnerContainer>
              <ComparePopUpInnerMainContainer>
                <BackArrowBtn src="../assets/_.svg" onClick={comparePopUpOpen} />
                <ComparePopUpMainText>사이즈 비교</ComparePopUpMainText>
                <CloseBtn src="../assets/X(Compare).svg" onClick={popupClose} />
              </ComparePopUpInnerMainContainer>
              <CompareSubText>비교할 옷의 사이즈를 입력해주세요.</CompareSubText>
              <CompareInputContainer>
                {/* 상태에 따라 각 CompareInputCard 렌더링 */}
                {inputValues.map((card, index) => (
                  <CompareInputCard key={index}>
                    <CompareInputAndTextContainer>
                      <CompareInputAndText>
                        <CompareInputText>사이즈</CompareInputText>
                        <CompareInput
                          value={card.size}
                          onChange={(e) =>
                            handleInputChange(index, "size", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>총장</CompareInputText>
                        <CompareInput
                          value={card.totalLength}
                          onChange={(e) =>
                            handleInputChange(index, "totalLength", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>어깨단면</CompareInputText>
                        <CompareInput
                          value={card.shoulderWidth}
                          onChange={(e) =>
                            handleInputChange(index, "shoulderWidth", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>가슴단면</CompareInputText>
                        <CompareInput
                          value={card.chestWidth}
                          onChange={(e) =>
                            handleInputChange(index, "chestWidth", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                    </CompareInputAndTextContainer>
                    <CompareInputAndTextContainer>
                      <CompareInputAndText>
                        <CompareInputText>암홀단면</CompareInputText>
                        <CompareInput
                          value={card.armholeWidth}
                          onChange={(e) =>
                            handleInputChange(index, "armholeWidth", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>소매단면</CompareInputText>
                        <CompareInput
                          value={card.sleeveWidth}
                          onChange={(e) =>
                            handleInputChange(index, "sleeveWidth", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>소매길이</CompareInputText>
                        <CompareInput
                          value={card.sleeveLength}
                          onChange={(e) =>
                            handleInputChange(index, "sleeveLength", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                      <CompareInputAndText>
                        <CompareInputText>밑단단면</CompareInputText>
                        <CompareInput
                          value={card.hemWidth}
                          onChange={(e) =>
                            handleInputChange(index, "hemWidth", e.target.value)
                          }
                        />
                      </CompareInputAndText>
                    </CompareInputAndTextContainer>
                    {index !== 0 && (
                      <CompareInputCardDelBtn
                        onClick={() => removeInputCard(index)}
                      >
                        삭제하기
                      </CompareInputCardDelBtn>
                    )}
                  </CompareInputCard>
                ))}
                {/* 새로운 CompareInputCard를 추가하는 버튼 */}
                <AddInputCardBtn
                  src="../assets/Group 330.svg"
                  onClick={addInputCard}
                />
              </CompareInputContainer>
              <CompareInputCardConfirmBtn
                onClick={() => {
                  handleSaveClick();
                  compareSearchPopUpOpen();
                }}
              >
                저장하기
              </CompareInputCardConfirmBtn>
            </ComparePopUpInnerContainer>
          </ComparePopUpBackground>
        </ComparePopUpContainer>
      </BackgroundContainer>
    </>
  );
}

export default CompareInputPopUp;
