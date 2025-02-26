import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  //NOTE - impostaimo la funzioneche verrà richiamata da useEffect
  function featchPost() {
    // fetch fa una chiamata al server tra partentesi  in questo caso al nostro server node
    fetch("http://localhost:3000/posts/")
      // la prima concatenazione gestisce la richiesta e ci da una risposta che convenzionalmente viene nominata
      // =>response.json converte la risposta in json
      .then(response => response.json())
      //NOTE - diamo a setPosts il valore della response
      .then(setPosts)

  }
  //NOTE - passiamo la funzione della chiamata
  useEffect(featchPost, [])
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Ricetta</td>
            <td>Immagine</td>
            <td>Descrizione</td>
            <td>Tag</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            //NOTE - destructuring object
            const { id, title, image, tags, content } = post
            return (
              <tr key={id}>
                <td><h1>{title}</h1></td>
                <td><img className="table_image" src={`http://localhost:3000/public${image}`} alt="" /></td>
                <td><p>{content}</p></td>
                <td><p>{tags}</p></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
