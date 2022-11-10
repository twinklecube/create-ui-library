import styled from "styled-components";
export const ChipWrapper = styled.div `
    padding: 5px 15px;
    display: inline-flex;
    gap: 10px;
    border-radius: 15px;
    border: ${props => `2px solid ${props.error ? '#E0144C' : props.active ? '#81C6E8' : '#333333'}`};
    cursor: pointer;
`;
