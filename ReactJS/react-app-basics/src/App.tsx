//import ListGroup from "./components/ListGroup";
// <ListGroup />

import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
/***Rules/Convention to follow while using ReactJS
 * Pacal Casing --> menas naming the function name with first letter capital letter
 * If making components use the .tsx extensions
 */

function App() {

  //D1
  //const cities = ["Surat", "Mumbai", "Toronto", "New-York"];
  //const handleSelect = (item:string)=> {
    //console.log(item);
  
  //D2 --> Execerise:1
  //Learning how to share a state hook with two component
  //--> Using E-Comenrece website where user add the product to the cart and also get updated to navbar --> Take a look at walmart or amazon website for reference
  const [cartItem, setCartItem] = useState(['Product1', 'Product2']);

  const handleAddItem = () =>{
    const newItem = "Product"+(cartItem.length+1)
    setCartItem([...cartItem, newItem]);
  }

  return (
    <div>
      {/* D1 */}
      {/* <ListGroup cities={cities} heading="Cities around the world" onSelectItem={handleSelect} /> */}
      {/* <Button alert="This is the alert that number should not be above 20"/>; */}

      {/* D2 */}
      <NavBar cartItemsCount={cartItem.length}/>
      <Cart cartItems={cartItem} addItem={handleAddItem} onClear={()=> setCartItem([])}/>

    </div>
  );
}

export default App;
