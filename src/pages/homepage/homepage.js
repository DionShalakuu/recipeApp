import React, { useEffect, useState } from 'react';
import axios from "../../axios";
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux/actions';

const Homepage = (props) => {
    console.log("props",props)
    
    const dispatch = useDispatch();

    
    
    const [searchData,setSearchData] = useState();
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipesData, setRecipeData] = useState(null);

    const openRecipeDetails = (recipe) => {
        setSelectedRecipe(recipe);
    }

    const closeRecipeDetails = () => {
        setSelectedRecipe(null);
    }

    const getData = () => {
        axios.get('/recipe/all').then(data => {
            setRecipeData(data.data);
        }).catch(err => {
          console.log(err);
        })
      }

    //   const handleAddToFavorites = (recipe) => {
    //     dispatch(addToFavorites(recipe));
    // };


      const handleSearch = (e) =>{
        e.preventDefault();
        axios.get(`recipe/ingredient/${e.target.value}`).then(data => {
            setSearchData(data.data);
            console.log("data",data)
        }).catch(err => {
          console.log(err);
        })}


      useEffect(()=>{
        getData();
      },[])

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Recipes</h1>
                <div className='my-4'>
               <span>Search Recipe</span>
                <input class="form-control mr-sm-2 w-100 mx-auto " type="search" placeholder="Search" onChange={(e)=>handleSearch(e)}/>
             
                </div>
            {searchData?.map((el)=>{
            return(
                <>
                <ul>
                    <li>
                        <Link to={`recipe/${el.id}`}>{el?.name}</Link>
                    </li>
                </ul>
                </>
            )
        })}
            <div className="row">
                {recipesData?.map(recipe => (
                    <div key={recipe.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-title">{recipe?.description}</p>
                                <hr/>
                                <p className="card-title">{recipe?.instructions}</p>
                                <button className="btn btn-primary" onClick={() => openRecipeDetails(recipe)}>View Details</button>
                                <button className="btn btn-primary" onClick={() => props?.addToFavorites(recipe)}>Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recipe Details Modal */}
            {selectedRecipe && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedRecipe.name}</h5>
                                <button type="button" className="close" onClick={closeRecipeDetails}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" className="img-fluid mb-3" alt={selectedRecipe.name} />
                            
                                <h6>Cooking Instructions:</h6>
                                <p>{selectedRecipe.instructions}</p>
                                <Link to={`recipe/${selectedRecipe.id}`}>Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log("tes ]t state", state)
    return {
       favorites: state.favorites

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (data) => dispatch(addToFavorites(data)),
      // loadingOff: () => dispatch(loadingOff()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
