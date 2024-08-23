import React, { useState, useRef } from 'react';
import uploadButton from "../../../assets/btn_image_upload.svg";
import {
    MainText, SubText, InfoContainer, InfoWrapper, InputWrapper, InputBox, GenderWrapper, 
    GenderButton, FitWrapper, FitButton, StyleWrapper, StyleButton, ProfileImageWrapper, ProfileImage
} from '../../pages/UserInfoPage/UserInfoPage.style';

function UserInfoBasic({
    selectedGender, setSelectedGender, selectedFits, setSelectedFits,
    selectedStyles, setSelectedStyles, handleFitClick, handleStyleClick,
    handleNicknameChange, fileInputRef, profileImage, setProfileImage, errorMessage
}) {
    const fits = ['슬림', '레귤러', '세미오버', '오버'];
    const styles = ['심플베이직', '캐주얼', '시크', '러블리', '아메카지', '유니크', '유니섹스', '스트릿', '스포티'];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // 핏 버튼 클릭 핸들러
    handleFitClick = (fit) => {
        setSelectedFits(prevSelectedFits => {
            if (prevSelectedFits.includes(fit)) {
                return prevSelectedFits.filter(selectedFit => selectedFit !== fit);
            } else {
                // 최대 2개까지 선택 가능
                if (prevSelectedFits.length >= 2) {
                    return [...prevSelectedFits.slice(1), fit]; // 가장 오래된 항목 제거 후 새 항목 추가
                }
                return [...prevSelectedFits, fit];
            }
        });
    };

    // 스타일 버튼 클릭 핸들러
    handleStyleClick = (style) => {
        setSelectedStyles(prevSelectedStyles => {
            if (prevSelectedStyles.includes(style)) {
                return prevSelectedStyles.filter(selectedStyle => selectedStyle !== style);
            } else {
                // 최대 2개까지 선택 가능
                if (prevSelectedStyles.length >= 2) {
                    return [...prevSelectedStyles.slice(1), style]; // 가장 오래된 항목 제거 후 새 항목 추가
                }
                return [...prevSelectedStyles, style];
            }
        });
    };

    return (
        <InfoContainer>
            <MainText>기본 정보</MainText>
            <ProfileImageWrapper onClick={() => fileInputRef.current.click()}>
                {profileImage ? (
                    <ProfileImage src={profileImage} alt="Profile" />
                ) : (
                    <img width="150px" src={uploadButton} alt="uploadButton" />
                )}
            </ProfileImageWrapper>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
            <InfoWrapper>
                <InputWrapper>
                    <SubText>닉네임</SubText>
                    <InputBox type="text" id="userinfo-nickname" onChange={handleNicknameChange} />
                    {errorMessage && <SubText style={{ color: 'red' }}>{errorMessage}</SubText>}
                    <SubText>성별</SubText>
                    <GenderWrapper>
                        <GenderButton isSelected={selectedGender === 0} onClick={() => setSelectedGender(0)}>남성</GenderButton>
                        <GenderButton isSelected={selectedGender === 1} onClick={() => setSelectedGender(1)}>여성</GenderButton>
                    </GenderWrapper>
                    <SubText>선호 핏</SubText>
                    <FitWrapper>
                        {fits.map((fit) => (
                            <FitButton
                                key={fit}
                                isSelected={selectedFits.includes(fit)}
                                onClick={() => handleFitClick(fit)}
                            >
                                {fit}
                            </FitButton>
                        ))}
                    </FitWrapper>
                    <SubText>선호 스타일</SubText>
                    <StyleWrapper>
                        {styles.map((style) => (
                            <StyleButton
                                key={style}
                                isSelected={selectedStyles.includes(style)}
                                onClick={() => handleStyleClick(style)}
                            >
                                {style}
                            </StyleButton>
                        ))}
                    </StyleWrapper>
                    <SubText>한 줄 소개</SubText>
                    <InputBox type="text" id="userinfo-infotext" />
                </InputWrapper>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default UserInfoBasic;
