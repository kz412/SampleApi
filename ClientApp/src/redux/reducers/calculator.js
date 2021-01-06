import { SET_OPERAND, SET_OPERATION, CLEAR, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actionTypes";

const defaultState = {
    operandA: null,
    operandB: 0,
    operation: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_OPERAND: {
            return { ...state, operandB: action.payload.value };
        }
        case SET_OPERATION: {
            return { ...state, operation: action.payload.operation, operandA: state.operandB, operandB: 0 };
        }
        case CLEAR: {
            return { ...state, operation: null, operandA: 0, operandB: 0 };
        }
        case LOGIN: {
            console.log(action.payload);
            break;
        }
        case LOGIN_SUCCESS: {
            return { ...state, loggedIn: true }
        }
        case LOGIN_FAILURE: {
            alert(`Login failed: ${action.payload.error}`);
            break;
        }
    }

    return { ...state };
}
