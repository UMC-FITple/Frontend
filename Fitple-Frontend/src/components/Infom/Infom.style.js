import styled from "styled-components";

// 수영 : width 100% -> width 717px으로 수정하고 padding제거했습니다!
// 컴포넌트에서 margin삭제하고 informWarp에 마진추가하였습니다
export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 717px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const InformContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const FollowerNum = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #0276fe;
`;

export const Text = styled.div`
  font-size: 23px;
  font-weight: 600;
`;

export const Items = styled.div`
  font-size: 24px;
`;
export const SubItems = styled.div`
  font-size: 16px;
  color: #838383;
`;
export const UserImg = styled.img`
  width: 140px;
  height: 140px;
`;

export const UserName = styled.h3`
  font-size: 32px;
  font-weight: bold;
`;
