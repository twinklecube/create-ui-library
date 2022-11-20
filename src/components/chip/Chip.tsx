import React, {ReactNode} from 'react';
import {ChipType} from "./types";
import {ChipWrapper} from "./style";
import {Icon} from "../icon/Icon";
import style from './style.module.css';
import lessStyle from './style.module.less';
import scssStyle from './chip.module.scss'
import './style.css'
import './style.less'
import './style.scss'

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
            <div className="chip-css">style css</div>
            <div className={style.chipModuleCss}>style module css</div>
            <div className="chip-less">chip less</div>
            <div className={lessStyle.chipModuleLess}>chip module less</div>
            <div className="chip-scss">chip scss</div>
            <div className={scssStyle.chipModuleScss}>chip module scss</div>
        </>
    );
};