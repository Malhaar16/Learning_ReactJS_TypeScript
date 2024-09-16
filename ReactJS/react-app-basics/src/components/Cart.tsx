interface Props {
  cartItems: string[]; //creating the array of string prop where we are string our products
  addItem:() => void;
  onClear: () => void;
}

const Cart = ({ cartItems, addItem,  onClear }: Props) => {


  return (
    <>
      <div>
        <h2>Total item in the cart</h2>
      <ul>
        {cartItems.map(item=> <li key={item}> {item} </li>)} {/**Just mapping the cart items in the form of list */}
      </ul>
      
       {/* Just to for learning purpose */}
       <button type="submit" onClick={addItem}>Add Item to cart</button> <br /><br />
     
      <button type="reset" onClick={onClear}>Clear the cart</button>

      </div>
    </>
  );
};

export default Cart;
