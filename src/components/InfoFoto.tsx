import "./css/infoFoto.css";
import { InfoComentario } from "./Formulario";
import { useState } from "react";

export default function InfoFoto(props: { listaComentario: InfoComentario[] }) {
  const [contador, setContador] = useState(0);
  const [cor, setCor] = useState("black");

  function like() {
    if( contador > 0) {
      setContador((valorAtual) => valorAtual - 1);
      setCor("black");
    } else {
      setContador((valorAtual) => valorAtual + 1);
      setCor("#ef233c");
    }  
  }

  return (
    <div className="informacoes">
      <div className="like">
        <button type="button" onClick={ like }>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z"
              fill={ cor }
            />
          </svg>
          <p>{ contador }</p>
        </button>
      </div>
      <div className="totalComentario">
        <svg
          fill="#000000"
          width="1.75rem"
          height="1.75rem"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>comment-right</title>
          <path d="M30.893 28.023c-1.685-1.617-2.921-3.69-3.509-6.021l-0.019-0.087c1.754-1.973 2.841-4.575 2.885-7.429l0-0.009c0-6.961-6.617-12.624-14.75-12.624s-14.75 5.663-14.75 12.624 6.617 12.625 14.75 12.625c1.851-0.001 3.632-0.3 5.298-0.851l-0.119 0.034c2.543 1.908 5.61 3.262 8.946 3.822l0.122 0.017c0.076 0.016 0.163 0.026 0.252 0.026 0.691 0 1.251-0.56 1.251-1.251 0-0.34-0.136-0.649-0.357-0.875l0 0zM21.766 23.982c-0.047-0.035-0.1-0.068-0.156-0.097l-0.007-0.003c-0.061-0.047-0.131-0.091-0.204-0.127l-0.007-0.003c-0.133-0.041-0.291-0.074-0.454-0.093l-0.014-0.001c-0.098 0.004-0.19 0.019-0.278 0.044l0.009-0.002c-0.064 0.005-0.123 0.015-0.18 0.028l0.008-0.002c-1.465 0.554-3.159 0.875-4.928 0.875-0.019 0-0.038-0-0.057-0h0.003c-6.755 0-12.25-4.543-12.25-10.125s5.495-10.124 12.25-10.124c6.754 0 12.25 4.542 12.25 10.124-0.025 2.459-1.034 4.678-2.652 6.285l-0 0c-0.021 0.021-0.027 0.050-0.046 0.072-0.157 0.178-0.259 0.409-0.275 0.663l-0 0.003c-0.006 0.047-0.010 0.101-0.010 0.156 0 0.031 0.001 0.061 0.003 0.091l-0-0.004c0.003 0.032-0.008 0.062-0.003 0.095 0.331 1.835 0.989 3.47 1.917 4.915l-0.032-0.054c-1.886-0.602-3.516-1.531-4.904-2.732l0.018 0.015z"></path>
        </svg>
        <p>{ props.listaComentario.length }</p>
      </div>
    </div>
  );
}
