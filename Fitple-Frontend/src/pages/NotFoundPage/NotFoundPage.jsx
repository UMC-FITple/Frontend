import React, { useState, useEffect } from 'react'
import { Container, SubText, TitleText, TitleTextBlue } from './NotFoundPage.style'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // 매 초마다 countdown 값을 줄이는 타이머 설정
    const timer = setInterval(() => {
      setCountdown(prevCount => prevCount - 1);
    }, 1000);

    // countdown이 0이 되면 메인 페이지로 리다이렉트
    if (countdown === -1) {
      navigate('/cloth');
    }

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div>
      <Container>
        <TitleText>
          <TitleTextBlue>잘못된 접근</TitleTextBlue>이거나<br /><br />
          <TitleTextBlue>요청하신 페이지</TitleTextBlue>를 찾을 수 없습니다.
        </TitleText>
        <SubText>{countdown}초 뒤 메인 페이지로 리다이렉트 됩니다.</SubText>
      </Container>
    </div>
  )
}

export default NotFoundPage
