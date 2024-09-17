/**
 ** lOGIC
 * Add basic form
 * on button click it should submit the input of the input field
 * Accessing the input field using state-hook 
 */

import { FormEvent, useState } from "react";


const FormGrocery = () => {

  const [groceryItemAdded, setGroceryItemAdded] = useState(["Milk"]);

  const [groceryItem, setGroceryItem] = useState({
    groceryItemName:""
  })

  const handleSubmit = (event: FormEvent) =>{
    event.preventDefault();

    if(groceryItem.groceryItemName!== "")
      setGroceryItemAdded([...groceryItemAdded, groceryItem.groceryItemName])
    console.log(groceryItem);
  }
   
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="groceryItemName" className="form-label">Enter Grocecory To Add</label>
        <input onChange={(event)=> setGroceryItem({...groceryItem, groceryItemName: event.target.value})} id="grogroceryItemNamecery" type="text" className="form-control" />
        <button type="submit">Add Grocery</button>
      </div>
    </form>

    <ul className="list-group">
      {groceryItemAdded.map((item,index) =>(<li key={index}>{ item }</li> ))}
    </ul>
    </>
  );
};

export default FormGrocery;
