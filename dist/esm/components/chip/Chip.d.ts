import { ReactNode } from 'react';
import { ChipType } from "./types";
import './style.css';
import './style.less';
import './style.scss';
interface Props {
    children: ReactNode;
    type?: ChipType;
    error?: boolean;
    active?: boolean;
}
export declare const Chip: ({ children, type, error, active }: Props) => JSX.Element;
export {};
