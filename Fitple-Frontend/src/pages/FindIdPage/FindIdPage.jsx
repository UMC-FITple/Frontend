import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import { findId } from "../../../data/LoginApi";
import userStore from "../../../data/store/userStore";
import {
    FindIdPageWrapper,
    MainText,
    FormWrapper,
    InputBox,
    SubmitButton,
    OptionWrapper,
    OptionButton,
} from "./FindIdPage.style";

function FindIdPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const setUserInfo = userStore((state) => state.setUserInfo);
    const navigate = useNavigate();

    useEffect(() => {
        setIsButtonActive(!!name && !!email);
    }, [name, email]);

    const handleIdFindClick = async () => {
        try {
            const result = await findId(name, email);
            setUserInfo(result);  // 받아온 데이터를 Zustand에 저장
            navigate('/findid/showid');
        } catch (error) {
            alert("가입하지 않은 사용자입니다.");
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handlePwFindClick = () => {
        navigate('/findpw');
    };

    return (
        <FindIdPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <InputBox 
                    type="text" 
                    id="findid-name" 
                    placeholder="닉네임을 입력해주세요" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputBox 
                    type="text" 
                    id="findid-email" 
                    placeholder="이메일을 입력해주세요" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SubmitButton isActive={isButtonActive} onClick={handleIdFindClick}>ID 찾기</SubmitButton>
            </FormWrapper>
            <OptionWrapper>
                <OptionButton onClick={handleLoginClick}>로그인 화면으로 돌아가기</OptionButton>
                <OptionButton onClick={handlePwFindClick}>비밀번호 찾기</OptionButton>
            </OptionWrapper>
        </FindIdPageWrapper>
    );
}

export default FindIdPage;
