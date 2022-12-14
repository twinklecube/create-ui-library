import * as React from 'react';
import {Chip} from "./Chip";
import {ChipType} from "./types";

const ChipTwinklecube = () => {
    return (
        <Chip type={ChipType.ICON} active={true}>sample chip</Chip>
    );
};

export default ChipTwinklecube;