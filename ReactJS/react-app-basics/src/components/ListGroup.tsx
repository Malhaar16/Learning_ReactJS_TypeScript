//import { Fragment } from "react/jsx-runtime";
//import { MouseEvent } from "react";

import { useState } from "react";

/**
 * We use Fragment to add multiple element to the component because in React we can only add one element at the time
 * Other way is add all element in div element but that is neither the long term solution nor efficient
 */

/**
 * Props is immutable means we should not chamge props varaible every time somethings happens it should be unchangeable
 * However state should be mutable means changeble
 */

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  //Hook
  let [selectedindex, setselectedindex] = useState(-1);

  //const handleclick = (event: MouseEvent) => console.log(event)

  /*  {cities.length === 0 && <p>No element found</p>} --> This is the way to set contional and find if there is any elemenyt in the array cities or not */
  return (
    <>
      <h1> {heading} </h1>

      {cities.length === 0 && <p>No element found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setselectedindex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
