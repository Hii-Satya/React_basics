import { useState , useEffect } from 'react'
import './App.css'
function App() {
const [color,setColor] = useState("olive")
useEffect(() => {
    
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    
    <div className='rounded' style={{backgroundColor : color}}>
      <div className=' flex flex-col justify-center bottom-2 inset-x-0 px-2 rounded ' style={{ backgroundColor: "white", textEmphasisColor:"blue" }}> 
    <button onClick={()=>setColor( "blue")}>red</button>
    <button onClick={()=>setColor( "green")}>green</button>
    <button onClick={()=>setColor( "black")}>black</button>
    <button onClick={()=>setColor( "pink")}>pink</button>
    <button onClick={()=>setColor( "yellow")}>yellow</button>
    <button onClick={()=>setColor( "orange")}>orange</button>
    
      <div>
      </div>
      </div>
      </div>
    
  )
}

export default App
