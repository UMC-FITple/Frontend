import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import {
    PwPageWrapper,
    MainText,
    FormWrapper,
    TextWrapper,
    LabelText,
    InfoText,
    Button
} from "./PwPage.style";

function PwPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id, name, email } = location.state || {}; 

    const handleRePwClick = () => {
        navigate('/repw');
    }

    return (
        <PwPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>닉네임</LabelText>
                    <InfoText>{name || "닉네임 받아오는 중"}</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이메일</LabelText>
                    <InfoText>{email || "이메일 받아오는 중"}</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={true}>
                    <LabelText>아이디</LabelText>
                    <InfoText>{id || "아이디 받아오는 중"}</InfoText>
                </TextWrapper>
                <Button $isActive={true} onClick={handleRePwClick}>비밀번호 재설정</Button>
            </FormWrapper>
        </PwPageWrapper>
    );
}

export default PwPage;
