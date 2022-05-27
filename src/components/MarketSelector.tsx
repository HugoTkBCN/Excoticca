import React from "react";
import { MarketManager } from "../types/types";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ContainerSelector = styled.select`
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 10px;
    width: 75px;
    height: 100%;
    &:focus {
        cursor: pointer;
    }
`;

const MarketSelector = ({ setMarket, setData }: MarketManager) => {
    const [selectedOption, setSelectedOption] = React.useState<string>('us');

    return (
        <ContainerSelector
            defaultValue={selectedOption}
            onChange={(e) => {
                setMarket(e.target.value);
                setData(require(`../mocks/data` + e.target.value.toUpperCase() + `.json`).slides);
                setSelectedOption(e.target.value);
            }}
        >
            <option value="us">US</option>
            <option value="uk">En</option>
            <option value="es">ES</option>
        </ContainerSelector>
    );
};

export default MarketSelector;