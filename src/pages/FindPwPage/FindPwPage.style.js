import styled from 'styled-components';

export const FindPwPageWrapper = styled.div`
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
    margin: 20px 0 40px 0;
    padding: 0;
`;

export const FormWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text',
        id: props.id,
        placeholder: props.placeholder
    }))`
    width: 60%;
    height: 30px;
    margin-top: 15px;
    border: 1px solid darkgrey;
    border-radius: 17px;
    background-color: white;
    padding: 8px 15px;
    font-size: 17px;
    outline-color: #0075FF;
    ::placeholder {
        color: #838383;
    }
`;

export const SubmitButton = styled.button`
    width: 64%;
    height: 56px;
    background-color: ${props => (props.isActive ? '#0276FE' : 'black')};
    border-color: ${props => (props.isActive ? '#0276FE' : 'black')};
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
    cursor: ${props => (props.isActive ? 'pointer' : 'default')};
    border: none; 
    box-shadow: none;
`;

export const OptionWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const OptionButton = styled.button`
    margin-top: 30px;
    font-size: 17px;
    color: black;
    text-decoration: underline solid black;
    background-color: white;
    border: none;
    cursor: pointer;
`;
