import InfomBox from "../../components/InfomBox/InfomBox";
import {
  Container,
  ImgWrap,
  Item,
  ItemImg,
  SWrap,
  Wrap,
  Rate,
  Root,
  Like,
  Bookmark,
  Table,
  Td,
  MemoBox,
  MemoWrap,
} from "./RecomUserCloInfomPage.style";

function RecomUserCloInfomPage() {
  return (
    <Container>
      <SWrap>
        <img src="/assets/Back.svg" width={22} alt="Back" />
        <Root>����548�ƿ���</Root>
      </SWrap>
      <Wrap>
        <ImgWrap>
          <ItemImg src="/assets/item-image.jpg" alt="Item" />
          <Like src="/assets/Heart.svg" alt="Like" />
          <Rate>
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStarEmpty.svg" width={46} height={42} />
          </Rate>
        </ImgWrap>

        <ImgWrap>
          <Wrap>
            <Item>
              �Ƶ�ٽ�
              <br />
              ������ Ǯ�� �ĵ�
            </Item>

            <Bookmark src="/assets/Bookmark.svg" alt="Bookmark" />
          </Wrap>
          <Wrap>
            <Item>
              <InfomBox Name="������" Infom="XL"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="��" Infom="����"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="����" Infom="�׷���"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="��ǰ��ȣ" Infom="IL2516"></InfomBox>
            </Item>
          </Wrap>
          <Wrap>
            <InfomBox Name="URL" Infom="https://adidas.co.kr/1245"></InfomBox>
          </Wrap>
          <MemoWrap>
            <Item>�޸�</Item>
            <MemoBox>���̴� �� �°�, ���� ���� ���</MemoBox>
          </MemoWrap>

          <Table>
            <tbody>
              <tr>
                <Td>�� ����</Td>
                <Td>100cm</Td>
              </tr>
              <tr>
                <Td>��� �ʺ�</Td>
                <Td>40cm</Td>
              </tr>
              <tr>
                <Td>���� �ܸ�</Td>
                <Td>50cm</Td>
              </tr>
              <tr>
                <Td>�Ҹ� ����</Td>
                <Td>60cm</Td>
              </tr>
            </tbody>
          </Table>
        </ImgWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserCloInfomPage;
