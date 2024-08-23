import { Container } from "./Closet.style";
import Goods from "../Goods/Goods"; // Goods 컴포넌트
import EX_IMG from "../../../assets/EXadidas.svg";

import { useNavigate } from "react-router-dom";


function Closet({ clothes }) {
  const navigate = useNavigate();

  const handleUserClick = (cloth) => {
    console.log(cloth);
    navigate("/recommendclo", { state: cloth });
  };

  
  return (
    <Container>
      {clothes.map((cloth) => (
        <Goods
          key={cloth.cloth_id}
          src={EX_IMG}
          brand={cloth.brand}
          cloth_name={cloth.cloth_name}
          size={cloth.size}
          fit={cloth.fit}
          like={cloth.like}
          color={cloth.color}
          cloth_num={cloth.cloth_num}
          clothImg={cloth.clothImg}
          cloth_id={cloth.cloth_id}
          url={cloth.url}
          memo={cloth.memo}
          onClick={()=>handleUserClick(cloth)}//클릭 옷 상세
        />
      ))}
    </Container>
  );
}

export default Closet;
