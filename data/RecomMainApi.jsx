// const localhost = "http://localhost:3000";

// export const ClothApi = async (category, cursorId, size) => {
//   try {
//     const url = new URL(`${localhost}/FITple/my/closet/main`);

//     // 쿼리 파라미터 추가
//     if (category !== undefined) url.searchParams.append("category", category);
//     if (cursorId !== undefined) url.searchParams.append("cursorId", cursorId);
//     if (size !== undefined) url.searchParams.append("size", size);

//     const response = await fetch(url, {
//       method: "GET",
//       credentials: "include",
//     });

//     if (!response.ok) {
//       throw new Error(`서버 오류: ${response.status}`);
//     }
//     const data = await response.json()
//     return data;
//   } catch (error) {
//     console.error("검색 요청 중 오류가 발생했습니다.", error);
//     throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
//   }
// };

export const RecomMainApi =  async () => {
  try {
    const response = await fetch('/TestData/UserTestData.json', { // JSON 파일의 경로를 설정합니다.
      method: 'GET',
      credentials: 'include', // 쿠키를 포함하여 요청합니다.
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // 응답을 JSON으로 변환합니다.
    return data; // 필요에 따라 데이터를 반환합니다.
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};