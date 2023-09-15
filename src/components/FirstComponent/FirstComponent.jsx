import  {Navbar}  from "./navbar"
import {SectionOne} from "./sectionOne"
import { Introduction } from "./introduction"
import { References } from "./references"


export const FirstComponent = () => {
  const navstyle={
    display:"flex",
  }
  return (
    
    <div id="total">
  <div id="menuP" style={navstyle}>
    <h1>mi primer Reactaa</h1>
    <Navbar/>
    </div>
    
    <div id="content">
      <div id="inf">
    <SectionOne></SectionOne>
    
    </div>
    <div id="ref"> 
      <References></References>
    </div>
    </div>
    
    <div></div>
    </div>
   
  )
}
