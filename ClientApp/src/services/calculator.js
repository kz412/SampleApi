export const add = (a, b) => callApi("add", a, b);
export const subtract = (a, b) => callApi("subtract", a, b);
export const divide = (a, b) => callApi("divide", a, b);
export const multiply = (a, b) => callApi("multiply", a, b);
    
const callApi = (op, a, b) => fetch(`operation/${op}?a=${a}&b=${b}`).then(response => response.json());