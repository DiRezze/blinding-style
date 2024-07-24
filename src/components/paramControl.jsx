import React from "react";

function ParamSelector({ label, min, max, setId, property, value, handleCssChange }){
    const handleInputChange = (event) => {
        handleCssChange(property, event.target.value);
    };
    return(
        <section>
            <label className='form-label' htmlForfor={setId}>{label}</label>
            <div className="d-flex flex-row">
                <input
                className="form-control" 
                value={value} 
                onChange={handleInputChange}
                type='number'
                />
                <input 
                className='form-range' 
                step={1} 
                min={min} 
                max={max} 
                value={value} 
                defaultValue={0} 
                id={setId}  
                onChange={handleInputChange} 
                type='range' 
                />
            </div>
        </section>
    );
}

export default ParamSelector;
