// reducers.js

import { ADD_TO_FAVORITES } from './actions';

const initialState = {
    favorites: [] // Ensure favorites is initialized as an array
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: Array.isArray(state.favorites) ? [...state.favorites, action.payload] : [action.payload]
            };
        default:
            return state;
    }
};

export default reducer;
