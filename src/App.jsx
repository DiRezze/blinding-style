import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ToolBar from './components/toolsBar'
import React, { useState } from 'react';
import ParamSelector from './components/paramControl';

function App() {
  const [cssValues, setCssValues] = useState({
    borderRadius: 0,
    width: 200,
    height: 100,
    backgroundColor: 'lightblue'
  });

  const handleCssChange = (property, value) => {
    setCssValues((prevValues) => ({
      ...prevValues,
      [property]: value
    }));
  };
  return (
    <>
    <main>
      <ToolBar />
      <div className='d-flex flex-row app-main-frame' id='app-box'>
        <div>
          <div className='card' id='app-card' style={{ borderRadius: `${cssValues.borderRadius}px`}}
          >Conteúdo Teste</div>
        </div>
        <div>
          <h2>Parâmetros</h2>
          <ParamSelector 
            label="Raio da Borda"
            min={0} 
            max={32} 
            setId="borderRadiusRange" 
            property="borderRadius" 
            value={cssValues.borderRadius} 
            handleCssChange={handleCssChange} 
          />
        </div>
      </div>
    </main>
    </>
  )
}

export default App
