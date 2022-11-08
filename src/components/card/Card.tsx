import React from 'react';
import {CardWrapper, CardTitle} from "./style";
import img from '../../assets/images/olympia-park-munich-min.jpg';

export const Card = () => {
    return (
        <CardWrapper>
            <img src={img} alt="olympia park - munich" />
            <CardTitle>Olympia park, Munich</CardTitle>
        </CardWrapper>
    );
};