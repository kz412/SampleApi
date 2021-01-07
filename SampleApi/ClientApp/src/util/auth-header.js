import { currentUser } from "../services/auth";

export function authHeader() {
    let user = currentUser();

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}