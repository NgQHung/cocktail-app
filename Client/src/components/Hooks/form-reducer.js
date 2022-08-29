import { useReducer } from "react";

const initialState = {
    value: "",
    formHandler: false,
};

const reducer = (state, action) => {
    const { type, value } = action;
    if (type === "onOpen") {
        return { value: value, formHandler: true };
    }
    if (type === "onClose") {
        return { value: value, formHandler: false };
    }
};

const useInputUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const closeFormHandler = () => {
        dispatch({
            type: "onClose",
            // formHandler: false,
        });
    };
    const openFormHandler = () => {
        dispatch({
            type: "onOpen",
            // formHandler: true,
        });
        // console.log()
    };

    return {
        formHandler: state.formHandler,
        closeFormHandler,
        openFormHandler,
    };
};

export default useInputUseReducer;
