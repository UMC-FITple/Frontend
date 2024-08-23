import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  flex: 1 1 21%; /* 각 카드가 4개 열을 만들 수 있도록 설정 */
  text-align:center;
  max-width: 250px; 
  width: 21%; /* 각 카드의 너비를 21%로 설정하여 4열로 배치 */
  height: 317px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #D9D9D9;
  box-shadow: 8px 8px 20px rgba(201, 199, 199, 0.19);
  background-color: #fff;
  padding:25px 0;
  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
  text-decoration: none; /* 기본 링크 스타일 제거 */
  color: inherit; 
  cursor: pointer;

`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 14px;
`

export const UserProfile = styled.h3`
  font-size: 12px;
  font-weight: 650;
  margin-top: 9px;
`;

export const UserFit = styled.h3`
  font-size: 16px;
  margin-top: 11px;
`;

export const UserStyle = styled.h3`
  font-size: 16px;
  margin-top: 4px;
  text-align: center;
`;

export const Follow = styled.button`
  margin-top: 12px;
  font-size: 12px;
  padding: 11px 48px;
  border: none;
  border-radius: 50px;
  background-color: ${props => (props.isFollowed ? 'black' : '#0276FE')}; /* isFollowed에 따라 배경색 변경 */

  color: white;
  cursor: pointer;
`;

// Follow 버튼 클릭 시 링크 이동 방지
const FollowButton = styled(Follow)`
  cursor: pointer;
`;
