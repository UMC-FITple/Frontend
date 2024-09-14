import {
  DeletePopup,
  DeletePopupBack,
  DeletePopupDelete,
  DeletePopupText,
  PopupButtonContainer,
} from "./DeletePopUp.style";
import { useState } from "react";
import { DeleteClothes } from "../../../data/ClothApi";

const DeletePopUp = ({ onClose, clothId }) => {
  console.log("ID확인", clothId);
  const handlePopupback = () => {
    onClose();
  };
  const [popupdelete, setPopupdelete] = useState(false);
  const handlePopupdelete = () => {
    setPopupdelete(!popupdelete);
  };
  return (
    <DeletePopup>
      <DeletePopupText>정말 삭제하시겠습니까?</DeletePopupText>
      <PopupButtonContainer>
        <DeletePopupBack onClick={handlePopupback}>뒤로가기</DeletePopupBack>
        <DeletePopupDelete onClick={handlePopupdelete}>
          삭제하기
        </DeletePopupDelete>
      </PopupButtonContainer>
    </DeletePopup>
  );
};
export default DeletePopUp;
