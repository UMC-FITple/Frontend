import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { requestNewPasswordKey } from "../../../data/LoginApi"
import logo from "../../../assets/Logo.svg";
import {
    FindPwPageWrapper,
    MainText,
    FormWrapper,
    InputBox,
    SubmitButton,
    OptionWrapper,
    OptionButton,
} from "./FindPwPage.style.js";

function FindPwPage() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id && name && email) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [id, name, email]);

    const handlePwFindClick = async () => {
        if (isButtonActive) {
            try {
                const response = await requestNewPasswordKey(id, name, email);
                if (response.isSuccess) {
                    navigate('/findpw/showpw', { state: { id, name, email } });
                } else {
                    alert("비밀번호 재설정 요청이 실패했습니다.");
                }
            } catch (error) {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            }
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <FindPwPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <InputBox 
                    type="text" 
                    id="findpw-id" 
                    placeholder="아이디를 입력해주세요" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <InputBox 
                    type="text" 
                    id="findpw-name" 
                    placeholder="이름을 입력해주세요" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputBox 
                    type="text" 
                    id="findpw-email" 
                    placeholder="이메일을 입력해주세요" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SubmitButton isActive={isButtonActive} onClick={handlePwFindClick}>비밀번호 찾기</SubmitButton>
            </FormWrapper>
            <OptionWrapper>
                <OptionButton onClick={handleLoginClick}>로그인 화면으로 돌아가기</OptionButton>
            </OptionWrapper>
        </FindPwPageWrapper>
    );
}

export default FindPwPage;
