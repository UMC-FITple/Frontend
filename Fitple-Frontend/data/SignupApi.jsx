const API_BASE_URL = 'http://localhost:3000';

export const signup = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/FITple/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log(response.status);
            console.log(response.statusText);
            return data;
        } else {
            throw { status: response.status, message: data.message || '오류가 발생했습니다.' };
        }
    } catch (error) {
        throw { status: error.status || 500, message: error.message || '서버 에러가 발생했습니다.' };
    }
};
