import React from 'react';
import { CardWrapper, CardTitle } from "./style";
import img from '../../assets/images/olympia-park-munich-min.jpg';
export const Card = () => {
    return (React.createElement(CardWrapper, null,
        React.createElement("img", { src: img, alt: "olympia park - munich" }),
        React.createElement(CardTitle, null, "Olympia park, Munich")));
};
