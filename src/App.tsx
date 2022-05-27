import React, { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { getData } from "./api/getData";
import SliderContainer from './components/SliderContainer';
import Header from "./components/Header";
import MarketSelector from "./components/MarketSelector";

export default function App() {
    const [market, setMarket] = useState<string>("us");
    const [data, setData] = useState<any>(require(`./mocks/data` + market.toUpperCase() + `.json`).slides);

    // const API_US = "https://api-us.exoticca.com/api/home";
    // const API_ES = "https://api-es.exoticca.com/api/home";
    // const API_UK = "https://api-uk.exoticca.com/api/home";

    // const { data: us }: UseQueryResult<any> = useQuery<any>(
    //     "us",
    //     async () => getData(API_US)
    // );

    // const { data: es }: UseQueryResult<any> = useQuery<any>(
    //     "es",
    //     async () => getData(API_ES)
    // );

    // const { data: uk }: UseQueryResult<any> = useQuery<any>(
    //     "uk",
    //     async () => getData(API_UK)
    // );

    return (
        <>
            <Header data={data} />
            <SliderContainer data={data} />
            <MarketSelector setData={setData} setMarket={setMarket} />
        </>
    );
}
