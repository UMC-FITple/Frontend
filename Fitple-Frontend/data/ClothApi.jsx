const localhost = "http://localhost:3000";

export const ClothApi = async (category, cursorId, size) => {
  try {
    const url = new URL(`${localhost}/FITple/my/closet/main`);

    // 쿼리 파라미터 추가
    if (category !== undefined) url.searchParams.append("category", category);
    if (cursorId !== undefined) url.searchParams.append("cursorId", cursorId);
    if (size !== undefined) url.searchParams.append("size", size);

    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("검색 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
