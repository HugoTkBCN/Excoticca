import React from "react";
import Card from "./Card";
import Slider from 'react-slick';
import { CardsEntity, Data } from "../types/types";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Background = styled.div`
    background-image: url('https://www.exoticca.com/assets/images/bg_short_trips.jpg');
    width: 100%;
`

const CustomSlider = styled(Slider)`
    .slick-next,
    .slick-prev {
        width: 100px;
        height: 100px;
        z-index: 2;
        top: 50%;
        right: 0%;
    }
    .slick-prev:before,
    .slick-next:before {
        font-size: 50px;
        line-height: 0;
        color: white;
    }
`

const SliderContainer = ({ data }: Data) => {

    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2.75,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <Background >
            <CustomSlider {...settings}>
                {data[0].cards?.map((item: CardsEntity) => (
                    <Card
                        key={item.id}
                        days={item.days}
                        priceDetail={item.priceDetail}
                        images={item.images}
                        title={item.title}
                        destination={item.destination}
                    />
                ))}
            </CustomSlider>
        </Background>
    );
};

export default SliderContainer;