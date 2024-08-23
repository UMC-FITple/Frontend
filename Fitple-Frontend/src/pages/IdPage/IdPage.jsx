import React from 'react';
import logo from "../../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import userStore from "../../../data/store/userStore";
import {
    IdPageWrapper,
    MainText,
    FormWrapper,
    TextWrapper,
    LabelText,
    InfoText,
    Button
} from "./IdPage.style";

function IdPage() {
    const navigate = useNavigate();
    const { nickname, email, user_id } = userStore((state) => state.userInfo);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleIdFindClick = () => {
        navigate('/findpw');
    };

    return (
        <IdPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>닉네임</LabelText>
                    <InfoText>{nickname}</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이메일</LabelText>
                    <InfoText>{email}</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={true}>
                    <LabelText>아이디</LabelText>
                    <InfoText>{user_id}</InfoText>
                </TextWrapper>
                <Button $isActive={true} onClick={handleLoginClick}>로그인하기</Button>
                <Button $isActive={false} onClick={handleIdFindClick}>비밀번호 찾기</Button>
            </FormWrapper>
        </IdPageWrapper>
    );
}

export default IdPage;
