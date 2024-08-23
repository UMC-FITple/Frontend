const localhost = "http://localhost:3000";

export const login = async (loginId, loginPw) => {
  try {
    const response = await fetch(`${localhost}/FITple/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ user_id: loginId, password: loginPw }),
    });

    return response;
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};


export const findId = async (name, email) => {
    try {
        const response = await fetch(`${localhost}/FITple/auth/find-id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ nickname: name, email: email }),
        });
        
        if (!response.ok) {
            throw new Error('ID 찾기 요청 실패');
        }

        const data = await response.json();
        console.log('받아온 데이터');
        console.log(data.result);
        return data.result;  // { email, name, user_id } 형태로 반환
    } catch (error) {
        console.error("ID 찾기 요청 중 오류가 발생했습니다.", error);
        throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
};

export const requestNewPasswordKey = async (user_id, nickname, email) => {
    try {
        const response = await fetch(`${localhost}/FITple/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ user_id, nickname, email }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "비밀번호 재설정 요청 실패");
        }

        console.log('받아온 데이터');
        console.log(data.result);
        return data;
    } catch (error) {
        console.error("비밀번호 재설정 요청 중 오류가 발생했습니다.", error);
        throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
};

export const resetPassword = async (newPassword) => {
    console.log('새로운 비밀번호 전송!');
    console.log(newPassword);
    try {
        const response = await fetch(`${localhost}/FITple/auth/reset-password`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", 
            body: JSON.stringify({ newPassword }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "비밀번호 변경 실패");
        }

        return data;
    } catch (error) {
        console.error("비밀번호 변경 요청 중 오류가 발생했습니다.", error);
        throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
};