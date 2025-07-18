
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
const[charAllow,setchar] =useState(false)
const[numAllow,setnum]  =useState(false)
const [length,setlength] =useState(8);
const [password,setpassword]  =useState("")



const passwordRef = useRef(null) //this is used to pass a reference of any element present in the page



  //this is a fxn whose  syntax is useCallback(()=>{operation},[dependency]) 
const passwordgenerator =useCallback(() => {
  let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
  let paas =""

  if(numAllow){
    str+="1234567890"
  }
  if(charAllow){
    str +="!@#$%^&*()_+~{}|:?><:"
  }
  for(let i=0;i<length;i++){
    let char=Math.floor(Math.random()*str.length + 1)
    paas += str.charAt(char)
  }
  setpassword(paas)
},[ charAllow , numAllow , length , setpassword])


  useEffect(() => {      //this is used when anything releated to this array is change it re render itself
    passwordgenerator()
  }, [length, numAllow, charAllow, passwordgenerator])

  //useCallback are used to memorise

  const copyPasswordToClipboard = useCallback(() => {
  // window.navigator.clipboard.writeText(password)  this is not much suitable as pr user interaction

  //              OR
    passwordRef.current?.select(); //this is used to select the element inside the password 
    passwordRef.current?.setSelectionRange(0, 999); //this is used when we like to select some range of element
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded px-4 py-3 my-8 bg-red-800" >
    <h1>password generator</h1>


    <div className='rounded flex-shadow-lg text-3xl overflow hidden mb-4'>
    <input type='text' 
    value={password}
     placeholder="password"
       readOnly 
       ref={passwordRef}/> 
   <button  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    onClick={copyPasswordToClipboard}>copy</button>
    </div>


    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
       <input
       type='range'
       min ={8}
       max={50}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setlength(e.target.value)}}
       />
      <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1"> 
        <input type='checkbox' defaultChecked ={numAllow} onChange={()=>setnum((prev)=>!prev)}/>
        <label htmlFor='numberInput'>Number</label>
      </div>
 

<div className="flex items-center gap-x-1">
<input type='checkbox' defaultChecked={charAllow} id='characterInput' onChange={()=>{setchar ((prev)=>!prev)}}/>
<label htmlFor='characterInput'>Character</label>
</div>
    </div>
  
     </div>
  )
}

export default App
