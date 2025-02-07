import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGIN } from '../actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                loggingIn: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state
    }
}