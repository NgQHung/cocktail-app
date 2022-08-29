import React, { useState } from "react";
import Form from "../Cocktail/Form";
import useInputUseReducer from "../Hooks/form-reducer";
import Button from "../UI/Button";

const Header = () => {
    // const [openForm, setOpenForm] = useState(false);
    const {
        formHandler: formHandler,
        closeFormHandler: closeFormHandler,
        openFormHandler: openFormHandler,
    } = useInputUseReducer();
    // const formHandler = (e) => {
    //     e.preventDefault();
    //     setOpenForm(true);
    // };
    // console.log(formHandler);
    return (
        <div className="bg-gray-200">
            <div className="flex items-center justify-between  h-20 cursor-pointer mr-4 ml-4">
                <Button>Filter</Button>
                <div className="">Cocktail</div>
                <div>Search Icon</div>
                <div className="flex ">
                    <div
                        onClick={openFormHandler}
                        className=" flex items-center mr-8 pl-4 pr-4 pt-2 pb-2 hover:bg-green-100 bg-gray-300 rounded-md"
                    >
                        Login
                    </div>
                    {/* {formHandler && <Form />} */}
                    <div className="flex items-center mr-8 pl-4 pr-4 pt-2 pb-2 p-4 hover:bg-green-100 bg-gray-300 rounded-md">
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
