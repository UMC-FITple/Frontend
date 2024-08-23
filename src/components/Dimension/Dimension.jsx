import { Container, Title, Item, Num, Unit,Wrap } from "./Dimension.style";

function Dimension() {
  return (
    <Container>
      <Title>실측 사이즈</Title>
      <Wrap>
        <Item>
          총장
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          어깨너비
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          가슴단면
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          암홀단면
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          소매단면
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          소매길이
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
        <Item>
          밑단단면
          <Num></Num>
          <Unit>cm</Unit>
        </Item>
      </Wrap>
    </Container>
  );
}

export default Dimension;
