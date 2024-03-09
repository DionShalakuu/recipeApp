import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from "../../axios";
const AddRecipeModal = ({ showModal, closeModal }) => {
    const [ingredient, setIngredient] = useState([]);
    const [recipeData, setRecipeData] = useState({
        name: '',
        ingredients: [],
        instructions: '',
    });

    const handleChange = (name, value) => {
        setRecipeData({ ...recipeData, [name]: value });
    };

    const handleIngredientsChange = (selectedOptions) => {
        const selectedIngredients = selectedOptions.map(option => option.value);
        handleChange('ingredients', selectedIngredients);
    };

    
    const getData = (e) =>{
        axios.get(`ingredient/all`).then(data => {
            setIngredient(data.data);
            console.log("data",data)
        }).catch(err => {
          console.log(err);
        })}

      useEffect(()=>{
        getData();
      },[])

      console.log("recipeData",recipeData)
    const handleSubmit = (e) => {
        e.preventDefault();
  
            axios.post(`recipe/`,recipeData).then(data => {
                console.log("data",data)
            closeModal();

            }).catch(err => {
              console.log(err);
            })}

        

    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Recipe</h5>
                        <button type="button" className="close" onClick={closeModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="recipeName" className="form-label">Recipe Name</label>
                                <input type="text" className="form-control" id="recipeName" name="name" value={recipeData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ingredients" className="form-label">Ingredients</label>
                                <Select
                                        options={ingredient.map(item => ({ value: {id:item.id}, label: item.ingredient }))}
                                        isMulti
                                        onChange={handleIngredientsChange}
                                    />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instructions" className="form-label">Cooking Instructions</label>
                                <textarea className="form-control" id="instructions" rows="3" name="instructions" value={recipeData.instructions} onChange={(e) => handleChange('instructions', e.target.value)} required></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instructions" className="form-label">Cooking description</label>
                                <textarea className="form-control" id="description" rows="3" name="description" value={recipeData.description} onChange={(e) => handleChange('description', e.target.value)} required></textarea>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image (URL)</label>
                                <input type="text" className="form-control" id="image" name="image" value={recipeData.image} onChange={(e) => handleChange('image', e.target.value)} />
                            </div> */}
                            <button type="submit" className="btn btn-primary">Add Recipe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRecipeModal;
