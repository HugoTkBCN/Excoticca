import * as React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Data } from "../types/types";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center
    align-content: center;
    background-color: #fff;
    padding: 2%;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    align-content: center;
    width: 60%;
    height: 100%;
    @media (max-width: 720px) {
        width: 100%;
        align-items: center;
    }
`;

const Title = styled.div`
    font-style: italic;
    font-size: 3rem;
    margin-bottom: 1%;
    @media (max-width: 720px) {
        font-size: 2rem;
    }
`;

const Description = styled.div`
    font-size: 0.9rem;
    @media (max-width: 720px) {
        display: none;
    }
`;

const MoreTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
    @media (max-width: 720px) {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`;

const Availability = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &:before, &:after {
        content: "";
        border-top: 1px solid rgb(42, 42, 42);
        margin: 0px 10px 0px 0px;
        width: 100%;
        height: 1px;
        flex: 1;
        @media (max-width: 720px) {
            border-top: 0;
        }
    }
    @media (max-width: 720px) {
        width: 70%;
    }
`;

const ButtonMoreTrips = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 5px;
    @media (max-width: 720px) {
        display: none;
        width: 0%;
    }
    &:hover {
        cursor: pointer;
    }
`;

const ButtonForward = styled.a`
    @media (min-width: 720px) {
        display: none;
    }
`;

const Header = ({ data }: Data) => {
    return (
        <Container>
            <TextPart>
                <Title>Multi-country tours</Title>
                <Description>Explore our more than 17 nights multi-country tours. Let yourself be surprised by our extended version top sellers.</Description>
            </TextPart>
            <MoreTrips>
                <ButtonMoreTrips>
                    <p>See more trips</p>
                    <ArrowRightAltIcon />
                </ButtonMoreTrips>
                <Availability> <p>{data[0].cards?.length} available trips</p> </Availability>
                <ButtonForward>
                    <ArrowForwardIosIcon fontSize="large" />
                </ButtonForward>
            </MoreTrips>
        </Container>
    );
}

export default Header;