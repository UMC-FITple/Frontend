import {
  DeletePopup,
  DeletePopupBack,
  DeletePopupDelete,
  DeletePopupText,
  PopupButtonContainer,
} from "./DeletePopUp.style";
import { DeleteClothes } from "../../../data/ClothApi";

const DeletePopUp = ({ onClose, clothId }) => {
  // 뒤로가기 눌렀을 때
  const handlePopupback = () => {
    onClose();
  };
  // 삭제하기 눌렀을때
  const handlePopupdelete = async () => {
    await DeleteClothes(clothId);
    onClose();
    window.location.reload();
  };
  return (
    <DeletePopup>
      <DeletePopupText>정말 삭제하시겠습니까?</DeletePopupText>
      <PopupButtonContainer>
        <DeletePopupBack onClick={handlePopupback}>뒤로가기</DeletePopupBack>
        <DeletePopupDelete onClick={() => handlePopupdelete()}>
          삭제하기
        </DeletePopupDelete>
      </PopupButtonContainer>
    </DeletePopup>
  );
};
export default DeletePopUp;
