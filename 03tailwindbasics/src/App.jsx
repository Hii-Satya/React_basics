import './App.css'
import Card from './components/card'
function App() {
let myobj = {
  "name" : "Satya",
   age : 2
}

  return (
    <>
   <Card username ="hii" someobj = {myobj}/>
   <Card  username="mna"/>
   <Card/>
   </>
  )
}

export default App
