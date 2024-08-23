import { Container } from "./OneLine.style";

function OneLine({ width }) {
  // width를 props로 주면 그에 따라 변경
  return <Container width={width}>페미닌 무드의 옷들을 좋아해요!</Container>;
}

export default OneLine;
