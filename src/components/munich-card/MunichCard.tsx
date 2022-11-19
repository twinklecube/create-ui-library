import React from 'react';
import {CityName, ChipWrapper, Image, ImageWrapper} from "./style";
import {Chip, ChipType} from "../chip";
import munichBg from "../../assets/images/olympia-park-munich-min.jpg";
import {Card} from "../card";

export const MunichCard = () => {
    return (
        <Card>
            <ImageWrapper>
                <Image src={munichBg} />
                <CityName>Munich</CityName>
            </ImageWrapper>
            <ChipWrapper>
                    <Chip type={ChipType.ICON}>select</Chip>
                    <Chip>pin</Chip>
            </ChipWrapper>
        </Card>
    );
};