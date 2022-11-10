import styled from "styled-components";
import customFontWoff from '../../assets/fonts/big-party-blue.woff';
import customFontWoff2 from '../../assets/fonts/big-party-blue.woff2';
import img from '../../assets/images/olympia-park-munich-min.jpg';

export const CardWrapper = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
`;

export const CardTitle = styled.div`
    @font-face {
      font-family: 'Custom Font';
      src: url(${customFontWoff2}) format('woff2'),
           url(${customFontWoff}) format('woff');
    }

    position: absolute;
    bottom: 15px;
    left: 15px;
    font-size: 48px;
    color: white; 
    font-family: 'Custom Font';
    background-image: url(${img});
`;