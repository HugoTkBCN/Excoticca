import React from "react";
import styled from "styled-components";
import { CardsEntity } from "../types/types";

const CardComponent = styled.div`
    margin: 20px;
    height: 400px;
    width: 90%;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    &:hover {
        cursor: pointer;
        transition: 0.6s;
        transform: scale(1.05);
    }
`;

const CardContent = styled.div`
    position: relative;
    color: #fff;
    height: 300px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & p {
        position: absolute;
        top: 5%;
        left: 15%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: bold;
        color: #e4c98f;
        padding: 3%;
        border-radius: 6px;
        background: #2a2a2a;
        z-index: 1;
    }

    & h3 {
        position: absolute;
        bottom: 10%;
        font-size: 28px;
        font-weight: bold;
        padding: 3%;
        z-index: 1;
        margin: 0;
        @media (max-width: 600px) {
            font-size: 24px;
        }
        @media (max-width: 480px) {
            font-size: 18px;
        }
    }

    & span {
        position: absolute;
        bottom: 5%;
        font-weight: 500;
        padding: 0 3%;
        z-index: 1;
        margin: 0;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
`;

const Description = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3%;
    background: white;
`;

const Pricing = styled.div`
    background-color: #fff;
    & span:first-child {
        text-decoration: line-through;
        font-size: 16px;
        font-weight: bold;
    }
    & span:nth-child(2) {
        font-size: 24px;
        font-weight: bold;
        @media (max-width: 600px) {
            font-size: 18px;
            font-weight: bold;
        }
    }
`;

const Card = ({ images, title, destination, days, priceDetail }: CardsEntity) => {
    return (
        <CardComponent>
            <CardContent>
                <p>-{priceDetail.pricingPercentage}%</p>
                <img src={images[0].desktop} alt={destination} />
                <h3>{destination}</h3>
                <span>{days} Days</span>
            </CardContent>
            <Description>
                <div>{title}</div>
                <Pricing>
                    From <span>{priceDetail.oldPriceBeautify}</span> <span>{priceDetail.fromPriceBeautify}</span>
                </Pricing>
            </Description>
        </CardComponent>
    );
}

export default Card;