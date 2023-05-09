import React from "react";
import ReactDOM from "react-dom";


import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css"


//Concept of Portals

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirme} />
    )
}

const Modal = props => {
    return (
        <Card className={classes.modal} >
            <header className={classes.header} >
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content} >
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions} >
                <Button onClick={props.onConfirme}>Okey</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onConfirme={props.onConfirme} />,
                document.getElementById("modals-root")
                )}
            {ReactDOM.createPortal(
                <Backdrop
                    onConfirme={props.onConfirme} />,
                document.getElementById("backdrop-root")
                )}

        </React.Fragment>
    );
}

export default ErrorModal;