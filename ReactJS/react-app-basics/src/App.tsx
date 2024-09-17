//import ListGroup from "./components/ListGroup";
// <ListGroup />

//import { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import Form from "./components/Form";
// import Form2 from "./components/Form2";
//import Form3 from "./components/Form3";
import FormGrocery from "./components/FormGrocery";
/***Rules/Convention to follow while using ReactJS
 * Pacal Casing --> menas naming the function name with first letter capital letter
 * If making components use the .tsx extensions
 */

function App() {

  //D1
  //const cities = ["Surat", "Mumbai", "Toronto", "New-York"];
  //const handleSelect = (item:string)=> {
    //console.log(item);
  
  //D2 --> Concept
  //Learning how to share a state hook with two component
  //--> Using E-Comenrece website where user add the product to the cart and also get updated to navbar --> Take a look at walmart or amazon website for reference
  // const [cartItem, setCartItem] = useState(['Product1', 'Product2']);

  // const handleAddItem = () =>{
  //   const newItem = "Product"+(cartItem.length+1)
  //   setCartItem([...cartItem, newItem]);
  // }


  //D2 --> Exercise: 1
  //To change the name for the player in the nested object state on click.
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({...game, player: {...game.player, name: "Bob"}})

  // }

  //D2 --> Exercise: 2
  //Add the toppings to a array property in the object state
  // const [pizza, setPizza] = useState({
  //   name:"Paneer",
  //   toppings: ['Hot peppers']
  // });

  // const handleClick = () => {
  //   setPizza({...pizza, toppings:[...pizza.toppings, "onions"]})

  // }

  //D2 --> Exercise: 3
  //In this exercide whenever button is clicked quantity of product 1 should change to 2

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     {id:1, title: 'Product1', quantity:1},
  //     {id:2, title: 'Product2', quantity:2}
  //   ]
  // })

  // const handleClick = () => {
  //   setCart({...cart, items: [...cart.items, {id:1, title:"Product1", quantity:2}]})
  // }

  // const handleClick = () => {
  //   setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item , quantity:2}: item)})
  // }

  return (
    <div>
      {/* D1 */}
      {/* <ListGroup cities={cities} heading="Cities around the world" onSelectItem={handleSelect} /> */}
      {/* <Button alert="This is the alert that number should not be above 20"/>; */}

      {/* D2 */}
      {/* <NavBar cartItemsCount={cartItem.length}/>
      <Cart cartItems={cartItem} addItem={handleAddItem} onClear={()=> setCartItem([])}/> */}

      {/* D3 Learn How to build forms */}
      {/*  */}
        {/* <Form /> */}
        <FormGrocery />
        {/* <Form2 /> */}

        {/* <Form3 /> */}
        
    </div>
  );
}

export default App;

