import './App.css'
import { useState } from 'react';
function App() {
  
  let [count,setCount] =useState(0);  //0 is default value  this state =ment is used to update the ui when fxn is called.This a hook which is used to update the data
  //  let count=0;
  const addval = () =>{
 console.log('Value Added',setCount(count+1));
  }
  const removeVal = () =>{
 console.log('Value Decrease',setCount(count-1));
  }
  return (
    <>
      <h1>Counter Value : {count}</h1>
      <button onClick={()=>{
        if(count <20){
          addval();
        }
      }}>Add Value {count}</button>
      <br/>
      <button onClick={()=>{
        if(count > 0){
          removeVal();
        }
      }}>Remove Value {count}</button>
    </>
  )
}

export default App
