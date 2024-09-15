//import ListGroup from "./components/ListGroup";
// <ListGroup />

import Button from "./components/Button";
/***Rules/Convention to follow while using ReactJS
 * Pacal Casing --> menas naming the function name with first letter capital letter
 * If making components use the .tsx extensions
 */

function App() {
  //const cities = ["Surat", "Mumbai", "Toronto", "New-York"];
  //const handleSelect = (item:string)=> {
    //console.log(item);
    
  

  return (
    <div>
      {/* <ListGroup cities={cities} heading="Cities around the world" onSelectItem={handleSelect} /> */}
      <Button alert="This is the alert that number should not be above 20"/>;

    </div>
  );
}

export default App;
