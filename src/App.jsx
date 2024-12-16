
import Userinput from "./components/Userinput";
import Tableresult from "./components/Tableresult";
import { useState } from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
  const[array,setArray]=useState([0,0,0,0]);
  function fun1(event,index){
    setArray((prev)=>
      {const updatedArray=[...prev]
      updatedArray[index]=event.target.value
      return updatedArray}
    )
  }
  // console.log(array)
  return (
    <section>
      <div id="user-input">
      <span className="input-group"> 
        <p><Userinput updatefun={fun1} index={0} >Initial Investment</Userinput></p>
        <p><Userinput updatefun={fun1} index={1}>Annual Investment </Userinput></p>
        </span>
        <span className="input-group">
        <p><Userinput updatefun={fun1} index={2}>Expected Return</Userinput></p>
        <p><Userinput updatefun={fun1} index={3}>Duration</Userinput></p>
        </span>
        <span id="result">
        </span>
      </div>
      <Tableresult userArray={array}/>
  </section>
   
  )
}

export default App
