import React from "react";

function SampleSelector(){
    return(
        <div className="input-group mb-3 tool-menu">
        <button  className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Layout
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Layout 1</a></li>
            <li><a className="dropdown-item" href="#">Layout 2</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Layout Vazio</a></li>
        </ul>
        </div>
    );
}

export default SampleSelector;