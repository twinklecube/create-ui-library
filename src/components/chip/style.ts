import styled from "styled-components";
import {ChipType} from "./types";

interface ChipWrapperProps {
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
    padding: 5px 15px;
    display: inline-flex;
    gap: 10px;
    border-radius: 15px;
    border: ${props => `2px solid ${props.error ? '#E0144C' : props.active ? '#81C6E8' : '#333333'}`};
    cursor: pointer;
`;