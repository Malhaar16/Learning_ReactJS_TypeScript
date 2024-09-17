/**
 ** lOGIC
 * Add basic form
 * on button click it should submit the input of the input field
 */


import React from "react";
import { useForm } from "react-hook-form"; // importing useForm library from hook-form



const FormGrocery = () => {

    const {handleSubmit} = useForm()
    
    
    const onSubmit = ()=>{

    }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Enter Grocecory To Add</label>
        <input id="grocery" type="text" className="form-control" />
        <button onClick={onSubmit} type="submit">Add Grocery</button>
      </div>
    </form>
  );
};

export default FormGrocery;
