import { useState } from "react";


interface Props{
    alert: string;
  }

function Button({ alert }: Props) {
  // const cakes = ["Straberry","Choclate","Blueberry","Rass Malai"];


  let [counter, setCounter] = useState(1);

  let addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  let removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

//   let showAlert = () =>{
//     alertVisible = true;
//     setAlertVisible(alertVisible);
//   }

  return (
    <>
      <h1>Welcome to Cake World</h1>
      <p>Total Cake Order: {counter}</p>

      {counter>15 && (
        <div className="alert alert-warning">
          <span>{alert}</span>
        </div>
      )}
    
      {counter<20 && (
        <button onClick={addValue} className="btn btn-success">Add</button>
      )}
      
      {counter>0 && (
         <button onClick={removeValue} className="btn btn-danger">Remove</button>
      )}
     



      {/* <button  onClick={showAlert} className="btn btn-warning"> Alert </button> */}
    </>
  );
}

export default Button;
