import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../data/SignupApi";
import logo from "../../../assets/Logo.svg";
import {
  SignupPageWrapper,
  FormWrapper,
  InputText,
  InputBox,
  ErrorText,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  SubmitButton,
} from "./SignupPage.style";

function SignupPage() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [loginPwConfirm, setLoginPwConfirm] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("영어, 소문자, 숫자를 조합하여 입력해주세요.");
  const [pwConfirmError, setPwConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleIdChange = (e) => {
    const id = e.target.value;
    setLoginId(id);
    setIdError("");
  };

  const handlePwChange = (e) => {
    const pw = e.target.value;
    setLoginPw(pw);

    const pwRegex = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if (!pwRegex.test(pw)) {
      setPwError("영어 소문자, 숫자를 조합하여 8글자 이상 입력해주세요.");
    } else {
      setPwError("");
    }
  };

  const handlePwConfirmChange = (e) => {
    const pwConfirm = e.target.value;
    setLoginPwConfirm(pwConfirm);

    if (pwConfirm !== loginPw) {
      setPwConfirmError("입력한 비밀번호와 일치하지 않습니다.");
    } else {
      setPwConfirmError("");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setLoginEmail(email);
    setEmailError("");
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async () => {
    if (!loginId || !loginPw || !loginPwConfirm || !loginEmail) {
      setSignupError("모든 필드를 입력해주세요.");
      return;
    }
    if (loginPw !== loginPwConfirm) {
      setSignupError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const userData = {
        user_id: loginId,
        password: loginPw,
        email: loginEmail,
      };

      const result = await signup(userData);
      console.log("--------------");
      console.log(result);

      if (result.code === 200) {
        setIdError("사용 가능한 아이디입니다.");
        alert("회원 가입 성공!");
        navigate("/userinfo");
      } else if (result.code === 'SIGNUP001') {
        setIdError("이미 존재하는 아이디입니다.");
      }
    } catch (error) {
      if (error.status === 401) {
        setIdError("중복된 아이디입니다.");
      } else {
        setSignupError(
          error.message || "알 수 없는 오류가 발생했습니다."
        );
      }
    }
  };

  return (
    <SignupPageWrapper>
      <img width="50px" src={logo} alt="FITple Logo" />
      <FormWrapper>
        <InputText>아이디</InputText>
        <InputBox
          type="text"
          id="login-id"
          value={loginId}
          onChange={handleIdChange}
          placeholder=""
        />
        <ErrorText isError={!!idError}>{idError}</ErrorText>

        <InputText>비밀번호</InputText>
        <InputBox
          type="password"
          id="login-pw"
          value={loginPw}
          onChange={handlePwChange}
          placeholder=""
        />
        <ErrorText isError={!!pwError}>{pwError}</ErrorText>

        <InputText>비밀번호 확인</InputText>
        <InputBox
          type="password"
          id="login-pw2"
          value={loginPwConfirm}
          onChange={handlePwConfirmChange}
          placeholder=""
        />
        <ErrorText isError={!!pwConfirmError}>{pwConfirmError}</ErrorText>

        <InputText>이메일</InputText>
        <InputBox
          type="email"
          id="login-email"
          value={loginEmail}
          onChange={handleEmailChange}
          placeholder=""
        />
        <ErrorText isError={!!emailError}>{emailError}</ErrorText>

        <InputText>이메일 마케팅 정보 수신 동의</InputText>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>동의함</CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={!isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>동의하지 않음</CheckboxLabel>
        </CheckboxContainer>

        <SubmitButton onClick={handleSubmit}>회원정보 작성하기</SubmitButton>
        {signupError && <ErrorText isError={true}>{signupError}</ErrorText>}
      </FormWrapper>
    </SignupPageWrapper>
  );
}

export default SignupPage;
