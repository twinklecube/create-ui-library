import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";
import {Icon} from "../icon/Icon";
import style from "./style.module.css";

interface Props {
    children: ReactNode;
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}

export const Chip = ({
    children,
    type=ChipType.DEFAULT,
    error,
    active
}: Props) => {
    return (
        <>
            <ChipWrapper error={error} active={active} type={type}>
                {children}
                {type === ChipType.ICON && <Icon />}
            </ChipWrapper>
            <div className={style.testStyle}></div>
        </>
    );
};