import React from "react";

function BackgroundSelector(){
    return(
        <div className="input-group mb-3 tool-menu">
            <button  className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Plano de Fundo
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Imagem</a></li>
                <li><a className="dropdown-item" href="#">Cor Sólida</a></li>
                <li><a className="dropdown-item" href="#">Gradiente</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Padrão do Sistema</a></li>
                <li><a className="dropdown-item" href="#">Claro</a></li>
                <li><a className="dropdown-item" href="#">Escuro</a></li>
            </ul>
        </div>
    );
}

export default BackgroundSelector;
