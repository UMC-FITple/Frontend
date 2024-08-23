import {
  DeletePopup,
  DeletePopupBack,
  DeletePopupDelete,
  DeletePopupText,
  PopupButtonContainer,
} from "./DeletePopUp.style";
import { useState } from "react";

const DeletePopUp = ({ onClose }) => {
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
