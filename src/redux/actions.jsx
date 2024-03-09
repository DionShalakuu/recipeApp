// actions.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const addToFavorites = (recipeId) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: recipeId
    };
};
