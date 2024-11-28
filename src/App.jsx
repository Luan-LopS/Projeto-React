import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/RepoList"


//mount
//update
//unmount

function App() {
  const [formularioEstaVisivel, setFomularioEstaVisivel] = useState(false)
  return(
    <>
      <Perfil nomeUsuario= 'Luan-Lops'/>
      <ReposList nomeUsuario ='Luan-Lops'/>

      {/*
      {formularioEstaVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFomularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle Form</button>
      */}
    </>
    
  )
}

export default App
