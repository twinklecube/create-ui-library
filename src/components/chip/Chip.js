import React from 'react';
import { ChipType } from "./types";
import { ChipWrapper } from "./style";
import { Icon } from "../icon/Icon";
export const Chip = ({ children, type = ChipType.DEFAULT, error, active }) => {
    return (React.createElement(ChipWrapper, { error: error, active: active, type: type },
        children,
        type === ChipType.ICON && React.createElement(Icon, null)));
};
