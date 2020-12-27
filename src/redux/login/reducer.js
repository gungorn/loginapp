const initialState = {
    userName: '',
    password: '',
};

const reducer = (state = initialState, { type, payload }) => {
    if (type === 'SET_USERNAME') return { ...state, userName: payload };
    if (type === 'SET_PASWORD') return { ...state, password: payload };

    return { ...state };
};

export default reducer;