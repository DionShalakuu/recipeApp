// actions.js

import { addToFavorites } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const FavoriteButton = ({ recipeId }) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(recipeId));
    };

    return (
        <button className="btn btn-primary" onClick={handleAddToFavorites}>
            Add to Favorites
        </button>
    );
};
export default FavoriteButton