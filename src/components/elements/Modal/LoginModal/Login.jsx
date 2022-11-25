//импорт модулей
import React, {useCallback, useEffect, useState} from 'react';

//импорт стилей
import css from './Login.module.sass';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {login} from "../../../../redux/slices/auth";
import Register from "../RegisterModal/Register";

const Login = ({open, handleClose}) => {
    const [error, setError] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const dispatch = useAppDispatch();
    const {isSuccess, isError, message} = useAppSelector(
        (state) => state.auth
    );


    const onInputChange = useCallback(
        (e) => {
            setUserData({...userData, [e.target.name]: e.target.value});
        },
        [userData]
    );

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    useEffect(() => {
        if (isSuccess) {
            window.location.reload();
        }
        if (isError) {
            setError(message);
        }
    }, [isSuccess, isError]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(login(userData));
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Log In</DialogTitle>
                <DialogContentText>
                    <p> Log In </p>
                    <p style={{color: 'red'}}> {error ? message : null} </p>
                </DialogContentText>
                <form onSubmit={onFormSubmit} action="" className="pt-4 space-y-3">
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="email"
                            label="Email Address"
                            type="email"
                            onChange={onInputChange}
                            value={userData.email}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            onChange={onInputChange}
                            value={userData.password}
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <p style={{color: "black", fontSize: "small"}}>Don't have an account?</p>
                        <Button onClick={handleClickOpen}>Sign In</Button>
                        <Register
                            open={openModal}
                            handleClose={handleClose}
                        />
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                        <Button
                            margin="dense"
                            id="login"
                            type="submit"
                            variant="outlined"
                        > Log In
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default Login;