import styled from 'styled-components';

export const TosPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

export const MainText = styled.p`
    width: 62%;
    font-size: 20px;
    margin: 40px 0 15px 0;
    padding: 0;
    font-weight: bold;
    color: #0276FE;
`;

export const ScrollBox = styled.div`
    width: 59%;
    height: 200px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-y: scroll;
    // background-color: #fcfcfc;
    background-color: white;
    p {
        line-height: 1.6;
        color: #838383;
    }
`;

export const CheckboxContainer = styled.div`
    width: 62%;
    margin: 12px 0;
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
`;

export const SubmitButton = styled.button`
    width: 62%;
    height: 50px;
    background-color: #0276FE;
    border: none; 
    box-shadow: none;
    border-radius: 8px;
    font-size: 17px;
    color: white;
    margin-top: 40px;
    cursor: ${({ isTosChecked, isPrivacyChecked }) =>
        isTosChecked && isPrivacyChecked ? 'pointer' : 'default'};
    opacity: ${({ isTosChecked, isPrivacyChecked }) =>
        isTosChecked && isPrivacyChecked ? 1 : 0.5};
`;