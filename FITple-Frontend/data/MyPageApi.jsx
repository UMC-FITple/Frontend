const API_BASE_URL = "http://localhost:3000";

export const submitUserInfo = async (data, imageFile) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));

  if (imageFile) {
    formData.append("image", imageFile);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/FITple/myprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
      credentials: "include",
    });

    if (!response.status === 200) {
      if (response.status === 407) {
        console.error("이미 존재하는 닉네임입니다.");
      }
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("submit User Info!");
    console.log(responseData);

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
