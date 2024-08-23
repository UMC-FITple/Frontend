import styled from 'styled-components';

export const IdPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.p`
    font-size: 45px;
    font-weight: 750;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 0;
`;

export const FormWrapper = styled.div`
    width: 60%;
    height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 2px solid #cccccc;
`;

export const TextWrapper = styled.div`
    width: 55%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: ${props => (props.$isLast ? '40px' : '25px')};
    justify-content: center;
`;

export const LabelText = styled.p`
    width: 15%;
    font-size: 20px;
    font-weight: 600;
    color: #0276FE;
    text-align: right;
`;

export const InfoText = styled.p`
    width: 40%;
    font-size: 20px;
    font-weight: 600;
    margin-left: 50px;
    text-align: left;
`;

export const Button = styled.button`
    width: 55%;
    height: 56px;
    background-color: ${props => (props.$isActive ? '#0276FE' : '#EFEFEF')};
    border-color: ${props => (props.$isActive ? '#0276FE' : '#EFEFEF')};
    border-radius: 10px;
    font-size: 17px;
    color: ${props => (props.$isActive ? 'white' : 'black')};
    margin-top: 15px;
    cursor: pointer;
    border: none; 
    box-shadow: none;
`;