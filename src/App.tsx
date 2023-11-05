import './components/css/App.css'
import { useState, useEffect } from "react";
import Foto from './components/Foto';
import { InfoComentario } from './components/Formulario'
import Formulario  from './components/Formulario'
import InfoFoto from './components/InfoFoto';
import Comentario from './components/Comentario';

function App() {
  const [listaComentario, setListaComentario ] = useState<InfoComentario[]>([])

  function adicionarComentario(comentario: InfoComentario) {
    setListaComentario([...listaComentario, comentario])
    
    localStorage.setItem('key_comentarios', JSON.stringify([...listaComentario, comentario]))
  }

  useEffect(() => {
    const savedComentario = localStorage.getItem('key_comentarios')

    if(savedComentario) {
      setListaComentario(JSON.parse(savedComentario))
    }
  }, [])

  return (
    <>
    <main className='conteudo'>
      <Foto />
      <InfoFoto listaComentario={listaComentario}/>
      <Formulario adicionarComentario={adicionarComentario}/>
      <Comentario listaComentario={listaComentario}/>
    </main>
    </>
  )
}

export default App
