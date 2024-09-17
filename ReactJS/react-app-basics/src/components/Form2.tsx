/**Flow of the prgram learning
 * Handling Form Submission
 * Access the input field data after the form is submitted using useRef Hook
 * 
 */
import { FormEvent, useRef } from "react";

const Form2 = () => {
    //For every field we need to use different useRef hook
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const person ={
        name: "",
        age: 0
    }



  //Handling Form Submission whenever the form is submitted
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //In React, event.preventDefault() is used to prevent the default action of an event, such as stopping a form from submitting and causing a page reload. It's commonly used in forms or other actions where the default browser behavior needs to be controlled manually.
    if(nameRef.current !== null) //TO get the value from the input field we need to add this conditional statement. Try the below ling with and without this conditional statement
        console.log(nameRef.current.value); //nameRef.cuurent will return the DOM element we are refering

    if(ageRef.current !== null)
        console.log(ageRef.current.value);

    //Rather than console.log and printing the value we need this input field value to send it to server so we can get it through person object and pass name and age as its properties
    if(nameRef.current !== null)
        person.name = nameRef.current.value;
    if(ageRef.current !== null)
        person.age = parseInt(ageRef.current.value);

    console.log(person);
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={ nameRef } id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ ageRef } id="age" type="text" className="form-control" />
      </div>

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form2;
