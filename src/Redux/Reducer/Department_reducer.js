const initState = [];

export const departmentsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET":
            return [...action.payload];
        default:
            return state;
    }
};