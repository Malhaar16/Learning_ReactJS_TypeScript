/**Flow of the learning form in ReactJS
 * Follow form2.tsx - Handling Form Submission
 * Follow form2.tsx - Access the input field data after the form is submitted using useRef Hook
 * To access the input field we can also use State hook;
 * 
 */
import { FormEvent, useState,  } from "react";

const Form2 = () => {
    
    const [person, setPerson] = useState({
        name: "",
        age: 0
    })


  //Handling Form Submission whenever the form is submitted
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //In React, event.preventDefault() is used to prevent the default action of an event, such as stopping a form from submitting and causing a page reload. It's commonly used in forms or other actions where the default browser behavior needs to be controlled manually.
    console.log(person);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input value={person.name} onChange={(event)=> setPerson({...person, name: event.target.value})}  id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input value={person.age} onChange={(event)=> setPerson({...person, age: parseInt(event.target.value)})} id="age" type="text" className="form-control" />
      </div>

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form2;
