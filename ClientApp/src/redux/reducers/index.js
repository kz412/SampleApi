import { SET_OPERAND, SET_OPERATION, CLEAR } from "../actionTypes";

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
        
        default: {
            return { ...state };
        }
    }
}
