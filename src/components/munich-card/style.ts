import styled from "styled-components";
import customFont from "../../assets/fonts/big-party-blue.woff2";

export const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
`;

export const Image = styled.img`
    width: auto;
    height: 100%;
`;

export const CityName = styled.div`
    @font-face {
        font-family: 'custom font';
        src: url(${customFont});
    }
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: 'custom font';
    font-size: 60px;
`;

export const ChipWrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: cadetblue;
`;

