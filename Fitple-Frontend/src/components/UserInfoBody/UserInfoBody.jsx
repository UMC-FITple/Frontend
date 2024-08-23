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
} from "../../pages/UserInfoPage/UserInfoPage.style";

function UserBodyInfo({ handleBodyInfoChange }) {
    return (
        <InfoContainer>
            <MainText>체형 정보</MainText>
            <BodyInfoContainer>
                <InputSet>
                    <SubText>키</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="height" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>몸무게</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="weight" onChange={handleBodyInfoChange} />
                        <UnitText>kg</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>어깨너비</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="shoulder_width" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>가슴둘레</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="chest_circumference" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>팔길이</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="arm_length" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>허리둘레</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="waist_circumference" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>허벅지둘레</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="thigh_circumference" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
                <InputSet>
                    <SubText>엉덩이둘레</SubText>
                    <BodyInputWrapper>
                        <BodyInputBox name="hip_circumference" onChange={handleBodyInfoChange} />
                        <UnitText>cm</UnitText>
                    </BodyInputWrapper>
                </InputSet>
            </BodyInfoContainer>
        </InfoContainer>
    );
}

export default UserBodyInfo;
