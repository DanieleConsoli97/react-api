import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// fetch fa una chiamata al server tra partentesi 
fetch("http://localhost:3000/posts/")
// la prima concatenazione gestisce la richiesta e ci da una risposta che convenzionalmente viene nominata
// =>response.json converte la risposta in json
.then(response => response.json())
.then(data => {
  console.log(data)
  })

  return (
    <>
     <h1></h1>
    </>
  )
}

export default App
