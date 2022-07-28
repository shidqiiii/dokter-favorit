const initState = {
    token: '',
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};