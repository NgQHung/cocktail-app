import axios from "axios";
import React, { useReducer } from "react";

const initialState = {
    data: {},
};

const reducer = (state, action) => {
    const { type, payload } = action;
    if (type === "/alcoholic") {
        return { data: payload };
    }
    return reducer;
};

export const useHttp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const alcoholicHtpp = () =>
        axios
            .get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then((data) => {
                return dispatch({ type: "/alcoholic", payload: data.data.drinks });
            })
            .catch((err) => console.log(err));

    return {
        alcoholicHtpp,
    };
};
