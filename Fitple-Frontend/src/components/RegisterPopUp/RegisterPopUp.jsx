import {
  Container,
  Text1,
  Text2,
  ButtonContainer,
  Button,
  Button2,
} from "./RegisterPopUp.style";

const RegisterPopUp = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleRegister = () => {
    // 등록 관련 로직이 있을 경우 여기에 추가
    onClose(); // 모달 닫기
  };

  return (
    <Container>
      <Text1>등록된 옷 정보는 다른 사용자도 볼 수 있어요👀</Text1>
      <Text2>개인정보 등 민감한 정보는 수정해주세요!</Text2>
      <ButtonContainer>
        <Button onClick={handleClose}>뒤로가기</Button>
        <Button2 onClick={handleRegister}>등록하기</Button2>
      </ButtonContainer>
    </Container>
  );
};

export default RegisterPopUp;
