import { SET_OPERATION, SET_OPERAND, CLEAR, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import { add, subtract, divide, multiply } from "../services/calculator";
import { authenticate } from "../services/auth";
import { push } from "react-router-redux";

export const addClicked = () => ({
    type: SET_OPERATION,
    payload: {
        operation: "ADD"
    }
});

export const subtractClicked = () => ({
    type: SET_OPERATION,
    payload: {
        operation: "SUBTRACT"
    }
});

export const multiplyClicked = () => ({
    type: SET_OPERATION,
    payload: {
        operation: "MULTIPLY"
    }
});

export const divideClicked = () => ({
    type: SET_OPERATION,
    payload: {
        operation: "DIVIDE"
    }
});

export const clearClicked = () => ({
    type: CLEAR
});

export const setOperand = (value) => ({
    type: SET_OPERAND,
    payload: { value }
});

export const submitLogin = ({username, password}) => {
    return dispatch => {
        authenticate(username, password)
            .then(
                user =>  dispatch(loginSuccess(user)),
                error => dispatch(loginFailure(error)))
    }
}

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: { user }
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error }
});

export const equalsClicked = (a, b, op) => {
    const doOperation = action => dispatch => action(a, b)
        .then(result => {
            dispatch(setOperand(result));
        });

    switch (op) {
        case "ADD": 
            return doOperation(add);
        case "SUBTRACT":
            return doOperation(subtract);
        case "DIVIDE":
            return doOperation(divide);
        case "MULTIPLY":
            return doOperation(multiply);
    }

    return () => { };
};