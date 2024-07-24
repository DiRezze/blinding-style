import React, { useState } from "react";

function ParamSelector(props){
    const [cssValue, setCssValue] = useState(0);
    const handleInputChange = (event) => {
        setCssValue(event.target.value);
    };
    return(
        <div>
            <label className='form-label' for={props.setId}>Raio da Borda</label>
            <input className="form-control" value={cssValue} onChange={handleInputChange}></input>
            <input className='form-range' step={1} min={props.min} max={props.max} value={cssValue} defaultValue={0} id={props.setId}  onChange={handleInputChange} type='range'></input>
        </div>
    );
}

export default ParamSelector;
