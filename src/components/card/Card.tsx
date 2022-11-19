import React, {FC, ReactNode} from 'react';
import {CardWrapper} from "./style";

interface Props {
    children?: ReactNode;
}

export const Card = ({children}: Props) => {
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    );
};