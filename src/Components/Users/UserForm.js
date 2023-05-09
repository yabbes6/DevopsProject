import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";
import ErrorModal from "../UI/ErrorModal";


const UserForm = (props) => {
    const [userName, setUsername] = useState("");
    const [ageUser, setAge] = useState("");
    const [error, setError] = useState("");

    const EntryUsername = (event) => {
        setUsername(event.target.value);
    }
    const EntryAge = (event) => {
        setAge(event.target.value);
    }

    const UserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || ageUser.trim().length === 0) {
            setError({ title: "ERROR !", message: "You have to add some content !!" });
            return;
        }
        if (+ageUser < 1) {
            setError({ title: "ERROR syntaxe !", message: "l age is < than 1!!" })
            return;
        }
        props.onAddUser(userName, ageUser);
        setUsername("")
        setAge("");
    };
    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirme={ErrorHandler} />}
            <Card className={classes.input} >
                <form onSubmit={UserHandler}>
                    <label htmlFor="user">Username</label>
                    <input id="user" type="text" value={userName} onChange={EntryUsername} />
                    <label htmlFor="age">Age(Years) </label>
                    <input id="age" type="number" value={ageUser} onChange={EntryAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default UserForm;