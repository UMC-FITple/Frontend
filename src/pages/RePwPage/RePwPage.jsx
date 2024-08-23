import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from "../../../data/LoginApi"; 
import logo from "../../../assets/Logo.svg";
import {
    RePwPageWrapper,
    MainText,
    FormWrapper,
    InputBox,
    SubmitButton,
} from "./RePwPage.style";

function RePwPage() {
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (pw && pw2 && pw === pw2) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [pw, pw2]);

    const handleSubmit = async () => {
        if (isButtonActive) {
            try {
                const response = await resetPassword(pw);
                if (response.isSuccess) {
                    alert("비밀번호 변경이 완료됐습니다! 로그인 페이지로 이동합니다.");
                    navigate('/login'); 
                } else {
                    alert("비밀번호 변경에 실패했습니다.");
                }
            } catch (error) {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <RePwPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <InputBox 
                    type="password" 
                    id="repw-pw" 
                    placeholder="새 비밀번호를 입력해주세요" 
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <InputBox 
                    type="password" 
                    id="repw-pw2" 
                    placeholder="새 비밀번호를 한 번 더 입력해주세요" 
                    value={pw2}
                    onChange={(e) => setPw2(e.target.value)}
                />
                <SubmitButton isActive={isButtonActive} onClick={handleSubmit}>저장하기</SubmitButton>
            </FormWrapper>
        </RePwPageWrapper>
    );
}

export default RePwPage;
