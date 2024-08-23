import React from "react";
import {
  MainText,
  InfoContainer,
  BodyInfoContainer,
  InputSet,
  SubText,
  BodyInputWrapper,
  BodyInputBox,
  UnitText,
  MainBox,
  EditBTN,
} from "./UserInfoBody2.style";

const UserInfoBody2 = ({ ...props }) => {
  return (
    <InfoContainer {...props}>
      {/* 컴포넌트 작업을 위해서 div하나 추가 */}
      <MainBox {...props}>
        <MainText>체형 정보</MainText>
        <EditBTN {...props}>수정</EditBTN>
      </MainBox>

      <BodyInfoContainer>
        <InputSet>
          <SubText>키</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.height}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>몸무게</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.weight}</BodyInputBox>
            <UnitText>kg</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>어깨 너비</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.shoulder_width}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>가슴둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.chest_circumference}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>팔 길이</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.arm_length}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>허리 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.waist_circumference}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>허벅지 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.thigh_circumference}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>엉덩이 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox>{props.data.hip_circumference}</BodyInputBox>
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
      </BodyInfoContainer>
    </InfoContainer>
  );
};

export default UserInfoBody2;
