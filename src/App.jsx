import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])
 
// fetch fa una chiamata al server tra partentesi 
function featchPost(){ 
  fetch("http://localhost:3000/posts/")
// la prima concatenazione gestisce la richiesta e ci da una risposta che convenzionalmente viene nominata
// =>response.json converte la risposta in json
.then(response => response.json())
.then(setPosts)
}
 useEffect ( featchPost, [] )
  return (
    <> 
    <table>
     {posts.map((post)=>{
      const {id,title,image,tags,content} = post
      
        return(
          <tr key={id}>
            <th><h1>{title}</h1></th>
            <td><img className="table_image" src={`http://localhost:3000/public${image}`} alt="" /></td>
            <td><p>{content}</p></td>
            <td><p>{tags}</p></td>
          </tr>
        )
     })}
     </table>
    </>
  )
}

export default App
