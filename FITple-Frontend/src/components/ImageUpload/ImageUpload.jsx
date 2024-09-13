import React from "react";
import CameraImg from "../../../assets/camera.svg";
import {
  Container,
  FirstContainer,
  ImgContainer,
  ProductDeImagemin,
  SecondContainer,
  UploadIcon,
  UploadImg,
  UploadText,
  UploadWrap,
} from "./ImageUpload.style";
import { useState } from "react";
import { useRef } from "react";
import { UploadImage } from "../../../data/RegisterApi";

const ImageUpload = ({ value, setValue }) => {
  const [previewImg, setPreviewImg] = useState([]); // 이미지 파일의 url을 담은 상태
  const fileInputRef = useRef(null);
  // 입력한 input의 file가져오기
  const handleFileUpload = async (e) => {
    // input에 업로드한 파일들을 fileArr 변수에 담는다.
    let fileArr = e.target.files;
    let fileRead = new FileReader();
    fileRead.onload = () => {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(fileArr[0]);

    // 파일 업로드하기
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await UploadImage(formData);
    console.log("이미지", response.result.image);
    setValue({
      ...value,
      image: response.result.image,
    });
  };

  // 파일 업로드 버튼 클릭 시 input 클릭 이벤트 트리거
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container>
      {/* 이미지 업로드 */}
      <input
        type="file"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      {previewImg.length > 0 ? (
        <UploadImg src={previewImg} />
      ) : (
        <FirstContainer>
          <UploadWrap
            onClick={() => {
              // handleImageModalOpen();
              handleButtonClick();
            }}
          >
            <UploadIcon src={CameraImg} />
            <UploadText>이미지</UploadText>
            <UploadText>업로드하기</UploadText>
          </UploadWrap>
        </FirstContainer>
      )}

      <SecondContainer>
        {/* 다중 이미지 로딩 가능 */}
        <ImgContainer>
          <ProductDeImagemin />
          <ProductDeImagemin />
          <ProductDeImagemin />
          <ProductDeImagemin />
          <ProductDeImagemin />
          <ProductDeImagemin />
        </ImgContainer>
      </SecondContainer>
    </Container>
  );
};

export default ImageUpload;
