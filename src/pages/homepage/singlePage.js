import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import { useParams } from 'react-router-dom';
const SinglePage = () => {
    const { id } = useParams();
    const [recipesData, setRecipeData] = useState(null);
    const getData = () => {
        axios.get(`/recipe/${id}`).then(data => {
            setRecipeData(data.data);
            console.log("data",data)
        }).catch(err => {
          console.log(err);
        })
      }

      useEffect(()=>{
        getData();
      },[]);
  return (
    <div>

            <div className="col-md-6 mb-4 mx-auto">
                        <div className="card">
                            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" className="img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">Name: {recipesData?.name}</h5>
                                <p className="card-title">Description: {recipesData?.description}</p>
                                <hr/>
                                <p className="card-title">Instructions: {recipesData?.instructions}</p>
                                <h4 className="card-title">Ingredients</h4>
                                <ol>
                                {recipesData?.recipe_ingredients?.map((el)=>{
                                    return(
                                        <>

                                        <li>{el.ingredient.ingredient}</li>
                                        </>
                                    )
                                })
                                
                            }
                            </ol>
                            </div>
                        </div>
                    </div>

    </div>
  )
}

export default SinglePage