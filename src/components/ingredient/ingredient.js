import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import axios from "../../axios";
const Ingredient = () => {

  const [unit, setUnit] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [IngredientData, setIngredientData] = useState({
      ingredient: '',
      amount: '',
      unit_id: '',
  });

  const handleChange = (name, value) => {
    setIngredientData({ ...IngredientData, [name]: value });
  };

  const getData = (e) =>{
      axios.get(`unit/all`).then(data => {
        setUnit(data.data);
          console.log("data",data)
      }).catch(err => {
        console.log(err);
      })}

  const getIngredients = (e) =>{
      axios.get(`ingredients/all`).then(data => {
        setIngredients(data.data);
      }).catch(err => {
        console.log(err);
      })}

    useEffect(()=>{
      getData();
      getIngredients();
    },[])


  const handleIngredient = (e) => {
    e.preventDefault();
        axios.post(`ingredient/`,IngredientData).then(data => {
          setIngredientData({
            ingredient: '',
            amount: '',
            unit_id: '',
          });
            console.log("data",data)
        }).catch(err => {
          console.log(err);
        })}

  return (
    <div>
      <div className='col-md-12'>
      {ingredients?.map((el) => (
                        <>
                        <p>{el.ingredient}</p>
                        </>
                      ))}
      </div>
      <div className="card p-4 my-5">

        <form onSubmit={handleIngredient}>
            <div className="row">
            <div className="col-md-6">

            <label htmlFor="ingredient" className="form-label">Ingredient Name:</label>
            <input type="text" className="form-control" id="ingredient" name="ingredient" value={IngredientData?.ingredient} onChange={(e) => handleChange('ingredient', e.target.value)} required />
                    </div>
            <div className="col-md-6">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input type="text" className="form-control" id="amount" name="amount" value={IngredientData?.amount} onChange={(e) => handleChange('amount', e.target.value)} required />
                    </div>
                    <div className="col-md-12 mt-3">

                    <select className="form-select"
                       onChange={(e) => handleChange('unit_id', e.target.value)}
                      required
                      name="unit_id"
                      >
                      <option value=""  selected disabled>Select</option>
                      {unit?.map((el) => (
                        <>
                        <option key={el?.id} value={el?.id}>
                          {el?.name}
                        </option>
                        </>
                      ))}
                    </select>
                      </div>
            </div>
            <div className='mx-auto text-left'>

            <button type="submit" className="btn btn-success my-4">Add Ingredient</button>
            </div>
        </form>
      </div>

    </div>
  )
}

export default Ingredient