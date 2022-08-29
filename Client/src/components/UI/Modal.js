import React, { Fragment } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
const BackDrop = (props) => {
    return (
        <div
            className="backdrop"
            // className="bg-gray-400 bg-opacity-75 fixed t-0 r-0 l-0 z-50 w-full md:h-full"
            onClick={props.onClose}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return <div className="modal">{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;
