import styled from 'styled-components';

export const SignupPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

export const FormWrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0 50px 0;
`;

export const InputText = styled.p`
    width: 62%;
    font-size: 18px;
    padding: 0;
    color: #0276FE;
    margin-top: 10px;
    font-weight: 500;
`;

export const InputBox = styled.input.attrs(props => ({
    type: props.type || 'text',
    id: props.id,
    placeholder: props.placeholder
}))`
    width: 60%;
    height: 40px;
    margin-top: 10px;
    border: 1px solid #838383;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

export const ErrorText = styled.p`
    color: ${props => 
        props.isError ? '#FF004C' : '#00E016'
    };
    width: 62%;
    margin: 10px 0 30px 0;
    padding: 0;
    font-size: 14px;
`;


export const CheckboxContainer = styled.div`
    width: 62%;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;
    width: 15px;
    height: 15px;
    position: relative;
    cursor: pointer;
    appearance: none;
    background-color: white;
    border: 1px solid #838383;
    border-radius: 3px;
    outline: none;
    transition: background-color 0.2s, border-color 0.2s;
    vertical-align: middle;

    &:checked::after {
        content: '✓';
        font-size: 20px;
        font-weight: 900;
        position: absolute;
        left: 2px;
        top: -4px;
        color: #0276FE;
        transform: scale(1.2);
    }
`;

export const CheckboxLabel = styled.p`
    margin-top: 2px;
    margin-right: 8px;
`;

export const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
`;