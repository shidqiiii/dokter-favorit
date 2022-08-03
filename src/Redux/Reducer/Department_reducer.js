const initState = [];

export const departmentsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETDEPART":
            return [...action.payload];
        default:
            return state;
    }
};