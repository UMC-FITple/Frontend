export const RecomFeedApi = async () => {
    try {
      const response = await fetch('/TestData/ItemTestData.json', {
        method: 'GET',
        credentials: 'include',
      });
  
      // 응답 상태가 정상인지 확인
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data; // 필요에 따라 데이터를 반환합니다.
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return null; // 오류 발생 시 null 반환
    }
  };
  
  export default RecomFeedApi; // default 내보내기
  