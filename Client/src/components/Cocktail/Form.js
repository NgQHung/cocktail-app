import React from "react";
import Modal from "../UI/Modal";
import useInputUseReducer from "../Hooks/form-reducer";

const Form = () => {
    const { formHandler: formHandler, closeFormHandler: closeFormHandler } = useInputUseReducer();
    // console.log(formHandler);

    return (
        <Modal>
            <header className="flex justify-center pb-8">login</header>
            {/* <div className="flex flex-col "> */}
            <div className="pb-8 flex flex-col">
                <label htmlFor="name" className="pb-4">
                    Your Email
                </label>
                <input type="text" className="border-2 w-full" />
            </div>
            <div className="pb-8 flex flex-col">
                <label htmlFor="name" className="pb-4">
                    Password
                </label>
                <input type="text" className="border-2 w-full" />
            </div>
            {/* </div> */}
            <div className="flex justify-between">
                <div
                    onClick={closeFormHandler}
                    className=" border-2 hover:bg-red-100 cursor-pointer rounded-md pl-4 pr-4 pt-2 pb-2"
                >
                    Close
                </div>
                <div
                    // onClick={openFormHandler}
                    className=" border-2 hover:bg-green-200 cursor-pointer rounded-md pl-4 pr-4  pt-2 pb-2"
                >
                    Login
                </div>
            </div>
        </Modal>
    );
};

export default Form;
