import { authHeader } from "../util/auth-header";

export const add = (a, b) => callApi("add", a, b);
export const subtract = (a, b) => callApi("subtract", a, b);
export const divide = (a, b) => callApi("divide", a, b);
export const multiply = (a, b) => callApi("multiply", a, b);

function callApi (op, a, b) {
    const url = `operation/${op}?a=${a}&b=${b}`;
    const options = { method: 'GET', headers: authHeader() };
    console.log('options: ', options);
    
    return fetch(url, options)
        .then(response => response.json());
}