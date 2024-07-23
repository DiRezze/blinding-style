import React from "react";

function PresetStyleSelector(){
    return(
        <div className="input-group mb-3 tool-menu">
        <button  className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Estilos Predefinidos
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Estilo 1</a></li>
            <li><a className="dropdown-item" href="#">Estilo 2</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Estilo Padrão</a></li>
        </ul>
        </div>
    );
}

export default PresetStyleSelector;