import {
  Container,
  SetGoodsImg,
  Brand,
  GoodsName,
  GoodsSize,
  HeartIcon,
} from "./Goods.style";
import { useNavigate } from "react-router-dom";


function Goods({ ...props }) {
  const navigate = useNavigate();

  const handleUserClick = (cloth) => {
    console.log(cloth);
    navigate("/recommendclo", { state: cloth });
  };
  
  
  return (
    <Container onClick={props.onClick}>
      <SetGoodsImg src={`${props.clothImg}(${props.cloth_id}).png`} />
      <Brand>{props.brand}</Brand>
      <GoodsName>{props.cloth_name}</GoodsName>
      <GoodsSize>{props.size} - {props.fit}</GoodsSize>
      {props.like === "1" && <HeartIcon src="/assets/LoveCloth-blue.svg" />}
    </Container>
  );
}

export default Goods;
