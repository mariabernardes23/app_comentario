import { FormEvent, useEffect, useState } from "react";
import './css/formulario.css'

export interface InfoComentario {
    autor: string;
    texto: string;
    dataHora: string;
}

export default function Formulario(props: { adicionarComentario: (comentario: InfoComentario) => void }) {
    const [ comentario, setComentario ] = useState<InfoComentario>({
        autor: '',
        texto: '',
        dataHora: '',
    });

    const [ inputAutor, setInputAutor ] = useState('')
    const [ inputTexto, setInputTexto ] = useState('')
    const [ inputDataHora, setInputDataHora ] = useState('');

    function adicionarComentario(comentario: InfoComentario) {
        props.adicionarComentario(comentario)
        setInputAutor('')
        setInputTexto('')
    }

    useEffect(() => {
        atualizarDataHora()

        console.log(comentario);
        if (comentario.autor.trim() !== '' && comentario.texto.trim() !== '') {
            adicionarComentario(comentario);
        }else {
            return;
        }
        
    }, [ comentario ])

    function atualizarDataHora() {
        setInputDataHora(new Date().toLocaleString())
    };
 
    function validarComentario(event: FormEvent) {
        event.preventDefault()
        
        atualizarDataHora()

        setComentario({
            autor: inputAutor,
            texto: inputTexto,
            dataHora: inputDataHora
        })
        
        console.log(inputAutor, inputTexto, inputDataHora);
    }
    
    return (
        <div>
            <form 
                onSubmit={ validarComentario }
                className="formulario"
            >
                <input 
                    placeholder="Digite seu nome"
                    value={ inputAutor }
                    onChange={ (e) => setInputAutor(e.target.value)}
                />

                <textarea 
                    placeholder="Digite seu comentario aqui"
                    value={ inputTexto }
                    onChange={e => setInputTexto(e.target.value)}
                ></textarea>

                <input 
                    type="submit" 
                    value="Comentar"
                    className="button"/>
                    
            </form>           
        </div>
    )
}