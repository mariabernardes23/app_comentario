import { InfoComentario } from './Formulario'
import './css/comentario.css'
export default function Comentario(props: { listaComentario: InfoComentario[] }) {
    let lista = props.listaComentario.slice(0).reverse();

    return (
        <div>
            {lista.map((item, index) => {
                return(
                    <div key={index} className='comentario'>
                        <div className="headerComentario">
                            <div className="infoAutor">
                                <img src="./img/draw_Nuna.jpg" alt="" />
                                <p>{item.autor}</p>
                            </div>
                            <div className="dataHora">
                                <p>{item.dataHora.replace(',', ' -')}</p>
                            </div>
                        </div>
            
                        <div className="texto">
                            <p>{item.texto}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}