import { useState } from "react";
import {
  Container,
  Wrap,
  FirstWrap,
  BackArrow,
  SecondWrap,
  LeftWrap,
  RightWrap,
  RightWrap2,
  RegisterModal,
} from "./ClothregisterPage.style";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import RegisterInfo from "../../components/RegisterInfo/RegisterInfo";

const ClothregisterPage = () => {
  const [value, setValue] = useState({
    image: null,
    brand: null,
    name: null,
    product_code: null,
    category: null,
    size: null,
    fit: null,
    color: null,
    url: null,
    rating: null,
    memo: null,
    length: null,
    shoulder: null,
    chest: null,
    armhole: null,
    sleeve: null,
    sleeve_length: null,
    hem: null,
  });
  const [registerpopup, setRegisterpopup] = useState(false);

  const [requestBody, SetRequestBody] = useState({});

  return (
    <Container>
      <Wrap>
        <FirstWrap>
          <BackArrow to="/clothes">&lt;</BackArrow>
        </FirstWrap>
        <SecondWrap>
          <LeftWrap>
            {/* 이미지 업로드 컴포넌트 */}
            <ImageUpload value={value} setValue={setValue} />
          </LeftWrap>
          <RightWrap>
            <RightWrap2>
              {/* 브랜드 */}
              <RegisterInfo
                value={value}
                setValue={setValue}
                setRegisterpopup={setRegisterpopup}
              />
            </RightWrap2>
          </RightWrap>
        </SecondWrap>
      </Wrap>
      {registerpopup && (
        <RegisterModal
          isOpen={registerpopup}
          onRequestClose={() => setRegisterpopup(false)}
          style={{
            overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
          }}
        >
          <RegisterPopUp
            onClose={() => setRegisterpopup(false)}
            value={value}
          />
        </RegisterModal>
      )}
    </Container>
  );
};

export default ClothregisterPage;
