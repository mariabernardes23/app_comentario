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
        // setComentario({
        //     autor: '',
        //     texto: '',
        //     dataHora: ''
        // });
        // atualizarDataHora();
        
        // setComentario({...comentario, autor: ''})
        // setComentario({...comentario, texto: ''})
    }

    useEffect(() => {
        atualizarDataHora();
        if (comentario.autor.trim() !== '' && comentario.texto.trim() !== '') {
            adicionarComentario(comentario);
        }else {
            return;
        }
        
    }, [comentario])

    function  atualizarDataHora() {
        //const dataAtual = new Date().toLocaleString()
        //setComentario({...comentario, dataHora: dataAtual});
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

        
        console.log(comentario);



        // if(comentario.autor.trim() !== '' && comentario.texto.trim() !== '') {
        //     adicionarComentario(comentario)
            
        //     // setComentario({
        //     //     autor: '',
        //     //     texto: '',
        //     //     dataHora: ''
        //     // })
        //     // setInputAutor('')
        //     // setInputTexto('')
        //     // setComentario({...comentario, autor: ''})
        //     // setComentario({...comentario, texto: ''})
        // } else {
        //     alert('Comentario inválido')
        //     // setComentario({...comentario, autor: ''})
        //     // setComentario({...comentario, texto: ''})
        // }
    }
    
    return (
        <div>
            <form 
                onSubmit={ validarComentario }
                className="formulario"
            >
                <input 
                    placeholder="Digite seu nome"
                    //value={ comentario.autor }
                    value={ inputAutor }
                    //onChange={ e => setComentario({...comentario, autor: e.target.value}) }
                    onChange={ (e) => setInputAutor(e.target.value)}
                />

                <textarea 
                    placeholder="Digite seu comentario aqui"
                    //value={ comentario.texto }
                    value={ inputTexto }
                    //onChange={ e => setComentario({...comentario, texto: e.target.value}) }
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