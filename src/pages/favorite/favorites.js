import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
const Favorites = (props) => {
 

  return (
    <div>

<div className="row">
                {props?.favorites?.map(recipe => (
                    <div key={recipe.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-title">{recipe?.description}</p>
                                <hr/>
                                <p className="card-title">{recipe?.instructions}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      favorites: state.data.favorites,

    };
  };
  
  export default connect(mapStateToProps)(Favorites);