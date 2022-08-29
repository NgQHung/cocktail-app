import axios from "axios";
import React, { Fragment, useEffect } from "react";
import Header from "../Layout/Header";
import { useHttp } from "../Hooks/http-reducer";
import Footer from "../Layout/Footer";
import Form from "../Cocktail/Form";

const Main = () => {
    // const fetchApi = async () => {
    //     const response = await axios.get(
    //         "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    //     );
    //     const data = response.data.drinks;
    //     console.log(data);
    // };
    // // const { alcoholic: alcoholicData } = useHttp();
    // // console.log(alcoholicData);
    // useEffect(() => {
    //     // fetchApi();
    //     // alcoholic();
    // }, []);
    return (
        <Fragment>
            <Header />
            <Footer />
            {/* <Form /> */}
        </Fragment>
    );
};

export default Main;
