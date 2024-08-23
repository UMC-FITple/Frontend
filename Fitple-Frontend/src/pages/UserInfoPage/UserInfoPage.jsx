import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import {
    UserInfoPageWrapper,
    SubmitButton
} from './UserInfoPage.style';
import BasicInfo from '../../components/UserInfoBasic/UserInfoBasic';
import BodyInfo from '../../components/UserInfoBody/UserInfoBody';
import { submitUserInfo } from '../../../data/MyPageApi';

function UserInfoPage() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedFits, setSelectedFits] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [bodyInfo, setBodyInfo] = useState({
        height: '',
        weight: '',
        shoulder_width: '',
        chest_circumference: '',
        arm_length: '',
        waist_circumference: '',
        thigh_circumference: '',
        hip_circumference: ''
    });
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleBodyInfoChange = (e) => {
        const { name, value } = e.target;
        const numericValue = value === '' ? '' : parseInt(value, 10); // 신체 정보 입력값을 숫자로 변환
    
        setBodyInfo((prevBodyInfo) => ({
            ...prevBodyInfo,
            [name]: numericValue // 숫자로 변환된 값 저장
        }));
    };
    const handleFitClick = (fit) => {
        setSelectedFits((prevSelectedFits) => {
            if (prevSelectedFits.includes(fit)) {
                return prevSelectedFits.filter(selectedFit => selectedFit !== fit);
            } else {
                return [...prevSelectedFits, fit];
            }
        });
    };

    const handleStyleClick = (style) => {
        setSelectedStyles((prevSelectedStyles) => {
            if (prevSelectedStyles.includes(style)) {
                return prevSelectedStyles.filter(selectedStyle => selectedStyle !== style);
            } else {
                return [...prevSelectedStyles, style];
            }
        });
    };

    const handleForceSubmit = () => {
        alert("회원가입이 완료되었습니다.");
        navigate('/login');
    }

    const handleSubmit = async () => {
        try {
            if (!selectedGender || !nickname || selectedFits.length === 0 || selectedStyles.length === 0) {
                setErrorMessage('모든 필드를 채워주세요.');
                return;
            }

            if (!profileImage) {
                setProfileImage('https://avatars.githubusercontent.com/u/175378381?s=400&u=deddffbaae8b7955703812927f4c6580c036db40&v=4');
            }

            const userInfo = {
                nickname,
                gender: selectedGender || 0,
                perfer_fit: selectedFits,
                perfer_style: selectedStyles,
                one_line_info: document.getElementById('userinfo-infotext').value
            };

            const convertedBodyInfo = {
                height: bodyInfo.height || 0,
                weight: bodyInfo.weight || 0,
                shoulder_width: bodyInfo.shoulder_width || 0,
                chest_circumference: bodyInfo.chest_circumference || 0,
                arm_length: bodyInfo.arm_length || 0,
                waist_circumference: bodyInfo.waist_circumference || 0,
                thigh_circumference: bodyInfo.thigh_circumference || 0,
                hip_circumference: bodyInfo.hip_circumference || 0,
            };

            const data = {
                userInfo,
                bodyInfo: convertedBodyInfo
            };

            console.log("제출할 데이터:", data);
            const response = await submitUserInfo(data, profileImage);
            console.log("서버 응답:", response);  // 서버 응답 로그 추가

            if (response.status === 200) {
                alert("회원가입이 완료되었습니다.");
                navigate('/login');
            } else {
                switch (response.status) {
                    case 400:
                        setErrorMessage('잘못된 요청입니다.');
                        break;
                    case 401:
                        setErrorMessage('사용자 이미지가 존재하지 않습니다.');
                        break;
                    case 402:
                        setErrorMessage('기본 정보 또는 체형 정보 데이터가 없습니다.');
                        break;
                    case 403:
                        setErrorMessage('체형 정보 데이터가 이미 존재합니다.');
                        break;
                    case 404:
                        setErrorMessage('체형 정보 데이터 저장 중 오류가 발생했습니다.');
                        break;
                    case 405:
                        setErrorMessage('기본 정보 데이터 저장 중 오류가 발생했습니다.');
                        break;
                    case 406:
                        setErrorMessage('사용자 이미지 데이터 저장 중 오류가 발생했습니다.');
                        break;
                    case 407:
                        setErrorMessage('이미 존재하는 닉네임입니다.');
                        break;
                    case 500:
                        setErrorMessage('서버 에러가 발생했습니다.');
                        break;
                    default:
                        setErrorMessage('알 수 없는 오류가 발생했습니다.');
                        break;
                }
            }
        } catch (error) {
            console.error("API 호출 중 오류 발생:", error);
            setErrorMessage('회원가입 중 오류가 발생했습니다.');
        }
    };

    return (
        <UserInfoPageWrapper>
            <img width="50px" src={logo} alt="FITple Logo" />
            <BasicInfo
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                selectedFits={selectedFits}
                setSelectedFits={setSelectedFits}
                selectedStyles={selectedStyles}
                setSelectedStyles={setSelectedStyles}
                handleFitClick={handleFitClick}
                handleStyleClick={handleStyleClick}
                handleNicknameChange={handleNicknameChange}
                fileInputRef={fileInputRef}
                profileImage={profileImage} // profileImage 전달
                setProfileImage={setProfileImage} // setProfileImage 함수 전달
                errorMessage={errorMessage}
            />
            <BodyInfo handleBodyInfoChange={handleBodyInfoChange} />
            <SubmitButton onClick={handleForceSubmit}>저장</SubmitButton>
        </UserInfoPageWrapper>
    );
}

export default UserInfoPage;
