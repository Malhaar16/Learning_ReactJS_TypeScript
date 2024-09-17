/**
 ** Note: Don't use the following shortcut every time, it is just for time saving
 * To create the basic template for the component install ES7+ Teact/Redux extention and then type"rafce" means "React Arrow Function Export Component" and press enter*/

 interface Props{
    cartItemsCount: number
 }
 
 const NavBar = ({ cartItemsCount }: Props) => {
   return (
     <div><h2>NavBar: {cartItemsCount}</h2></div>
   )
 }
 
 export default NavBar


