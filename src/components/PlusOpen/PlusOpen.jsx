import { PlusOpenButton, PlusOpenButtons } from "./PlusOpen.style";
import { Link } from "react-router-dom";

const PlusOpen = () => {
  return (
    <PlusOpenButtons>
      <Link to="/clothregister">
        <PlusOpenButton>직접 등록하기</PlusOpenButton>
      </Link>
      <PlusOpenButton>검색하기</PlusOpenButton>
    </PlusOpenButtons>
  );
};

export default PlusOpen;
