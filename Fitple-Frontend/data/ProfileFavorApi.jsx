const localhost = "http://localhost:3000";

export const ProfileFavorApi = async (category) => {
  try {
    const url = new URL(`${localhost}/FITple/profile/wish`);
    if (category) url.searchParams.append("category", category);
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
